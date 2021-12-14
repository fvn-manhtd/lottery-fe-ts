import {
  Box,
  Divider,
  Button,
  FlexBox,
  TextField,
  Typography,
  SelectBox,
  Image,
} from "components/atoms";
import { DashBoardLayout } from "components/templates";
import { useFormik } from "formik";
import React from "react";
import { yearListNextArr, monthListArr } from "utils";
import * as yup from "yup";
import valid from "card-validator";

const UserCardPage: React.FC = () => {
  const initialValues = {
    cartCustomerName: "",
    cartCustomerNumber: "",
    cartCustomerDate: "",
    cartCustomerCVC: "",
  };

  const formSchema = yup.object().shape({
    cartCustomerName: yup.string().required("カード名義を入力してください"),
    cartCustomerNumber: yup
      .string()
      .test(
        "test-number",
        "カード番号を入力してください",
        (value) => valid.number(value).isValid
      ),
    cartCustomerYear: yup.string().required("有効期限を入力してください"),
    cartCustomerMonth: yup.string().required("有効期限を入力してください"),
    cartCustomerCVC: yup
      .number()
      .typeError("セキュリティコードを入力してください")
      .required("セキュリティコードを入力してください")
      .min(0, "セキュリティコードを入力してください")
      .max(1000, "セキュリティコードを入力してください"),
  });

  const handleYearChange = (e) => {
    console.log(e);
  };
  const handleMonthChange = (e) => {
    console.log(e);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
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
            クレジットカードの追加
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
          <FlexBox maxWidth="420px">
            <Image
              src="/assets/images/illustrator/card-list.png"
              width="100%"
              alt="cards"
            />
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
              カード名義
            </Box>
            <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "60%" }}>
              <TextField
                name="cartCustomerName"
                fullwidth
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cartCustomerName || ""}
                errorText={touched.cartCustomerName && errors.cartCustomerName}
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
              カード番号
            </Box>
            <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "60%" }}>
              <TextField
                name="cartCustomerNumber"
                fullwidth
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cartCustomerNumber || ""}
                errorText={
                  touched.cartCustomerNumber && errors.cartCustomerNumber
                }
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
              有効期限
            </Box>
            <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "60%" }}>
              <FlexBox
                mb="1rem"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box width="20%">
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

                <Box width="25%">
                  <SelectBox
                    placeholder="選択"
                    defaultValue={yearListNextArr(10)[0]}
                    options={yearListNextArr(10)}
                    onChange={handleYearChange}
                  />
                </Box>
                <Box textAlign="center" width="8%">
                  年
                </Box>
              </FlexBox>
            </Box>
          </FlexBox>

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
              セキュリティコード
            </Box>
            <Box
              mb={{ _: "1rem", md: "0" }}
              width={{ _: "100%", md: "60%" }}
              maxWidth="120px"
            >
              <TextField
                name="cartCustomerCVC"
                fullwidth
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cartCustomerCVC || ""}
                errorText={touched.cartCustomerCVC && errors.cartCustomerCVC}
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
              クレジットカードの追加
            </Button>
          </FlexBox>
        </form>
      </Box>
    </DashBoardLayout>
  );
};

export default UserCardPage;
