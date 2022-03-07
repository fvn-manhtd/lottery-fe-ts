import {
  Box,
  Button,
  Divider,
  FlexBox,
  Span,
  Image,
  Typography,
  TableRow,
  H5,
  CheckBox,
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Card, Stepper } from "components/organisms";
import { stepperList, Route as ROUTES, addThousandsSeparators } from "utils";

import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import {
  selectCurrentUser,
  selectCurrentUserCard,
  selectDefaultCardID,
  selectPaymethod,
  storeObjectActions,
} from "redux/features";
import { push } from "connected-react-router";
import { useFormik } from "formik";
import { usePurchaseCartMutation, useVerifyCartMutation } from "api";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import { Cart } from "models";
import PayjpCheckout from "hooks/PayjpCheckout";
import { LoadingBox } from "components/molecules";
import { toast } from "react-toastify";

const OrderConfirmationPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectCurrentUser);
  const selectedPaymethod = useAppSelector(selectPaymethod);
  const [cartData, setCartData] = useState<Cart>(null);
  const [cardToken, setCardToken] = useState(null);

  const [savedCard, setSavedCard] = useState(false);

  const currentUserCards = useAppSelector(selectCurrentUserCard);
  const defaultCardID = useAppSelector(selectDefaultCardID);

  // Payjp checkout
  const payjpCheckoutProps = {
    dataKey: process.env.REACT_APP_PAPJP_PUBLIC_KEY,
    dataText: "新しクレジットカード追加",
    dataPartial: "true",
    dataNamePlaceholder: "名前を入力してください",
    onCreatedHandler: (payload) => {
      console.log(payload.token);
      setCardToken(payload.token);
    },
    onFailedHandler: (payload) => {
      console.log("onFailedHandler", payload && payload.message);
    },
  };

  //Get Verify Cart
  const args = {
    payment_method: selectedPaymethod,
    //Order
    order_last_name: currentUser.last_name,
    order_first_name: currentUser.first_name,
    order_last_name_kana: currentUser.last_name_kana,
    order_first_name_kana: currentUser.first_name_kana,
    order_post_code: currentUser.post_code,
    order_prefecture: currentUser.prefecture,
    order_address: currentUser.address,
    order_phone_number: currentUser.phone_number,
    //Recipient
    recipient_input: true,
    recipient_last_name: currentUser.last_name,
    recipient_first_name: currentUser.first_name,
    recipient_last_name_kana: currentUser.last_name_kana,
    recipient_first_name_kana: currentUser.first_name_kana,
    recipient_post_code: currentUser.post_code,
    recipient_prefecture: currentUser.prefecture,
    recipient_address: currentUser.address,
    recipient_phone_number: currentUser.phone_number,
  };

  //Handle Verfiy Cart
  const [cartVerifyData, { isLoading: isVerifyCartLoading }] =
    useVerifyCartMutation();

  const handleVerifyCart = async () => {
    try {
      const data = await cartVerifyData(JSON.stringify(args)).unwrap();
      setCartData(data);
    } catch (error) {
      console.log("Error verify cart", error);
      setCartData(null);
      dispatch(push(ROUTES.ERROR));
    }
  };
  useEffect(() => {
    handleVerifyCart();
  }, []);

  const initialValues = {
    payment_method: selectedPaymethod,
    //Order
    order_last_name: currentUser.last_name,
    order_first_name: currentUser.first_name,
    order_last_name_kana: currentUser.last_name_kana,
    order_first_name_kana: currentUser.first_name_kana,
    order_post_code: currentUser.post_code,
    order_prefecture: currentUser.prefecture,
    order_address: currentUser.address,
    order_phone_number: currentUser.phone_number,
    //Recipient
    recipient_input: true,
    recipient_last_name: currentUser.last_name,
    recipient_first_name: currentUser.first_name,
    recipient_last_name_kana: currentUser.last_name_kana,
    recipient_first_name_kana: currentUser.first_name_kana,
    recipient_post_code: currentUser.post_code,
    recipient_prefecture: currentUser.prefecture,
    recipient_address: currentUser.address,
    recipient_phone_number: currentUser.phone_number,
    charge_once: false,
  };

  // Do Order

  //Handle Purchase Cart
  const [purchaseCart, { isLoading: isPurchaseCartLoading }] =
    usePurchaseCartMutation();

  const handleFormPurchaseSubmit = async (values) => {
    try {
      // Set New card
      let args = null;
      if (cardToken) {
        args = {
          ...values,
          charge_once: true,
          card_token: cardToken,
          register_this_card: savedCard, // Register Card to Customer
        };
      } else {
        args = values;
      }
      const res = await purchaseCart(JSON.stringify(args)).unwrap();
      dispatch(storeObjectActions.setObject(res));
      dispatch(push(ROUTES.ORDER_COMPLETE));
    } catch (error) {
      console.log("Error purchase cart", error);
      toast.error("クレジットカードが必要です", { autoClose: 7000 });
    }
  };

  const { handleSubmit } = useFormik({
    onSubmit: handleFormPurchaseSubmit,
    initialValues,
  });

  return (
    <CartLayout>
      <form onSubmit={handleSubmit}>
        <Box
          bg="body.paper"
          borderRadius="5px"
          maxWidth={1200}
          shadow={5}
          mx={{ _: "15px", md: "auto" }}
          py="4rem"
          px="1rem"
        >
          <Box maxWidth="1000px" mx="auto">
            <Box mb="3rem">
              <Stepper stepperList={stepperList} selectedStep={3} />
            </Box>
            <Divider mb="1rem" bg="gray.500"></Divider>
            {/*Order Info User */}
            <FlexBox
              mb="1rem"
              flexDirection={{ _: "column", md: "row" }}
              alignItems={{ _: "flex-start", md: "center" }}
              justifyContent="flex-start"
            >
              <Box
                width={{ md: "20%" }}
                fontWeight={600}
                mb={{ _: "10px", md: "0" }}
              >
                ご注文者
              </Box>
              <Box
                width={{ md: "80%" }}
              >{`${currentUser.first_name} ${currentUser.last_name}`}</Box>
            </FlexBox>
            <Divider mb="1rem" bg="gray.500"></Divider>

            <FlexBox
              mb="1rem"
              flexDirection={{ _: "column", md: "row" }}
              alignItems={{ _: "flex-start", md: "center" }}
              justifyContent="flex-start"
            >
              <Box
                width={{ md: "20%" }}
                fontWeight={600}
                mb={{ _: "10px", md: "0" }}
              >
                配送先
              </Box>
              <Box width={{ md: "80%" }}>
                <Typography>{`〒${currentUser.post_code} ${currentUser.prefecture}${currentUser.address}`}</Typography>
                <Typography>{`TEL ${currentUser.phone_number}`}</Typography>
              </Box>
            </FlexBox>

            <Divider mb="1rem" bg="gray.500"></Divider>
            {/*Cart Item Skeleton */}
            {isVerifyCartLoading && (
              <>
                <FlexBox
                  mb="1rem"
                  alignItems={{ _: "flex-start", md: "center" }}
                >
                  <Box width={{ _: "50%", md: "20%" }} px="1rem">
                    <Skeleton height="120px" />
                  </Box>
                  <Box
                    width={{ _: "50%", md: "50%" }}
                    fontSize={{ _: "0.8rem", md: "1rem" }}
                  >
                    <Box mb="5px">
                      <Skeleton width="90%" height="25px" />
                    </Box>
                    <Box mb="5px" display="inline-block">
                      <Skeleton width="120px" height="15px" />
                    </Box>
                    <Box>
                      <Skeleton width="80%" height="60px" />
                    </Box>
                  </Box>
                  <Box
                    width="10%"
                    display={{ _: "none", md: "block" }}
                    mx="auto"
                  >
                    <Skeleton height="30px" width="90%" />
                  </Box>
                  <Box
                    width="15%"
                    display={{ _: "none", md: "block" }}
                    mx="auto"
                  >
                    <Skeleton height="30px" width="90%" />
                  </Box>
                  <Box
                    mx="auto"
                    width="5%"
                    display={{ _: "none", md: "block" }}
                  >
                    <Skeleton height="30px" width="90%" />
                  </Box>
                </FlexBox>

                <Divider mb="1rem" bg="gray.500"></Divider>

                <FlexBox justifyContent="flex-end" mb="1rem">
                  <Box width="100%" maxWidth="380px">
                    <FlexBox alignItems="center" mb="10px">
                      <Typography fontSize="1rem" width="50%" fontWeight={600}>
                        商品税込計<Span fontSize="0.8rem">（税込）</Span>
                      </Typography>
                      <Typography
                        textAlign="right"
                        width="50%"
                        fontWeight={600}
                        fontSize="1.4rem"
                      >
                        <Skeleton height="30px" width="90%" />
                      </Typography>
                    </FlexBox>

                    <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                      <Typography width="50%" fontWeight={600}>
                        送料
                      </Typography>
                      <Typography
                        textAlign="right"
                        width="50%"
                        fontWeight={600}
                      >
                        <Skeleton height="30px" width="90%" />
                      </Typography>
                    </FlexBox>

                    <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                      <Typography width="50%" fontWeight={600}>
                        内消費税
                      </Typography>
                      <Typography
                        textAlign="right"
                        width="50%"
                        fontWeight={600}
                      >
                        <Skeleton height="30px" width="90%" />
                      </Typography>
                    </FlexBox>

                    <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                      <Typography width="50%" fontWeight={600}>
                        クーポン
                      </Typography>
                      <Typography
                        textAlign="right"
                        width="50%"
                        fontWeight={600}
                      >
                        <Skeleton height="30px" width="90%" />
                      </Typography>
                    </FlexBox>

                    <FlexBox alignItems="center" mb="10px" color="primary.main">
                      <Typography fontSize="1rem" width="50%" fontWeight={600}>
                        お支払い総計<Span fontSize="0.8rem">（税込）</Span>
                      </Typography>
                      <Typography
                        textAlign="right"
                        width="50%"
                        fontWeight={600}
                        fontSize="1.4rem"
                      >
                        <Skeleton height="30px" width="90%" />
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
              </>
            )}
            {/*Cart Item Info */}
            {!isVerifyCartLoading &&
              cartData &&
              cartData?.carts?.map((cartItem) => {
                return (
                  <FlexBox
                    mb="1rem"
                    alignItems={{ _: "flex-start", md: "center" }}
                    key={cartItem.lottery_ticket_catalog_id}
                  >
                    <Box width={{ _: "50%", md: "20%" }} px="1rem">
                      <Image
                        mb="1rem"
                        width="100%"
                        src={
                          process.env.REACT_APP_MALL_IMAGE_PATH +
                          cartItem.lottery_image
                        }
                        alt={cartItem.lottery_title}
                        objectFit="cover"
                      />
                    </Box>
                    <Box
                      width={{ _: "50%", md: "50%" }}
                      fontSize={{ _: "0.8rem", md: "1rem" }}
                    >
                      <Typography mb="5px" fontWeight={600}>
                        {cartItem.lottery_title}
                      </Typography>
                      <Typography mb="5px">
                        {cartItem.number_of_times}回くじ
                      </Typography>
                      <Typography mb="5px" color="gray.500">
                        商品番号: {cartItem.lottery_ticket_catalog_id}
                      </Typography>

                      <FlexBox fontSize="0.8rem" display={{ md: "none" }}>
                        <Box width="50%">数量: {cartItem.amount}</Box>
                        <Box width="50%">
                          ¥ {addThousandsSeparators(cartItem.price_at_the_time)}
                        </Box>
                      </FlexBox>
                    </Box>
                    <Box width="10%" display={{ _: "none", md: "block" }}>
                      {cartItem.amount}
                    </Box>
                    <Box width="15%" display={{ _: "none", md: "block" }}>
                      ¥ {addThousandsSeparators(cartItem.price_at_the_time)}
                    </Box>
                  </FlexBox>
                );
              })}
            <Divider mb="1rem" bg="gray.500"></Divider>
            {/*Order Calc */}
            {!isVerifyCartLoading && cartData && cartData !== null && (
              <FlexBox justifyContent="flex-end" mb="1rem">
                <Box width="100%" maxWidth="380px">
                  <FlexBox alignItems="center" mb="10px">
                    <Typography fontSize="1rem" width="50%" fontWeight={600}>
                      商品税込計<Span fontSize="0.8rem">（税込）</Span>
                    </Typography>
                    <Typography
                      textAlign="right"
                      width="50%"
                      fontWeight={600}
                      fontSize="1.4rem"
                    >
                      ￥
                      {addThousandsSeparators(cartData.total_price_at_the_time)}
                    </Typography>
                  </FlexBox>

                  <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                    <Typography width="50%" fontWeight={600}>
                      送料
                    </Typography>
                    <Typography textAlign="right" width="50%" fontWeight={600}>
                      ￥{addThousandsSeparators(cartData.shipping_fee)}
                    </Typography>
                  </FlexBox>

                  <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                    <Typography width="50%" fontWeight={600}>
                      内消費税
                    </Typography>
                    <Typography textAlign="right" width="50%" fontWeight={600}>
                      ￥{addThousandsSeparators(cartData.total_tax_in_cart)}
                    </Typography>
                  </FlexBox>

                  <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                    <Typography width="50%" fontWeight={600}>
                      割引金額
                    </Typography>
                    <Typography textAlign="right" width="50%" fontWeight={600}>
                      {cartData.total_discount_in_cart === 0
                        ? "￥ 0"
                        : "-￥" +
                          addThousandsSeparators(
                            cartData.total_discount_in_cart
                          )}
                    </Typography>
                  </FlexBox>

                  <FlexBox alignItems="center" mb="10px" color="primary.main">
                    <Typography fontSize="1rem" width="50%" fontWeight={600}>
                      お支払い総計<Span fontSize="0.8rem">（税込）</Span>
                    </Typography>
                    <Typography
                      textAlign="right"
                      width="50%"
                      fontWeight={600}
                      fontSize="1.4rem"
                    >
                      ￥{addThousandsSeparators(cartData.result_price_in_cart)}
                    </Typography>
                  </FlexBox>
                </Box>
              </FlexBox>
            )}

            <Divider mb="1rem" bg="gray.500"></Divider>

            {/*Credit Card Select */}
            <FlexBox
              mb="1rem"
              flexDirection={{ _: "column", md: "row" }}
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                width={{ md: "20%" }}
                fontWeight={600}
                mb={{ _: "10px", md: "0" }}
              >
                お支払い方法
              </Box>
              <Box width={{ md: "80%" }}>
                {/**Check if has cards */}
                {currentUserCards && currentUserCards.length > 0 && (
                  <>
                    <Typography mb="10px" fontSize="1rem">
                      保存したクレジットカード
                    </Typography>
                    <Box mb="2rem">
                      {currentUserCards
                        .filter((a) => a.id === defaultCardID)
                        .map((item) => (
                          <TableRow my="1rem" padding="6px 18px" key={item.id}>
                            <FlexBox alignItems="center" m="6px">
                              <Card
                                width="42px"
                                height="28px"
                                mr="10px"
                                elevation={4}
                              >
                                <img
                                  width="100%"
                                  src={`${
                                    process.env.REACT_APP_MALL_IMAGE_ASSET_PATH
                                  }/assets/images/payment-methods/${item.brand.toLowerCase()}.svg`}
                                  alt={item.brand}
                                />
                              </Card>
                              <H5 className="pre" m="6px">
                                {item.name}
                              </H5>
                            </FlexBox>
                            <Typography className="pre" m="6px">
                              **** **** **** {item.last4}
                            </Typography>
                            <Typography className="pre" m="6px">
                              {item.exp_month}/{item.exp_year}
                            </Typography>
                          </TableRow>
                        ))}
                    </Box>

                    <Box mb="2rem">
                      <Divider
                        height="1px"
                        color="gray.500"
                        width="100%"
                        mx="auto"
                      />
                      <FlexBox justifyContent="center" mt="-10px">
                        <Span
                          fontSize="0.8rem"
                          color="text.muted"
                          bg="body.paper"
                          px="1rem"
                        >
                          または
                        </Span>
                      </FlexBox>
                    </Box>
                  </>
                )}

                <Box mb="1rem">
                  <Typography mb="10px" fontSize="1rem">
                    クレジットカード
                  </Typography>

                  <FlexBox maxWidth="360px" mb="2rem">
                    <Image
                      src={`${process.env.REACT_APP_MALL_IMAGE_ASSET_PATH}/assets/images/illustrator/card-list.png`}
                      width="100%"
                      alt="cards"
                    />
                  </FlexBox>
                  <PayjpCheckout {...payjpCheckoutProps} />

                  <CheckBox
                    name="save_card"
                    mt="1rem"
                    color="secondary"
                    label={
                      <Typography ml="2px" fontSize="0.8rem">
                        このカード情報を保存／更新
                      </Typography>
                    }
                    value="save_card"
                    checked={savedCard}
                    onChange={() => setSavedCard(!savedCard)}
                  />
                </Box>
              </Box>
            </FlexBox>

            <Divider bg="gray.500" mb="2rem"></Divider>

            {/*Button Control */}
            {isVerifyCartLoading && (
              <FlexBox
                justifyContent="center"
                flexDirection={{ _: "column-reverse", md: "row" }}
                maxWidth="480px"
                mx="auto"
              >
                <Box mb="10px" width="100%" mx="auto">
                  <Skeleton width="90%" height="50px" />
                </Box>
                <Box mb="10px" width="100%" mx="auto">
                  <Skeleton width="90%" height="50px" />
                </Box>
              </FlexBox>
            )}

            {!isVerifyCartLoading && (
              <>
                <FlexBox
                  justifyContent="center"
                  flexDirection={{ _: "column-reverse", md: "row" }}
                  maxWidth="480px"
                  mx="auto"
                >
                  <Button
                    width={{ _: "100%", md: "50%" }}
                    mx={{ _: "0", md: "1rem" }}
                    size="large"
                    color="gray"
                    variant="outlinedSecond"
                    borderRadius={5}
                    onClick={() => dispatch(push(ROUTES.PAYMENT_METHOD))}
                  >
                    <Span fontSize="1rem">戻 る</Span>
                  </Button>
                  <Button
                    width={{ _: "100%", md: "50%" }}
                    mx={{ _: "0", md: "1rem" }}
                    mb={{ _: "1rem", md: "0" }}
                    size="large"
                    color="primary"
                    variant="contained"
                    borderRadius={5}
                    type="submit"
                  >
                    <Span fontSize="1rem">ご注文を確定</Span>
                  </Button>
                </FlexBox>
                <Typography mt="1rem" textAlign="center" fontSize="0.8rem">
                  注文が完了すると抽選も完了します。
                  <br />
                  注文完了後の返品・キャンセルはできませんのでご注意ください。
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </form>
      {isPurchaseCartLoading && <LoadingBox />}
    </CartLayout>
  );
};

export default OrderConfirmationPage;
