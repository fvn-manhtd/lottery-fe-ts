import { OneColumnLayout } from "components/templates";
import { useFormik } from "formik";
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
} from "components/atoms";
import { Card1, Logo } from "components/organisms";
import * as yup from "yup";
import { authActions } from "redux/features";
import { useAppDispatch } from "redux/app/hooks";
import { Link } from "react-router-dom";

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

export const UserLoginPage = () => {
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
        <Box bg="body.paper" mt="3rem" maxWidth="400px" mx="auto">
          <form onSubmit={handleSubmit}>
            <Card1 mb="2rem" borderRadius={5} shadow={6}>
              <Box mx="auto" mt="1rem" mb="2rem" maxWidth="200px">
                <Logo />
              </Box>

              <H3 textAlign="center" mb="1rem">
                ログイン
              </H3>

              <FlexBox
                justifyContent="center"
                alignItems="center"
                bg="#3B5998"
                borderRadius={5}
                height="40px"
                color="white"
                cursor="pointer"
                mb="1rem"
              >
                <Icon variant="small" defaultcolor="auto" mr="0.5rem">
                  facebook-filled-white
                </Icon>
                <Small fontWeight="600">Facebookでログインする</Small>
              </FlexBox>

              <FlexBox
                justifyContent="center"
                alignItems="center"
                bg="#099DD9"
                borderRadius={5}
                height="40px"
                color="white"
                cursor="pointer"
                mb="1.5rem"
              >
                <Icon variant="small" defaultcolor="auto" mr="0.5rem">
                  twitter_filled
                </Icon>
                <Small fontWeight="600">Twitterでログインする</Small>
              </FlexBox>

              <Box mb="1rem">
                <Divider width="200px" mx="auto" />
                <FlexBox justifyContent="center" mt="-14px">
                  <Span color="text.muted" bg="body.paper" px="1rem">
                    or
                  </Span>
                </FlexBox>
              </Box>

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
                <Link to="/user/password-forget">
                  <H6
                    ml="0.5rem"
                    borderBottom="1px solid"
                    borderColor="gray.900"
                    fontWeight={400}
                  >
                    パスワードを忘れた場合
                  </H6>
                </Link>
              </FlexBox>

              <FlexBox justifyContent="flex-start" mb="1.25rem">
                <Link to="/user/register">
                  <H6
                    ml="0.5rem"
                    borderBottom="1px solid"
                    borderColor="gray.900"
                    fontWeight={400}
                  >
                    アカウントを作成
                  </H6>
                </Link>
              </FlexBox>

              <Divider width="100%" mx="auto" />

              <FlexBox justifyContent="flex-start" py="1rem">
                <Link to="/shop/login">
                  <H6
                    ml="0.5rem"
                    borderBottom="1px solid"
                    borderColor="gray.900"
                    fontWeight={400}
                  >
                    ショップログイン
                  </H6>
                </Link>
              </FlexBox>

              <FlexBox justifyContent="flex-start" mb="1.25rem">
                <Link to="/shop/register">
                  <H6
                    ml="0.5rem"
                    borderBottom="1px solid"
                    borderColor="gray.900"
                    fontWeight={400}
                  >
                    ショップを作成
                  </H6>
                </Link>
              </FlexBox>
            </Card1>
          </form>
        </Box>
        <Paragraph mb="1rem" textAlign="center" fontSize="0.8rem">
          &copy;Online Gacha
        </Paragraph>
      </OneColumnLayout>
    </>
  );
};
