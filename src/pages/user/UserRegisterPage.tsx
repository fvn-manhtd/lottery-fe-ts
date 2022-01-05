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
  Icon,
  Small,
  Divider,
  Span,
  Typography,
  Image,
  Spinner,
} from "components/atoms";
import { Card, Logo } from "components/organisms";
import * as yup from "yup";
import styled from "styled-components";
import { authActions, selectIsLogging } from "redux/features";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { authApi } from "api";
import { useState } from "react";
import { Route as ROUTES } from "utils";
import { push } from "connected-react-router";

const TwitterButton = styled(Button)`
  background-color: #55acee;
  border-color: #55acee;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

const FacebookButton = styled(Button)`
  background-color: #3b5a9a;
  border-color: #3b5a9a;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

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
  password: yup
    .string()
    .required("パスワードを入力してください")
    .min(8, "半角英数字、数字を含む8文字以上"),
  agreement: yup.bool().oneOf([true], "同意してください"),
});

const UserRegisterPage = () => {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(selectIsLogging);
  const [loading, setLoading] = useState(false);

  const handleSocialLogin = async (type) => {
    await dispatch(authActions.socialLogin(type));
  };

  const handleFormSubmit = async (values) => {
    // Distpatch Action Register
    setLoading(true);
    try {
      const response = await authApi.register({
        email: values.email,
        password: values.password,
      });
      const { status, data } = response;
      console.log(status, data);
      if (status === 201 && data.status === "success") {
        setLoading(false);
        dispatch(push(ROUTES.USER_REGISTER_CONFIRM_MAIL));
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
            <Box mx="auto" mt="1rem" mb="2rem" maxWidth="200px">
              <Logo />
            </Box>
            <H3 textAlign="center" mb="0.5rem">
              無料ではじめる
            </H3>

            <Paragraph textAlign="center" mb="1rem" fontSize="1rem">
              まずはアカウントを作成しましょう
            </Paragraph>

            <FacebookButton
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              fullwidth
              borderRadius={5}
              disabled={isLogging}
              onClick={() => handleSocialLogin("facebook")}
            >
              {isLogging ? (
                <>
                  <Spinner
                    size={16}
                    border="2px solid"
                    borderColor="#3b5a9a"
                    borderTop="2px solid white"
                  ></Spinner>
                  <Small ml="0.5rem" color="white" fontWeight="600">
                    ログイン中です
                  </Small>
                </>
              ) : (
                <>
                  <Icon variant="medium" defaultcolor="auto">
                    facebook-filled-white
                  </Icon>
                  <Small ml="0.5rem" fontWeight="600">
                    Facebookで新規登録
                  </Small>
                </>
              )}
            </FacebookButton>

            <TwitterButton
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              fullwidth
              borderRadius={5}
              disabled={isLogging}
              onClick={() => handleSocialLogin("twitter")}
            >
              {isLogging ? (
                <>
                  <Spinner
                    size={16}
                    border="2px solid"
                    borderColor="#55acee"
                    borderTop="2px solid white"
                  ></Spinner>
                  <Small ml="0.5rem" color="white" fontWeight="600">
                    ログイン中です
                  </Small>
                </>
              ) : (
                <>
                  <Icon color="primary" variant="small" defaultcolor="auto">
                    twitter-1
                  </Icon>

                  <Small ml="0.5rem" color="white" fontWeight="600">
                    Twitterで新規登録
                  </Small>
                </>
              )}
            </TwitterButton>

            <Box mt="2rem" mb="1.5rem">
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

            <Image
              mb="1rem"
              src="/assets/images/illustrator/login_step.png"
              width="100%"
              alt="Login"
            />

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

              <Typography textAlign="right" mb="2rem" color="gray.600">
                ※半角英数字、数字を含む8文字以上
              </Typography>

              <CheckBox
                mb="1rem"
                name="agreement"
                color="primary"
                checked={values.agreement}
                justfiyContent="center"
                onChange={handleChange}
                size={24}
                errorText={touched.agreement && errors.agreement}
                label={
                  <FlexBox>
                    <NavLink href="/static-pages/usage-policy">
                      <H6 ml="0.5rem" color="primary.blue" fontWeight={400}>
                        利用規約
                      </H6>
                    </NavLink>
                    <SemiSpan>および</SemiSpan>
                    <NavLink href="/static-pages/privacy-policy">
                      <H6 ml="0.5rem" color="primary.blue" fontWeight={400}>
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
                size="large"
                variant="contained"
                color="primary"
                type="submit"
                fullwidth
                borderRadius={5}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      size={16}
                      border="2px solid"
                      borderColor="primary.light"
                      borderTop="2px solid white"
                    ></Spinner>
                    <Small ml="0.5rem" color="white" fontWeight="600">
                      アカウントを作成中です
                    </Small>
                  </>
                ) : (
                  <Small color="white" fontWeight="600">
                    アカウントを作成
                  </Small>
                )}
              </Button>
            </form>

            <FlexBox justifyContent="center" py="1rem">
              <NavLink href="/user/login">
                <H6 color="primary.blue" fontWeight={400}>
                  アカウントをお持ちの方はこちら
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

export default UserRegisterPage;
