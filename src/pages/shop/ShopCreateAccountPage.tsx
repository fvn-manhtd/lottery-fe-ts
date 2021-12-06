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
  SelectBox,
} from "components/atoms";
import { Card1, Logo } from "components/organisms";
import * as yup from "yup";
import { dayListArr, monthListArr, phoneRegExp, yearListArr } from "utils";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  firstNameKana: "",
  lastNameKana: "",
  phone: "",
  note: "",
};

const formSchema = yup.object().shape({
  firstName: yup.string().required("姓を入力してください"),
  lastName: yup.string().required("名を入力してください"),
  firstNameKana: yup.string().required("姓（カナ）を入力してください"),
  lastNameKana: yup.string().required("名（カナ）を入力してください"),
  phone: yup.string().matches(phoneRegExp, "電話番号を入力してください"),
});

const ShopCreateAccountPage: React.FC = () => {
  const [year, setYear] = useState(1989);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const history = useHistory();

  const handleFormSubmit = (values) => {
    const birthday = `${year}/${month}/${day}`;
    const obj = { ...values, birthday };
    console.log("Values: ", obj);
    history.push("/shop/register/operation-setting");
  };

  const handleYearChange = (e) => {
    setYear(e.value);
  };
  const handleMonthChange = (e) => {
    setMonth(e.value);
  };
  const handleDayChange = (e) => {
    setDay(e.value);
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
                  アカウント設定
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

                <FlexBox
                  mb="1rem"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Box width="30%">
                    <SelectBox
                      placeholder="選択"
                      defaultValue={yearListArr(80)[32]}
                      options={yearListArr(80)}
                      onChange={handleYearChange}
                    />
                  </Box>
                  <Box textAlign="center" width="8%">
                    年
                  </Box>
                  <Box width="23%">
                    <SelectBox
                      placeholder="選択"
                      defaultValue={monthListArr().reverse()[0]}
                      options={monthListArr().reverse()}
                      onChange={handleMonthChange}
                    />
                  </Box>
                  <Box textAlign="center" width="8%">
                    月
                  </Box>
                  <Box width="23%">
                    <SelectBox
                      placeholder="選択"
                      defaultValue={dayListArr().reverse()[0]}
                      options={dayListArr().reverse()}
                      onChange={handleDayChange}
                    />
                  </Box>
                  <Box textAlign="center" width="8%">
                    日
                  </Box>
                </FlexBox>

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

export default ShopCreateAccountPage;
