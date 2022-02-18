import {
  Box,
  Button,
  Divider,
  FlexBox,
  Span,
  Image,
  Typography,
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Stepper } from "components/organisms";
import { stepperList, Route as ROUTES, addThousandsSeparators } from "utils";

import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { selectCurrentUser } from "redux/features";
import { push } from "connected-react-router";
import { useFormik } from "formik";
import { useListCartQuery } from "api";
import Skeleton from "react-loading-skeleton";

const OrderConfirmationPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectCurrentUser);

  //Get Cart
  const { data: cartData, isLoading } = useListCartQuery({
    refetchOnMountOrArgChange: false,
    refetchOnFocus: false,
  });

  const handleFormSubmit = () => {
    console.log("aaa");
  };

  const initialValues = null;

  const { handleSubmit } = useFormik({
    onSubmit: handleFormSubmit,
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

            {/*Cart Item Info */}
            {isLoading && cartData === undefined && (
              <FlexBox mb="1rem" alignItems={{ _: "flex-start", md: "center" }}>
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
                <Box width="10%" display={{ _: "none", md: "block" }} mx="auto">
                  <Skeleton height="30px" width="90%" />
                </Box>
                <Box width="15%" display={{ _: "none", md: "block" }} mx="auto">
                  <Skeleton height="30px" width="90%" />
                </Box>
                <Box mx="auto" width="5%" display={{ _: "none", md: "block" }}>
                  <Skeleton height="30px" width="90%" />
                </Box>
              </FlexBox>
            )}

            {cartData &&
              cartData.carts?.map((cartItem) => {
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
                      <Typography mb="5px">10回くじ</Typography>
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
                    ￥12,000
                  </Typography>
                </FlexBox>

                <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                  <Typography width="50%" fontWeight={600}>
                    送料
                  </Typography>
                  <Typography textAlign="right" width="50%" fontWeight={600}>
                    ￥700
                  </Typography>
                </FlexBox>

                <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                  <Typography width="50%" fontWeight={600}>
                    手数料
                  </Typography>
                  <Typography textAlign="right" width="50%" fontWeight={600}>
                    ￥700
                  </Typography>
                </FlexBox>

                <FlexBox fontSize="0.9rem" alignItems="center" mb="10px">
                  <Typography width="50%" fontWeight={600}>
                    クーポン
                  </Typography>
                  <Typography textAlign="right" width="50%" fontWeight={600}>
                    -￥700
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
                    ￥12,700
                  </Typography>
                </FlexBox>
              </Box>
            </FlexBox>

            <Divider mb="1rem" bg="gray.500"></Divider>

            {/*Payment Select */}
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
                <Typography mb="10px" fontSize="1rem">
                  クレジットカード
                </Typography>

                <FlexBox maxWidth="360px" mb="2rem">
                  <Image
                    src="/assets/images/illustrator/card-list.png"
                    width="100%"
                    alt="cards"
                  />
                </FlexBox>
              </Box>
            </FlexBox>

            <Divider bg="gray.500" mb="2rem"></Divider>

            {/*Button Control */}
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
          </Box>
        </Box>
      </form>
    </CartLayout>
  );
};

export default OrderConfirmationPage;
