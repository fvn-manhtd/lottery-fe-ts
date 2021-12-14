import {
  Box,
  Button,
  Divider,
  FlexBox,
  Span,
  Image,
  Typography,
  TextField,
  SelectBox,
  CheckBox,
  SemiSpan,
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Stepper } from "components/organisms";
import { monthListArr, stepperList, yearListNextArr } from "utils";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import valid from "card-validator";

const OrderConfirmationPage: React.FC = () => {
  const history = useHistory();

  const [cartCustomerMonth, setCartCustomerMonth] = useState("1");
  const [cartCustomerYear, setCartCustomerYear] = useState("2021");

  const initialValues = {
    cartCustomerName: "",
    cartCustomerNumber: "",
    cartCustomerYear: cartCustomerYear,
    cartCustomerMonth: cartCustomerMonth,
    cartCustomerCVC: "",
    saveCardCheck: true,
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
    setCartCustomerYear(e.value);
  };
  const handleMonthChange = (e) => {
    setCartCustomerMonth(e.value);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    history.push("/cart/order-complete");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
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
              <Box width={{ md: "80%" }}>名前　名前 様</Box>
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
                〒661-0953　兵庫県尼崎市東園田町0-0-00 <br />
                TEL　070-0000-0000
              </Box>
            </FlexBox>

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

                <FlexBox
                  alignItems="center"
                  flexDirection={{ _: "column", md: "row" }}
                  mb="1rem"
                >
                  <Box width={{ _: "100%", md: "20%" }}>カード名義</Box>
                  <Box width={{ _: "100%", md: "60%" }}>
                    <TextField
                      name="cartCustomerName"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.cartCustomerName || ""}
                      errorText={
                        touched.cartCustomerName && errors.cartCustomerName
                      }
                    />
                  </Box>
                </FlexBox>

                <FlexBox
                  alignItems="center"
                  flexDirection={{ _: "column", md: "row" }}
                  mb="1rem"
                >
                  <Box width={{ _: "100%", md: "20%" }}>カード番号</Box>
                  <Box width={{ _: "100%", md: "60%" }}>
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

                <FlexBox
                  alignItems="center"
                  flexDirection={{ _: "column", md: "row" }}
                  mb="1rem"
                >
                  <Box width={{ _: "100%", md: "20%" }}>有効期限</Box>
                  <Box width={{ _: "100%", md: "60%" }}>
                    <FlexBox justifyContent="flex-start" alignItems="center">
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
                  <Box width={{ _: "100%", md: "20%" }}>セキュリティコード</Box>
                  <Box width={{ _: "100%", md: "60%" }}>
                    <TextField
                      name="cartCustomerCVC"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.cartCustomerCVC || ""}
                      errorText={
                        touched.cartCustomerCVC && errors.cartCustomerCVC
                      }
                    />
                  </Box>
                </FlexBox>

                <FlexBox
                  alignItems="center"
                  flexDirection={{ _: "column", md: "row" }}
                  mb="1rem"
                >
                  <Box width={{ _: "100%", md: "20%" }}></Box>
                  <Box width={{ _: "100%", md: "60%" }}>
                    <CheckBox
                      mb="1rem"
                      name="saveCardCheck"
                      color="secondary"
                      checked={values.saveCardCheck}
                      onChange={handleChange}
                      label={
                        <FlexBox>
                          <SemiSpan>今後もこのカードを使う</SemiSpan>
                        </FlexBox>
                      }
                    />
                  </Box>
                </FlexBox>
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
                onClick={() => history.push("/cart/payment-method")}
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
