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
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Stepper } from "components/organisms";
import { phoneRegExp, stepperList } from "utils";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ModalComponent } from "components/molecules";
import { useFormik } from "formik";
import * as yup from "yup";
import { usePostalJp } from "use-postal-jp";
import { useState } from "react";

const ShippingButton = styled(Button)`
  max-width: 320px;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
`;

const initialValues = {
  name: "",
  phone: "",
  province: "",
  building: "",
};

const formSchema = yup.object().shape({
  name: yup.string().required("お名前を入力してください"),
  phone: yup.string().matches(phoneRegExp, "電話番号を入力してください"),
  province: yup.string().required("町村字番地を入力してください"),
});

const PaymentMethodPage: React.FC = () => {
  const history = useHistory();

  const [value, setValue] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, loading, error] = usePostalJp(value, value.length >= 7);

  const handleYubinbangoChange = (e) => {
    setValue(e.target.value);
    setPostcode(e.target.value);
  };

  const handleFormSubmit = (e) => {
    const obj = { ...e, postcode, address };
    console.log("Values: ", obj);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
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

          <FlexBox justifyContent="center" mb="1rem">
            <ModalComponent
              maxWidth="600px"
              minHeight="400px"
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
                    <Typography
                      fontWeight={600}
                      mb="0.5rem"
                      fontSize="0.875rem"
                    >
                      お名前
                    </Typography>

                    <TextField
                      name="name"
                      placeholder=""
                      fullwidth
                      type="text"
                      mb="1rem"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name || ""}
                      errorText={touched.name && errors.name}
                    />

                    <Typography
                      fontWeight={600}
                      mb="0.5rem"
                      fontSize="0.875rem"
                    >
                      電話番号
                    </Typography>
                    <TextField
                      name="phone"
                      placeholder=""
                      fullwidth
                      type="text"
                      mb="1rem"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone || ""}
                      errorText={touched.phone && errors.phone}
                    />

                    <Typography
                      fontWeight={600}
                      mb="0.5rem"
                      fontSize="0.875rem"
                    >
                      所在
                    </Typography>
                    <FlexBox mb="1rem" alignItems="center">
                      <Box width={{ _: "30%", md: "15%" }} fontSize="0.875rem">
                        郵便番号
                      </Box>
                      <Box width={{ _: "40%", md: "40%" }}>
                        <TextField
                          name="yubinbango"
                          placeholder=""
                          fullwidth
                          type="text"
                          onChange={handleYubinbangoChange}
                        />
                      </Box>
                    </FlexBox>

                    {!loading && (
                      <>
                        <TextField
                          name="address"
                          fullwidth
                          disabled
                          mb="1rem"
                          value={
                            (address &&
                              `${address.prefecture}${address.address1}`) ||
                            ""
                          }
                          errorText={touched.address && errors.address}
                        />
                        <Typography mb="1rem" color="error">
                          {error && "郵便番号エラー"}
                        </Typography>
                      </>
                    )}

                    <Typography
                      fontWeight={600}
                      mb="0.5rem"
                      fontSize="0.875rem"
                    >
                      町村字番地
                    </Typography>

                    <TextField
                      name="province"
                      placeholder=""
                      fullwidth
                      mb="1rem"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.province || ""}
                      errorText={touched.province && errors.province}
                    />

                    <Typography
                      fontWeight={600}
                      mb="0.5rem"
                      fontSize="0.875rem"
                    >
                      建物名(部屋番号)
                    </Typography>
                    <TextField
                      name="building"
                      placeholder=""
                      fullwidth
                      mb="1rem"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.building || ""}
                    />

                    <FlexBox
                      justifyContent="center"
                      flexDirection={{ _: "column-reverse", md: "row" }}
                      maxWidth="480px"
                      mx="auto"
                    >
                      <Button
                        width="100%"
                        size="large"
                        color="primary"
                        variant="contained"
                        borderRadius={5}
                        type="submit"
                      >
                        <Span fontSize="1rem">確認画面へ</Span>
                      </Button>
                    </FlexBox>
                  </form>
                </Box>
              }
            ></ModalComponent>
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
              onClick={() => history.push("/cart/shopping-cart")}
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
              onClick={() => history.push("/cart/order-confirmation")}
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
