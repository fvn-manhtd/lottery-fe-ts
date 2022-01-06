import {
  Box,
  Divider,
  Button,
  FlexBox,
  TextField,
  Typography,
} from "components/atoms";
import { DashBoardLayout } from "components/templates";
import { useFormik } from "formik";
import React, { useState } from "react";
import { usePostalJp } from "use-postal-jp";
import { useAppSelector } from "redux/app/hooks";
import { selectCurrentUser } from "redux/features";
import * as yup from "yup";
import { phoneRegExp } from "utils";

const formSchema = yup.object().shape({
  firstName: yup.string().nullable().required("姓を入力してください"),
  lastName: yup.string().nullable().required("名を入力してください"),
  firstNameKana: yup.string().nullable().required("セイを入力してください"),
  lastNameKana: yup.string().nullable().required("メイを入力してください"),
  postCode: yup.string().nullable().required("郵便番号を入力してください"),
  formAddress: yup.string().nullable().required("住所を入力してください"),
  phone: yup
    .string()
    .matches(phoneRegExp, "電話番号を入力してください")
    .min(8, "電話番号を入力してください")
    .max(12, "電話番号を入力してください"),
});

const UserShippingAddressPage: React.FC = () => {
  const [yubinBango, setyubinBango] = useState("");

  const [address, loading, error] = usePostalJp(
    yubinBango,
    yubinBango.length >= 7
  );

  const currentUser = useAppSelector(selectCurrentUser);

  const initialValues = {
    firstName: currentUser ? currentUser.first_name : "",
    lastName: currentUser ? currentUser.last_name : "",
    firstNameKana: currentUser ? currentUser.first_name_kana : "",
    lastNameKana: currentUser ? currentUser.last_name_kana : "",
    postCode: currentUser ? currentUser.post_code : "",
    formAddress: currentUser ? currentUser.address : "",
    formPrefecture: currentUser ? currentUser.prefecture : "",
    phone: currentUser ? currentUser.phone_number : "",
  };

  const handlePostCodeChange = (e) => {
    const { value } = e.target;
    setyubinBango(value);
    setFieldValue("postCode", value);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
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
                      name="firstName"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName || ""}
                      errorText={touched.firstName && errors.firstName}
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
                      name="lastName"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName || ""}
                      errorText={touched.lastName && errors.lastName}
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
                      name="firstNameKana"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstNameKana || ""}
                      errorText={touched.firstNameKana && errors.firstNameKana}
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
                      name="lastNameKana"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastNameKana || ""}
                      errorText={touched.lastNameKana && errors.lastNameKana}
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
                  <Box width="100%" mb="1rem">
                    郵便番号
                  </Box>
                  <Box width="100%">
                    <TextField
                      name="postCode"
                      placeholder=""
                      fullwidth
                      type="text"
                      onBlur={handleBlur}
                      value={values.postCode || ""}
                      onChange={handlePostCodeChange}
                      errorText={touched.postCode && errors.postCode}
                    />
                  </Box>
                </FlexBox>

                <Box maxWidth="220px" mb="1rem">
                  <TextField
                    name="formPrefecture"
                    placeholder=""
                    fullwidth
                    type="text"
                    value={values.formPrefecture || ""}
                    onChange={handleChange}
                  />
                </Box>

                <TextField
                  name="formAddress"
                  fullwidth
                  mb="1rem"
                  onBlur={handleBlur}
                  value={values.formAddress || ""}
                  onChange={handleChange}
                  errorText={touched.formAddress && errors.formAddress}
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
                  name="phone"
                  fullwidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone || ""}
                  errorText={touched.phone && errors.phone}
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
              情報を変更
            </Button>
          </FlexBox>
        </form>
      </Box>
    </DashBoardLayout>
  );
};

export default UserShippingAddressPage;
