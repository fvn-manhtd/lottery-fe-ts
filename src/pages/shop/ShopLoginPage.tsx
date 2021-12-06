import { authActions } from "redux/features";
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
  NavLink,
} from "components/atoms";
import { Card1, Logo } from "components/organisms";
import * as yup from "yup";
import { useAppDispatch } from "redux/app/hooks";

const initialValues = {
  email: "",
  password: "",
};

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("正式なメールアドレスを入力して下さい")
    .required("メールを入力してください"),
  password: yup.string().required("パスワードを入力してください"),
});

const ShopLoginPage = () => {
  const dispatch = useAppDispatch();
  const handleFormSubmit = (values) => {
    dispatch(
      authActions.login({
        email: values.email,
        password: values.password,
      })
    );
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
                  ショップログイン
                </H3>

                <FlexBox
                  mb="2rem"
                  justifyContent="center"
                  bg="gray.400"
                  borderBottom="2px solid"
                  borderColor="main.second"
                >
                  <Box width="50%">
                    <H6 py="0.8rem" textAlign="center">
                      ログイン
                    </H6>
                  </Box>
                  <Box width="50%">
                    <NavLink href="/shop/register">
                      <H6
                        color="gray.white"
                        py="0.8rem"
                        bg="primary.second"
                        textAlign="center"
                      >
                        新規登録
                      </H6>
                    </NavLink>
                  </Box>
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

                <Button
                  mb="1.65rem"
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullwidth
                  borderRadius={5}
                >
                  ログイン
                </Button>

                <FlexBox justifyContent="flex-start" py="1rem">
                  <NavLink href="/shop/password-forgot">
                    <H6
                      ml="0.5rem"
                      borderBottom="1px solid"
                      borderColor="gray.900"
                      fontWeight={400}
                    >
                      パスワードを忘れた場合
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

export default ShopLoginPage;
