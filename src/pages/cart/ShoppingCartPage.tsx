import {
  Box,
  Button,
  Divider,
  FlexBox,
  Typography,
  Icon,
  Image,
  Span,
  TextField,
  NavLink,
  Spinner,
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Head, Stepper } from "components/organisms";
import { useFormik } from "formik";
import styled from "styled-components";
import { addThousandsSeparators, stepperList } from "utils";
import { useState, useEffect } from "react";
import { StyledModal } from "components/molecules";
import Modal from "react-modal";
import { Route as ROUTES } from "utils";
import { useDeleteCartMutation, useListCartQuery } from "api";
import ShoppingCartSkeletonPage from "./ShoppingCartSkeletonPage";
import { toast } from "react-toastify";
import { useAppDispatch } from "redux/app/hooks";
import { push } from "connected-react-router";

const StyledButton = styled(Button)`
  background-color: #000;
  height: 50px;
  width: 100%;
`;

const LoginButton = styled(Button)``;

const ShoppingCartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  //Get Cart
  const {
    data: cartData,
    isLoading,
    isFetching,
  } = useListCartQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });
  //Delete Cart
  const [deleteCart, { isLoading: isCartDeleteLoading }] =
    useDeleteCartMutation();

  const handleDeleteCart = async () => {
    try {
      await deleteCart({}).unwrap();
    } catch (error) {
      console.log("Error delete cart", error);
      toast.error("カートを削除できませんでした", {
        autoClose: 7000,
      });
    }
  };

  //Submit form protion code
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    promotionCode: "",
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
  });

  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
  }, []);

  //Check get list cart
  if (isLoading || isFetching || cartData == undefined) {
    return <ShoppingCartSkeletonPage />;
  }

  return (
    <>
      <Head title="カート" />
      <CartLayout pageTitle="カート">
        <main>
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
              {cartData.total_amount_in_cart == 0 && (
                <FlexBox
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  py="1rem"
                >
                  <Box maxWidth="400px">
                    <Typography mb="10px" fontSize="1.4rem">
                      カート内に商品がありません
                    </Typography>
                    <NavLink href={ROUTES.HOME} variant="register_button">
                      お買い物を続ける
                    </NavLink>
                  </Box>
                </FlexBox>
              )}

              {cartData.total_amount_in_cart !== 0 && (
                <>
                  <Box mb="3rem">
                    <Stepper stepperList={stepperList} selectedStep={1} />
                  </Box>
                  <Divider mb="1rem" bg="gray.500"></Divider>

                  {cartData.carts?.map((cartItem) => {
                    return (
                      <FlexBox
                        key={cartItem.lottery_ticket_catalog_id}
                        mb="1rem"
                        alignItems={{ _: "flex-start", md: "center" }}
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
                          <Button
                            color="gray"
                            size="none"
                            variant="outlinedSecond"
                            display={{ md: "none" }}
                            onClick={handleDeleteCart}
                          >
                            カートから削除
                          </Button>
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
                              ¥ {cartItem.price_at_the_time}
                            </Box>
                          </FlexBox>
                        </Box>
                        <Box width="10%" display={{ _: "none", md: "block" }}>
                          {cartItem.amount}
                        </Box>
                        <Box width="15%" display={{ _: "none", md: "block" }}>
                          ¥ {addThousandsSeparators(cartItem.price_at_the_time)}
                        </Box>
                        <Box
                          mx="auto"
                          width="5%"
                          display={{ _: "none", md: "block" }}
                          cursor="pointer"
                          onClick={handleDeleteCart}
                        >
                          <Icon>delete</Icon>
                        </Box>
                      </FlexBox>
                    );
                  })}

                  <Divider mb="1rem" bg="gray.500"></Divider>

                  <FlexBox justifyContent="flex-end" mb="1rem">
                    <Box width="100%" maxWidth="380px">
                      <FlexBox alignItems="center" mb="10px">
                        <Typography
                          fontSize="0.8rem"
                          width="50%"
                          fontWeight={600}
                        >
                          商品税込計（税込）
                        </Typography>
                        <Typography
                          textAlign="right"
                          width="50%"
                          fontWeight={600}
                          fontSize="1.4rem"
                        >
                          ￥
                          {addThousandsSeparators(
                            String(cartData.total_price_in_cart)
                          )}
                        </Typography>
                      </FlexBox>
                      <Typography mb="10px">
                        プロモーションコードをお持ちの方
                      </Typography>
                      <form onSubmit={handleSubmit}>
                        <FlexBox fontSize="0.8rem">
                          <Box width="70%">
                            <TextField
                              name="promotionCode"
                              borderRadius="0"
                              type="text"
                              fullwidth
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.promotionCode || ""}
                            />
                          </Box>
                          <Box width="30%">
                            <StyledButton
                              width="100%"
                              type="submit"
                              size="small"
                              variant="containedSecond"
                              color="secondary"
                            >
                              適用
                            </StyledButton>
                          </Box>
                        </FlexBox>
                      </form>
                    </Box>
                  </FlexBox>

                  <Divider bg="gray.500" mb="2rem"></Divider>
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
                      onClick={() => dispatch(push(ROUTES.HOME))}
                    >
                      <Span fontSize="1rem">購入手続きへ進む</Span>
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
                      onClick={() => dispatch(push(ROUTES.PAYMENT_METHOD))}
                    >
                      <Span fontSize="1rem">他の商品を探す</Span>
                    </Button>
                  </FlexBox>
                </>
              )}
            </Box>
          </Box>
          {!isLoggedIn && (
            <>
              <Modal
                isOpen={isModalOpen}
                style={StyledModal("320px", "600px")}
                ariaHideApp={false}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => {
                  setIsModalOpen(false);
                }}
              >
                <Box
                  textAlign="center"
                  p="2rem"
                  justifyContent="center"
                  minWidth={180}
                >
                  <Typography as="h2" mb="2rem">
                    くじを購入します
                  </Typography>
                  <FlexBox flexDirection="column" maxWidth="400px" mx="auto">
                    <LoginButton
                      mb="1rem"
                      variant="contained"
                      size="large"
                      color="primary"
                      type="submit"
                      py="1.4rem"
                      fullwidth
                      borderRadius={5}
                      onClick={() => dispatch(push(ROUTES.USER_LOGIN))}
                    >
                      ログインして購入する
                    </LoginButton>

                    <NavLink color="primary.blue" href={ROUTES.USER_REGISTER}>
                      新規登録はこちら
                    </NavLink>
                  </FlexBox>
                </Box>
              </Modal>
            </>
          )}
          {/* Check cart popup */}
          {isCartDeleteLoading && (
            <FlexBox
              position="fixed"
              top="0"
              left="0"
              width="100%"
              alignItems="center"
              justifyContent="center"
              height="100vh"
              backgroundColor="rgba(255,255,255,.8)"
            >
              <Spinner
                size={60}
                border="5px solid"
                borderColor="primary.main"
                borderTop="5px solid white"
              ></Spinner>
            </FlexBox>
          )}
        </main>
      </CartLayout>
    </>
  );
};

export default ShoppingCartPage;
