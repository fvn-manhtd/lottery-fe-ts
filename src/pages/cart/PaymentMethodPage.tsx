import {
  Box,
  Button,
  Divider,
  FlexBox,
  Span,
  Image,
  RadioButton,
  Typography,
  TextField,
  Spinner,
  Small,
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Stepper } from "components/organisms";
import { phoneRegExp, stepperList, Route as ROUTES } from "utils";

import styled from "styled-components";
import { ModalComponent } from "components/molecules";
import { useFormik } from "formik";
import * as yup from "yup";
import { usePostalJp } from "use-postal-jp";
import { useEffect, useState } from "react";
import { currentUserActions, selectCurrentUser } from "redux/features";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { currentUserApi } from "api";
import { push } from "connected-react-router";

const ShippingButton = styled(Button)`
  max-width: 320px;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
`;

const formSchema = yup.object().shape({
  first_name: yup.string().nullable().required("姓を入力してください"),
  last_name: yup.string().nullable().required("名を入力してください"),
  first_name_kana: yup.string().nullable().required("セイを入力してください"),
  last_name_kana: yup.string().nullable().required("メイを入力してください"),
  post_code: yup.string().nullable().required("郵便番号を入力してください"),
  address: yup.string().nullable(),
  phone_number: yup
    .string()
    .nullable()
    .matches(phoneRegExp, "電話番号を入力してください")
    .min(8, "電話番号を入力してください")
    .max(12, "電話番号を入力してください")
    .required("郵便番号を入力してください"),
});

