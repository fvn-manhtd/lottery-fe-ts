import { OneColumnLayout } from "components/templates";
import { useFormik } from "formik";
import { Route as ROUTES } from "utils";
import {
  H6,
  Button,
  Divider,
  H3,
  Box,
  FlexBox,
  Icon,
  Paragraph,
  Small,
  TextField,
  Span,
  NavLink,
  Spinner,
} from "components/atoms";
import { Card, Logo } from "components/organisms";
import * as yup from "yup";
import { authActions, selectIsLogging } from "redux/features";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";

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

const UserLoginPage = () => {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(selectIsLogging);

  const handleFormSubmit = (values) => {
    dispatch(
      authActions.login({
        email: values.email,
        password: values.password,
      })
    );
  };

  const handleTwitterLogin = () => {
    dispatch(authActions.twitterLogin());
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
          <Card
            pt="5rem"
            px={{ _: "1rem", md: "0" }}
            maxWidth="490px"
            mx="auto"
            boxShadow="none"
          >
            <Box mx="auto" mb="2rem" maxWidth="200px">
              <Logo />
            </Box>

            <H3 textAlign="center" mb="1rem">
              ログイン
            </H3>

            <FlexBox
              justifyContent="center"
              alignItems="center"
              bg="#3b5a9a"
              borderRadius={5}
              height="60px"
              color="white"
              cursor="pointer"
              mb="1rem"
            >
              <Icon variant="medium" defaultcolor="auto" mr="0.5rem">
                facebook-filled-white
              </Icon>
              <Small fontWeight="600">Facebookでログインする</Small>
            </FlexBox>

            <FlexBox
              justifyContent="center"
              alignItems="center"
              bg="#55acee"
              borderRadius={5}
              height="60px"
              color="primary"
              cursor="pointer"
              mb="1.5rem"
              onClick={handleTwitterLogin}
            >
              <Icon
                color="primary"
                variant="small"
                defaultcolor="auto"
                mr="0.5rem"
              >
                twitter-1
              </Icon>

              <Small color="white" fontWeight="600">
                Twitterでログインする
              </Small>
            </FlexBox>

            <Box mb="2rem">
              <Divider height="1px" color="gray.500" width="320px" mx="auto" />
              <FlexBox justifyContent="center" mt="-10px">
                <Span
                  fontSize="0.8rem"
                  color="text.muted"
                  bg="body.paper"
                  px="1rem"
                >
                  または
                </Span>
              </FlexBox>
            </Box>

            <form onSubmit={handleSubmit}>
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
                placeholder="パスワード"
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
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                fullwidth
                borderRadius={5}
                disabled={isLogging}
              >
                {isLogging && (
                  <>
                    <Spinner
                      size={16}
                      border="2px solid"
                      borderColor="primary.light"
                      borderTop="2px solid white"
                    ></Spinner>
                  </>
                )}
                &nbsp; {isLogging ? "ログイン中です..." : "ログイン"}
              </Button>
            </form>

            <FlexBox justifyContent="center" py="1rem">
              <NavLink href={ROUTES.USER_PASSWORD_FORGOT}>
                <H6 color="primary.blue" fontWeight={400}>
                  パスワードを忘れた方はこちら
                </H6>
              </NavLink>
            </FlexBox>

            <FlexBox justifyContent="center" mb="1.25rem">
              <NavLink
                textAlign="center"
                bg="gray.500"
                py="1.4rem"
                variant="button"
                href={ROUTES.USER_REGISTER}
              >
                <H6 fontWeight={400}>新規登録</H6>
              </NavLink>
            </FlexBox>

            <Divider height="1px" width="100%" mx="auto" mb="1.25rem" />

            <FlexBox justifyContent="center" py="1rem">
              <NavLink href={ROUTES.SHOP_LOGIN}>
                <H6 color="primary.blue" fontWeight={400}>
                  ショップログイン
                </H6>
              </NavLink>
            </FlexBox>

            <FlexBox justifyContent="center" py="1rem">
              <NavLink href={ROUTES.SHOP_REGISTER}>
                <H6 color="primary.blue" fontWeight={400}>
                  ショップを作成
                </H6>
              </NavLink>
            </FlexBox>
          </Card>
          <Paragraph py="1rem" textAlign="center" fontSize="0.8rem">
            &copy;Online Gacha
          </Paragraph>
        </Box>
      </OneColumnLayout>
    </>
  );
};

export default UserLoginPage;
