import {
  Box,
  Divider,
  Button,
  FlexBox,
  TextField,
  Typography,
  Spinner,
  Small,
} from "components/atoms";
import { DashBoardLayout } from "components/templates";
import { useFormik } from "formik";
import React, { useState } from "react";
import { usePostalJp } from "use-postal-jp";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { currentUserActions, selectCurrentUser } from "redux/features";
import * as yup from "yup";
import { phoneRegExp } from "utils";
import { currentUserApi } from "api";
import { toast } from "react-toastify";

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

const UserShippingAddressPage: React.FC = () => {
  const [yubinBango, setyubinBango] = useState("");
  const [spin, setSpin] = useState(false);

  const [address, loading, error] = usePostalJp(
    yubinBango,
    yubinBango.length >= 7
  );

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

  const handleFormSubmit = async (values) => {
    let prefecture = address ? address.prefecture : currentUser.prefecture;
    const addressInfo = { ...values, prefecture };
    setSpin(true);

    try {
      let userInfo = {
        ...addressInfo,
        email: currentUser.email,
        id: currentUser.id,
      };
      const { status, data } = await currentUserApi.address(addressInfo);
      if (status === 200 && data.status === "success") {
        setSpin(false);
        dispatch(currentUserActions.setCurrentUser(userInfo));
        toast.success("情報を変更しました。", {
          autoClose: 7000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("権限がありませんログインしてからお試しください。", {
        autoClose: 7000,
      });
      setSpin(false);
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
    <DashBoardLayout>
      <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
        アカウント設定
      </Typography>
      <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <Typography fontWeight={600} fontSize="1.2rem">
            アカウント設定 / お届け先
          </Typography>
          <Box></Box>
        </FlexBox>
        <Divider
          height="2px"
          mb="2rem"
          width="100%"
          backgroundColor="gray.500"
        ></Divider>
        <form onSubmit={handleSubmit}>
          <Box mb="2rem">
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
                width={{ _: "100%", md: "60%" }}
              >
                <FlexBox
                  mb={{ _: "1rem", md: "0" }}
                  width={{ _: "100%", md: "50%" }}
                  alignItems="center"
                >
                  <Box width="20%" textAlign="center" px="1rem">
                    姓
                  </Box>
                  <Box width="80%">
                    <TextField
                      name="first_name"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.first_name}
                      errorText={touched.first_name && errors.first_name}
                    />
                  </Box>
                </FlexBox>

                <FlexBox
                  mb={{ _: "1rem", md: "0" }}
                  width={{ _: "100%", md: "50%" }}
                  alignItems="center"
                >
                  <Box width="20%" textAlign="center" px="1rem">
                    名
                  </Box>
                  <Box width="80%">
                    <TextField
                      name="last_name"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.last_name}
                      errorText={touched.last_name && errors.last_name}
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
                width={{ _: "100%", md: "60%" }}
              >
                <FlexBox
                  mb={{ _: "1rem", md: "0" }}
                  width={{ _: "100%", md: "50%" }}
                  alignItems="center"
                >
                  <Box width="20%" textAlign="center" px="1rem">
                    セイ
                  </Box>
                  <Box width="80%">
                    <TextField
                      name="first_name_kana"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.first_name_kana}
                      errorText={
                        touched.first_name_kana && errors.first_name_kana
                      }
                    />
                  </Box>
                </FlexBox>

                <FlexBox
                  mb={{ _: "1rem", md: "0" }}
                  width={{ _: "100%", md: "50%" }}
                  alignItems="center"
                >
                  <Box width="20%" textAlign="center" px="1rem">
                    メイ
                  </Box>
                  <Box width="80%">
                    <TextField
                      name="last_name_kana"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.last_name_kana}
                      errorText={
                        touched.last_name_kana && errors.last_name_kana
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
              <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "60%" }}>
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
                      placeholder=""
                      fullwidth
                      type="text"
                      onBlur={handleBlur}
                      value={values.post_code}
                      onChange={handlePostCodeChange}
                      errorText={touched.post_code && errors.post_code}
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
                    placeholder=""
                    fullwidth
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={address ? address.prefecture : values.prefecture}
                  />
                </Box>

                <TextField
                  name="address"
                  fullwidth
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                />
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
              <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "60%" }}>
                <TextField
                  name="phone_number"
                  fullwidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone_number}
                  errorText={touched.phone_number && errors.phone_number}
                />
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
                  <Small ml="0.5rem" color="white" fontWeight="600">
                    情報を変更中です
                  </Small>
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
    </DashBoardLayout>
  );
};

export default UserShippingAddressPage;