const PaymentMethodPage: React.FC = () => {
  const [yubinBango, setyubinBango] = useState("");
  const [spin, setSpin] = useState(false);

  const [address, loading, error] = usePostalJp(
    yubinBango,
    yubinBango.length >= 7
  );

  const [isOpenModal, setIsOpenModal] = useState(false);

  const currentUser = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();

  const initialValues = {
    first_name: currentUser ? currentUser.first_name : "",
    last_name: currentUser ? currentUser.last_name : "",
    first_name_kana: currentUser ? currentUser.first_name_kana : "",
    last_name_kana: currentUser ? currentUser.last_name_kana : "",
    post_code: currentUser ? currentUser.post_code : "",
    address: currentUser ? currentUser.address : "",
    prefecture: currentUser ? currentUser.prefecture : "",
    phone_number: currentUser ? currentUser.phone_number : "",
  };

  const handlePostCodeChange = (e) => {
    const { value } = e.target;
    setyubinBango(value);
    setFieldValue("post_code", value);
  };

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) setIsOpenModal(true);
  }, [currentUser]);

  const handleFormSubmit = async (values) => {
    let prefecture = address ? address.prefecture : currentUser.prefecture;
    const addressInfo = { ...values, prefecture };
    setSpin(true);
    setIsOpenModal(true);

    try {
      let userInfo = {
        ...addressInfo,
        email: currentUser.email,
        id: currentUser.id,
      };
      const { status, data } = await currentUserApi.address(addressInfo);
      if (status === 200 && data.status === "success") {
        setSpin(false);
        setIsOpenModal(false);
        dispatch(currentUserActions.setCurrentUser(userInfo));
      }
    } catch (error) {
      console.log(error);
      setSpin(false);
      setIsOpenModal(false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues,
    validationSchema: formSchema,
  });
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
            <Stepper stepperList={stepperList} selectedStep={2} />
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

          <FlexBox justifyContent="center" mb="1rem">
            <ModalComponent
              maxWidth="600px"
              minHeight="400px"
              onOpen={isOpenModal}
              hasCloseButton={false}
              shouldCloseOnOverlayClick={false}
              buttonElement={
                <ShippingButton
                  color="gray"
                  size="none"
                  variant="outlinedSecond"
                >
                  お届け先を編集する
                </ShippingButton>
              }
              content={
                <Box p="2rem" height="370px" overflow="auto">
                  <form onSubmit={handleSubmit}>
                    <Box mb="2rem">
                      <Typography as="h2" mb="1rem" fontWeight={700}>
                        お届け先
                      </Typography>
                      <Divider
                        height="1px"
                        my="2rem"
                        width="100%"
                        backgroundColor="gray.500"
                      ></Divider>
                      <FlexBox
                        alignItems="center"
                        flexDirection={{ _: "column", md: "row" }}
                        mb="1rem"
                      >
                        <Box
                          fontWeight={600}
                          mb={{ _: "1rem", md: "0" }}
                          width={{ _: "100%", md: "20%" }}
                        >
                          お名前
                        </Box>

                        <FlexBox
                          flexDirection={{ _: "column", md: "row" }}
                          mb={{ _: "1rem", md: "0" }}
                          width={{ _: "100%", md: "80%" }}
                        >
                          <FlexBox
                            mb={{ _: "1rem", md: "0" }}
                            width={{ _: "100%", md: "50%" }}
                            alignItems="center"
                          >
                            <Box width="30%" textAlign="center" px="1rem">
                              姓
                            </Box>
                            <Box width="70%">
                              <TextField
                                name="first_name"
                                type="text"
                                fullwidth
                                placeholder="姓を入力してください"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.first_name}
                                errorText={
                                  touched.first_name && errors.first_name
                                }
                              />
                            </Box>
                          </FlexBox>

                          <FlexBox
                            mb={{ _: "1rem", md: "0" }}
                            width={{ _: "100%", md: "50%" }}
                            alignItems="center"
                          >
                            <Box width="30%" textAlign="center" px="1rem">
                              名
                            </Box>
                            <Box width="70%">
                              <TextField
                                name="last_name"
                                type="text"
                                fullwidth
                                onBlur={handleBlur}
                                placeholder="名を入力してください"
                                onChange={handleChange}
                                value={values.last_name}
                                errorText={
                                  touched.last_name && errors.last_name
                                }
                              />
                            </Box>
                          </FlexBox>
                        </FlexBox>
                      </FlexBox>

                      <Divider
                        height="1px"
                        my="2rem"
                        width="100%"
                        backgroundColor="gray.500"
                      ></Divider>

                      <FlexBox
                        alignItems="center"
                        flexDirection={{ _: "column", md: "row" }}
                        mb="1rem"
                      >
                        <Box
                          fontWeight={600}
                          mb={{ _: "1rem", md: "0" }}
                          width={{ _: "100%", md: "20%" }}
                        >
                          フリガナ
                        </Box>

                        <FlexBox
                          flexDirection={{ _: "column", md: "row" }}
                          mb={{ _: "1rem", md: "0" }}
                          width={{ _: "100%", md: "80%" }}
                        >
                          <FlexBox
                            mb={{ _: "1rem", md: "0" }}
                            width={{ _: "100%", md: "50%" }}
                            alignItems="center"
                          >
                            <Box width="30%" textAlign="center" px="1rem">
                              セイ
                            </Box>
                            <Box width="70%">
                              <TextField
                                name="first_name_kana"
                                type="text"
                                placeholder="セイを入力してください"
                                fullwidth
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.first_name_kana}
                                errorText={
                                  touched.first_name_kana &&
                                  errors.first_name_kana
                                }
                              />
                            </Box>
                          </FlexBox>

                          <FlexBox
                            mb={{ _: "1rem", md: "0" }}
                            width={{ _: "100%", md: "50%" }}
                            alignItems="center"
                          >
                            <Box width="30%" textAlign="center" px="1rem">
                              メイ
                            </Box>
                            <Box width="70%">
                              <TextField
                                name="last_name_kana"
                                placeholder="メイを入力してください"
                                type="text"
                                fullwidth
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.last_name_kana}
                                errorText={
                                  touched.last_name_kana &&
                                  errors.last_name_kana
                                }
                              />
                            </Box>
                          </FlexBox>
                        </FlexBox>
                      </FlexBox>

                      <Divider
                        height="1px"
                        my="2rem"
                        width="100%"
                        backgroundColor="gray.500"
                      ></Divider>

                      <FlexBox
                        alignItems="flex-start"
                        flexDirection={{ _: "column", md: "row" }}
                        mb="1rem"
                      >
                        <Box
                          fontWeight={600}
                          mb={{ _: "1rem", md: "0" }}
                          width={{ _: "100%", md: "20%" }}
                        >
                          住所
                        </Box>
                        <Box
                          mb={{ _: "1rem", md: "0" }}
                          width={{ _: "100%", md: "60%" }}
                        >
                          <FlexBox
                            maxWidth="220px"
                            flexDirection="column"
                            mb="1rem"
                            alignItems="center"
                          >
                            <Box width="100%" mb="0.5rem">
                              郵便番号
                            </Box>
                            <Box width="100%">
                              <TextField
                                name="post_code"
                                placeholder="郵便番号"
                                fullwidth
                                type="text"
                                onBlur={handleBlur}
                                value={values.post_code}
                                onChange={handlePostCodeChange}
                                errorText={
                                  touched.post_code && errors.post_code
                                }
                              />
                              {!loading && error && (
                                <Typography mt="1rem" color="error.main">
                                  {error && error.message === "Bad request"
                                    ? "郵便番号が正しくありません"
                                    : ""}
                                </Typography>
                              )}
                            </Box>
                          </FlexBox>

                          <Box maxWidth="220px" mb="1rem">
                            <TextField
                              name="prefecture"
                              placeholder="都道府県"
                              fullwidth
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={
                                address ? address.prefecture : values.prefecture
                              }
                            />
                          </Box>

                          <TextField
                            name="address"
                            fullwidth
                            placeholder="市区郡町村・パート・マンション・部屋番号を入力してください"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address}
                          />
                          <Typography as="span" fontSize="10px">
                            市区群町村入力可能な文字数の上限を超える際は[番地]に続けて入力してください。
                          </Typography>
                        </Box>
                      </FlexBox>

                      <Divider
                        height="1px"
                        my="2rem"
                        width="100%"
                        backgroundColor="gray.500"
                      ></Divider>

                      <FlexBox
                        alignItems="center"
                        flexDirection={{ _: "column", md: "row" }}
                        mb="1rem"
                      >
                        <Box
                          fontWeight={600}
                          mb={{ _: "1rem", md: "0" }}
                          width={{ _: "100%", md: "20%" }}
                        >
                          電話番号
                        </Box>
                        <Box
                          mb={{ _: "1rem", md: "0" }}
                          width={{ _: "100%", md: "60%" }}
                        >
                          <TextField
                            name="phone_number"
                            fullwidth
                            placeholder="電話番号を入力してください。"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.phone_number}
                            errorText={
                              touched.phone_number && errors.phone_number
                            }
                          />
                          <Typography as="span" fontSize="10px">
                            ご注文内容や配送について、電話またはメールにてご連絡させていただく事があります
                          </Typography>
                        </Box>
                      </FlexBox>
                    </Box>

                    <Divider
                      height="1px"
                      mb="2rem"
                      width="100%"
                      backgroundColor="gray.500"
                    ></Divider>

                    <FlexBox
                      justifyContent="center"
                      flexDirection="column"
                      maxWidth="320px"
                      mx="auto"
                      alignItems="center"
                    >
                      <Button
                        mb="1rem"
                        variant="containedSecond"
                        size="large"
                        color="secondary"
                        type="submit"
                        fullwidth
                        borderRadius={5}
                      >
                        {spin ? (
                          <>
                            <Spinner
                              size={16}
                              border="2px solid"
                              borderColor="secondary.900"
                              borderTop="2px solid white"
                            ></Spinner>
                          </>
                        ) : (
                          <Small color="white" fontWeight="600">
                            情報を変更
                          </Small>
                        )}
                      </Button>
                    </FlexBox>
                  </form>
                </Box>
              }
            ></ModalComponent>
          </FlexBox>

          <Divider mb="1rem" bg="gray.500"></Divider>

          {/*Payment Method */}
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
              お支払い方法
            </Box>
            <Box width={{ md: "80%" }}>
              <RadioButton
                name="credit-card"
                mb="1rem"
                color="secondary"
                label={
                  <Typography ml="6px" fontWeight="600" fontSize="1rem">
                    クレジットカード
                  </Typography>
                }
                checked
                onChange={(e) => console.log(e)}
              />

              <FlexBox maxWidth="360px">
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
              onClick={() => dispatch(push(ROUTES.SHOPPING_CART))}
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
              onClick={() => dispatch(push(ROUTES.ORDER_CONFIRMATION))}
            >
              <Span fontSize="1rem">確認画面へ</Span>
            </Button>
          </FlexBox>
        </Box>
      </Box>
    </CartLayout>
  );
};

export default PaymentMethodPage;
