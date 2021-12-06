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
} from "components/atoms";
import { Card, Logo } from "components/organisms";
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
              <H3 textAlign="center" mb="0.5rem">
                無料ではじめる
              </H3>

              <Paragraph textAlign="center" mb="1rem" fontSize="1rem">
                まずはアカウントを作成しましょう
              </Paragraph>

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
                <Small fontWeight="600">Facebookで新規登録</Small>
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
                  Twitterで新規登録
                </Small>
              </FlexBox>

              <Box mt="2rem" mb="1.5rem">
                <Divider color="gray.500" width="320px" mx="auto" />
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
              >
                アカウントを作成
              </Button>

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
          </form>
        </Box>
      </OneColumnLayout>
    </>
  );
};

export default UserRegisterPage;
