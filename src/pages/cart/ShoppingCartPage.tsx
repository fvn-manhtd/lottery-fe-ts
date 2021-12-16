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
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Stepper } from "components/organisms";
import { useFormik } from "formik";
import styled from "styled-components";
import { stepperList } from "utils";
import { useHistory } from "react-router-dom";

import { useAppSelector } from "redux/app/hooks";
import { selectIsLoggedIn } from "redux/features";
import { useState, useEffect } from "react";
import { StyledModal } from "components/molecules";
import Modal from "react-modal";
import { Route as ROUTES } from "utils";

const StyledButton = styled(Button)`
  background-color: #000;
  height: 50px;
  width: 100%;
`;

const LoginButton = styled(Button)``;
const GuestButton = styled(Button)`
  background-color: #e5e5e5;
  border: none;
  color: #222222;
`;

const ShoppingCartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const history = useHistory();

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

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
  }, []);

  return (
    <CartLayout>
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
            <Stepper stepperList={stepperList} selectedStep={1} />
          </Box>
          <Divider mb="1rem" bg="gray.500"></Divider>

          <FlexBox mb="1rem" alignItems={{ _: "flex-start", md: "center" }}>
            <Box width={{ _: "50%", md: "20%" }} px="1rem">
              <Image
                mb="1rem"
                width="100%"
                src="https://www.bs11.jp/anime/img/selection_project_main.jpg"
                alt="商品"
                objectFit="cover"
              />
              <Button
                color="gray"
                size="none"
                variant="outlinedSecond"
                display={{ md: "none" }}
              >
                カートから削除
              </Button>
            </Box>
            <Box
              width={{ _: "50%", md: "50%" }}
              fontSize={{ _: "0.8rem", md: "1rem" }}
            >
              <Typography mb="5px" fontWeight={600}>
                商品名が入ります商品名が入ります商品名が入ります
              </Typography>
              <Typography mb="5px">10回くじ</Typography>
              <Typography mb="5px" color="gray.500">
                商品番号：LS010217
              </Typography>

              <FlexBox fontSize="0.8rem" display={{ md: "none" }}>
                <Box width="50%">数量：1</Box>
                <Box width="50%">¥ 12,000</Box>
              </FlexBox>
            </Box>
            <Box width="10%" display={{ _: "none", md: "block" }}>
              1
            </Box>
            <Box width="15%" display={{ _: "none", md: "block" }}>
              ¥ 12,000
            </Box>
            <Box mx="auto" width="5%" display={{ _: "none", md: "block" }}>
              <Icon>delete</Icon>
            </Box>
          </FlexBox>

          <Divider mb="1rem" bg="gray.500"></Divider>

          <FlexBox justifyContent="flex-end" mb="1rem">
            <Box width="100%" maxWidth="380px">
              <FlexBox alignItems="center" mb="10px">
                <Typography fontSize="0.8rem" width="50%" fontWeight={600}>
                  商品税込計（税込）
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
              onClick={() => history.push("/")}
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
              onClick={() => history.push("/cart/payment-method")}
            >
              <Span fontSize="1rem">他の商品を探す</Span>
            </Button>
          </FlexBox>
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
                  onClick={() => history.push(ROUTES.USER_LOGIN)}
                >
                  ログインして購入する
                </LoginButton>

                <GuestButton
                  mb="1rem"
                  variant="danger"
                  size="large"
                  color="secondary"
                  type="button"
                  fullwidth
                  borderRadius={5}
                  onClick={() => history.push(ROUTES.USER_REGISTER)}
                >
                  ゲスト購入する
                </GuestButton>

                <NavLink color="primary.blue" href={ROUTES.USER_REGISTER}>
                  新規登録はこちら
                </NavLink>
              </FlexBox>
            </Box>
          </Modal>
        </>
      )}
    </CartLayout>
  );
};

export default ShoppingCartPage;
