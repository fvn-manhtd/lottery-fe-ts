import { OneColumnLayout } from "components/templates";
import { useFormik } from "formik";
import {
  Button,
  H3,
  H6,
  FlexBox,
  Box,
  Paragraph,
  TextField,
  NavLink,
} from "components/atoms";
import { Card1, Logo } from "components/organisms";
import * as yup from "yup";

const initialValues = {
  email: "",
};

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("正式なメールアドレスを入力して下さい")
    .required("メールを入力してください"),
});

const UserPasswordForgotPage = () => {
  const handleFormSubmit = () => {};

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
                  パスワードの再設定
                </H3>

                <Paragraph textAlign="center" mb="1rem" fontSize="0.8rem">
                  ご登録されているメールアドレスをご入力ください。パスワードの再設定を行うためのメールをお送りいたします。
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

                <Button
                  mb="1.65rem"
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullwidth
                  borderRadius={5}
                >
                  配信する
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

export default UserPasswordForgotPage;
