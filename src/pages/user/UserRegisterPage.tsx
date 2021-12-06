import { OneColumnLayout } from "components/templates";
import { useFormik } from "formik";
import {
  CheckBox,
  SemiSpan,
  H6,
  Button,
  H3,
  Box,
  FlexBox,
  Paragraph,
  TextField,
  NavLink,
} from "components/atoms";
import { Card1, Logo } from "components/organisms";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
  agreement: false,
};

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("正式なメールアドレスを入力して下さい")
    .required("メールを入力してください"),
  password: yup.string().required("パスワードを入力してください"),
  agreement: yup.bool().oneOf([true], "同意してください"),
});

const UserRegisterPage = () => {
  const handleFormSubmit = () => {
    // Distpatch Action Register
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
          <Box bg="body.paper" mt="3rem" maxWidth="400px" mx="auto">
            <form onSubmit={handleSubmit}>
              <Card1 mb="2rem" borderRadius={5} shadow={6}>
                <Box mx="auto" mt="1rem" mb="2rem" maxWidth="200px">
                  <Logo />
                </Box>
                <H3 textAlign="center" mb="0.5rem">
                  無料ではじめる
                </H3>

                <Paragraph textAlign="center" mb="1rem" fontSize="0.8rem">
                  まずはアカウントを作成しましょう
                </Paragraph>

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
                      <SemiSpan>および</SemiSpan>
                      <NavLink href="/static-pages/privacy-policy">
                        <H6
                          ml="0.5rem"
                          borderBottom="1px solid"
                          borderColor="gray.900"
                          fontWeight={400}
                        >
                          プライバシーポリシー
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
                  アカウントを作成
                </Button>

                <FlexBox justifyContent="flex-start" py="1rem">
                  <NavLink href="/user/login">
                    <H6
                      ml="0.5rem"
                      borderBottom="1px solid"
                      borderColor="gray.900"
                      fontWeight={400}
                    >
                      アカウントをお持ちの方はこちら
                    </H6>
                  </NavLink>
                </FlexBox>
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

export default UserRegisterPage;
