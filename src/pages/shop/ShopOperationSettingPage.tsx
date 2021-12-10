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
  Divider,
  SemiSpan,
  RadioButton,
  NavLink,
} from "components/atoms";
import { Card, Logo } from "components/organisms";
import * as yup from "yup";
import React, { useState } from "react";
import { usePostalJp } from "use-postal-jp";
import { phoneRegExp } from "utils";

const initialValues = {
  companyName: "",
  userName: "",
  phone: "",
  note: "",

  building: "",
  other: "",

  aboutPrice: "",
  aboutPaymentMethod: "",
  aboutContract: "",
  aboutShipping: "",
  aboutOther: "",
};

const formSchema = yup.object().shape({
  userName: yup.string().required("お名前を入力してください"),
  phone: yup.string().matches(phoneRegExp, "電話番号を入力してください"),
});

const ShopOperationSettingPage: React.FC = () => {
  const [value, setValue] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, loading, error] = usePostalJp(value, value.length >= 7);

  const [bussinessType, setBussinessType] = useState("private");

  const handleBussinessTypeChange = ({ target: { name } }) => {
    setBussinessType(name);
  };

  const handleYubinbangoChange = (e) => {
    setValue(e.target.value);
    setPostcode(e.target.value);
  };

  const handleFormSubmit = (values) => {
    const obj = { ...values, bussinessType, postcode };
    console.log("Values: ", obj);
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
        <Box
          bg="body.paper"
          maxWidth="800px"
          mt="3rem"
          shadow={6}
          borderRadius={5}
          mx="auto"
        >
          <form onSubmit={handleSubmit}>
            <Card
              pt="5rem"
              px={{ _: "1rem", md: "0" }}
              maxWidth="490px"
              mx="auto"
              boxShadow="none"
            >
              <Box mx="auto" mt="1rem" mb="2rem" maxWidth="200px">
                <Logo />
              </Box>

              <H3 textAlign="center" mb="2rem">
                運営に関する設定
              </H3>

              <Typography mb="2rem" fontSize="0.875rem">
                通信販売には「特定商取引法」にのっとった表記が法令で義務付けられています。
              </Typography>

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                事業者情報
              </Typography>

              <Typography mb="1.5rem" fontSize="0.875rem">
                ネットショップを運営する事業者さまの公開情報です。
              </Typography>

              <Divider
                height="1px"
                color="gray.700"
                width="100%"
                mx="auto"
                mb="1.5rem"
              />

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                事業形態
              </Typography>

              <FlexBox mb="1rem">
                <RadioButton
                  mr="3rem"
                  name="cooperate"
                  color="primary"
                  checked={bussinessType === "cooperate"}
                  label={<SemiSpan>法人</SemiSpan>}
                  size={24}
                  onChange={handleBussinessTypeChange}
                />
                <RadioButton
                  mr="3rem"
                  name="sole-proprietorship"
                  color="primary"
                  checked={bussinessType === "sole-proprietorship"}
                  label={<SemiSpan>個人事業主</SemiSpan>}
                  size={24}
                  onChange={handleBussinessTypeChange}
                />
                <RadioButton
                  name="private"
                  color="primary"
                  checked={bussinessType === "private"}
                  label={<SemiSpan>個人</SemiSpan>}
                  size={24}
                  onChange={handleBussinessTypeChange}
                />
              </FlexBox>

              <Divider
                height="1px"
                color="gray.700"
                width="100%"
                mx="auto"
                mb="1.5rem"
              />

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                連絡先
              </Typography>

              {bussinessType === "cooperate" && (
                <TextField
                  name="companyName"
                  placeholder="会社名"
                  fullwidth
                  mb="1rem"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName || ""}
                  errorText={touched.firstName && errors.firstName}
                />
              )}

              <TextField
                name="userName"
                placeholder="お名前"
                fullwidth
                mb="1rem"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName || ""}
                errorText={touched.userName && errors.userName}
              />

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

              <TextArea
                name="note"
                placeholder="その他"
                fullwidth
                rows={8}
                mb={10}
                border="gray.500"
                borderRadius="5px"
              />

              <Typography fontSize="0.875rem">
                酒類や中古品を販売する場合は、許可証も記載してください。
              </Typography>

              <NavLink
                mb="1rem"
                fontSize="0.875rem"
                color="primary.blue"
                href="/"
              >
                詳細はこちら
              </NavLink>

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                所在地
              </Typography>
              <FlexBox mb="1rem" alignItems="center">
                <Box width="15%">郵便番号</Box>
                <Box width="40%">
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
                      (address && `${address.prefecture}${address.address1}`) ||
                      ""
                    }
                  />
                  <Typography mb="1rem" color="error">
                    {error && error.message}
                  </Typography>

                  <TextField
                    name="building"
                    fullwidth
                    mb="1rem"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.building || ""}
                  />
                  <TextField
                    name="other"
                    fullwidth
                    mb="1rem"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.other || ""}
                  />
                </>
              )}

              <Divider
                height="1px"
                color="gray.700"
                width="100%"
                mx="auto"
                mb="1.5rem"
              />

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                特定商取引法に関する表記
              </Typography>

              <Typography mb="1.5rem" fontSize="0.875rem">
                お客さまとの取引で約束する内容です。一般的な内容が記入されています。
                実態に応じて編集してください。
              </Typography>

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                販売価格について
              </Typography>

              <TextArea
                name="aboutPrice"
                fullwidth
                rows={8}
                mb={10}
                border="gray.500"
                borderRadius="5px"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aboutPrice || ""}
              />

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                代金（対価）の支払時期と方法
              </Typography>

              <TextArea
                name="aboutPaymentMethod"
                fullwidth
                rows={8}
                mb={10}
                border="gray.500"
                borderRadius="5px"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aboutPaymentMethod || ""}
              />

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                返品についての特約に関する事項
              </Typography>

              <TextArea
                name="aboutShipping"
                fullwidth
                rows={8}
                mb={10}
                border="gray.500"
                borderRadius="5px"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aboutShipping || ""}
              />

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                役務または商品の引き渡し時期
              </Typography>

              <TextArea
                name="aboutContract"
                fullwidth
                rows={8}
                mb={10}
                border="gray.500"
                borderRadius="5px"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aboutContract || ""}
              />

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                その他（任意）
              </Typography>

              <TextArea
                name="aboutOther"
                fullwidth
                rows={8}
                mb={10}
                border="gray.500"
                borderRadius="5px"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aboutOther || ""}
              />

              <Typography fontSize="0.875rem" textAlign="center">
                OnlineGACHAがお客さまの情報を、第三者に不当に提供・利用許可を
                することは一切ございません。
                他社からの営業・勧誘行為にはご注意ください。
              </Typography>

              <Button
                mt="1.65rem"
                mb="1.65rem"
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                fullwidth
                borderRadius={5}
              >
                次
              </Button>
            </Card>
            <Paragraph py="1rem" textAlign="center" fontSize="0.8rem">
              &copy;Online Gacha
            </Paragraph>
          </form>
        </Box>
      </OneColumnLayout>
    </>
  );
};

export default ShopOperationSettingPage;
