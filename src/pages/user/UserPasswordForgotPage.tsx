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
  Spinner,
  Small,
} from "components/atoms";
import { Card, Logo } from "components/organisms";
import * as yup from "yup";
import { authApi } from "api";
import { toast } from "react-toastify";
import { push } from "connected-react-router";
import { useAppDispatch } from "redux/app/hooks";
import { useState } from "react";
import { Route as ROUTES } from "utils";

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
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (value) => {
    setLoading(true);
    try {
      const response = await authApi.sendResetLinkEmail(value);
      const { status } = response;
      if (status === 200) {
        setLoading(false);
        dispatch(push(ROUTES.USER_PASSWORD_FORGOT_CONFIRM_MAIL));
      } else {
        toast.error("そのメールアドレスのユーザーが見つかりません", {
          autoClose: 7000,
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("そのメールアドレスのユーザーが見つかりません", {
        autoClose: 7000,
      });
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
                パスワードの再設定
              </H3>

              <Paragraph textAlign="center" mb="1rem" fontSize="0.8rem">
                ご登録されているメールアドレスをご入力ください。
                <br />
                パスワードの再設定を行うためのメールをお送りいたします。
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
                size="large"
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
                      配信中です
                    </Small>
                  </>
                ) : (
                  <Small color="white" fontWeight="600">
                    配信する
                  </Small>
                )}
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

export default UserPasswordForgotPage;
