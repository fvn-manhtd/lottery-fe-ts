import { OneColumnLayout } from "components/templates";
import { useFormik } from "formik";
import {
  H6,
  Button,
  H3,
  Box,
  FlexBox,
  Paragraph,
  TextField,
  Typography,
  SemiSpan,
  CheckBox,
  NavLink,
} from "components/atoms";
import { Card1, Logo } from "components/organisms";
import * as yup from "yup";

const initialValues = {
  shopID: "",
  email: "",
  password: "",
  agreement: false,
};

const formSchema = yup.object().shape({
  shopID: yup.string().required("ショップIDを入力してください"),
  email: yup
    .string()
    .email("正式なメールアドレスを入力して下さい")
    .required("メールを入力してください"),
  password: yup.string().required("パスワードを入力してください"),
  agreement: yup.bool().oneOf([true], "同意してください"),
});

const ShopRegisterPage = () => {
  const handleFormSubmit = () => {
    //
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

                <H3 textAlign="center" mb="1rem">
                  ショップ新規登録
                </H3>

                <FlexBox
                  mb="2rem"
                  justifyContent="center"
                  bg="gray.400"
                  borderBottom="2px solid"
                  borderColor="main.second"
                >
                  <Box width="50%">
                    <NavLink href="/shop/login">
                      <H6
                        color="gray.white"
                        py="0.8rem"
                        bg="primary.second"
                        textAlign="center"
                      >
                        ログイン
                      </H6>
                    </NavLink>
                  </Box>

                  <Box width="50%">
                    <H6 py="0.8rem" textAlign="center">
                      新規登録
                    </H6>
                  </Box>
                </FlexBox>

                <FlexBox mb="1rem" alignItems="center">
                  <Typography>https://</Typography>
                  <TextField
                    name="shopID"
                    type="text"
                    fullwidth
                    placeholder="ID"
                    mb="0"
                    px="2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.shopID || ""}
                    errorText={touched.shopID && errors.shopID}
                  />
                  <Typography>.gachasystem.jp</Typography>
                </FlexBox>

                <TextField
                  name="email"
                  placeholder="メールアドレス"
                  type="email"
                  fullwidth
                  mb="1rem"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email || ""}
                  errorText={touched.email && errors.email}
                />
                <TextField
                  name="password"
                  placeholder="*********"
                  autoComplete="on"
                  fullwidth
                  type="password"
                  mb="1rem"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password || ""}
                  errorText={touched.password && errors.password}
                />

                <CheckBox
                  mb="1rem"
                  name="agreement"
                  color="secondary"
                  checked={values.agreement}
                  onChange={handleChange}
                  errorText={touched.agreement && errors.agreement}
                  label={
                    <FlexBox>
                      <NavLink href="/static-pages/usage-policy">
                        <H6
                          ml="0.5rem"
                          borderBottom="1px solid"
                          borderColor="gray.900"
                          fontWeight={400}
                        >
                          利用規約
                        </H6>
                      </NavLink>
                      <SemiSpan>に同意する</SemiSpan>
                    </FlexBox>
                  }
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
                  アカウント作成
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

export default ShopRegisterPage;
