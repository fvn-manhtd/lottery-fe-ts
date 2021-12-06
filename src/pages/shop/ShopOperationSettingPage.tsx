import { OneColumnLayout } from "components/templates";
import { useFormik } from "formik";
import {
  Button,
  H3,
  Box,
  FlexBox,
  Paragraph,
  TextField,
  TextArea,
  Typography,
} from "components/atoms";
import { Card1, Logo } from "components/organisms";
import * as yup from "yup";
import React from "react";
import { useHistory } from "react-router-dom";

const initialValues = {
  bussinessType: "",
  companyName: "",
  userName: "",
  phone: "",
  note: "",
  postcode: "",
  address: "",
};

const formSchema = yup.object().shape({
  bussinessType: yup.string().required("姓を入力してください"),
});

const ShopOperationSettingPage: React.FC = () => {
  const history = useHistory();

  const handleFormSubmit = (values) => {
    history.push("/shop/register/operation-setting");
    console.log(values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    });

  return (
    <>
      <OneColumnLayout>
        <main>
          <Box bg="body.paper" mt="3rem" maxWidth="480px" mx="auto">
            <form onSubmit={handleSubmit}>
              <Card1 mb="2rem" borderRadius={5} shadow={6}>
                <Box mx="auto" mt="1rem" mb="2rem" maxWidth="200px">
                  <Logo />
                </Box>

                <H3 textAlign="center" mb="2rem">
                  運営に関する設定
                </H3>

                <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                  お名前
                </Typography>
                <FlexBox
                  mb="1rem"
                  flexWrap="wrap"
                  justifyContent="space-between"
                >
                  <Box mb="1rem" width="48%">
                    <TextField
                      name="firstName"
                      placeholder="姓"
                      fullwidth
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName || ""}
                      errorText={touched.firstName && errors.firstName}
                    />
                  </Box>

                  <Box mb="1rem" width="48%">
                    <TextField
                      name="lastName"
                      placeholder="名"
                      fullwidth
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName || ""}
                      errorText={touched.lastName && errors.lastName}
                    />
                  </Box>
                  <Box width="48%">
                    <TextField
                      name="firstNameKana"
                      placeholder="姓 (カナ）"
                      fullwidth
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstNameKana || ""}
                      errorText={touched.firstNameKana && errors.firstNameKana}
                    />
                  </Box>

                  <Box width="48%">
                    <TextField
                      name="lastNameKana"
                      placeholder="名 (カナ）"
                      fullwidth
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastNameKana || ""}
                      errorText={touched.lastNameKana && errors.lastNameKana}
                    />
                  </Box>
                </FlexBox>

                <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                  生年月日
                </Typography>

                <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                  電話番号
                </Typography>
                <TextField
                  name="phone"
                  placeholder="電話番号"
                  fullwidth
                  type="text"
                  mb="1rem"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone || ""}
                  errorText={touched.phone && errors.phone}
                />

                <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                  その他
                </Typography>
                <TextArea
                  name="note"
                  placeholder="その他"
                  fullwidth
                  rows={8}
                  mb={10}
                  border="gray.500"
                  borderRadius="5px"
                />

                <Button
                  mt="1.65rem"
                  mb="1.65rem"
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullwidth
                  borderRadius={5}
                >
                  次
                </Button>
              </Card1>
            </form>
          </Box>
          <Paragraph mb="1rem" textAlign="center" fontSize="0.8rem">
            &copy;Online Gacha
          </Paragraph>
        </main>
      </OneColumnLayout>
    </>
  );
};

export default ShopOperationSettingPage;
