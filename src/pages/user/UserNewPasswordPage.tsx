import { OneColumnLayout } from "components/templates";
import { useFormik } from "formik";
import {
  Button,
  H3,
  Box,
  Paragraph,
  TextField,
  Spinner,
  Small,
} from "components/atoms";
import { Card, Head, Logo } from "components/organisms";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authApi } from "api";
import { Route as ROUTES } from "utils";
import { push } from "connected-react-router";
import { useAppDispatch } from "redux/app/hooks";

const initialValues = {
  password: "",
  password_confirmation: "",
};

const formSchema = yup.object().shape({
  password: yup.string().required("パスワードを入力してください"),
  password_confirmation: yup.string().required("再入力パスワード"),
});

const UserNewPasswordPage = () => {
  const [getTokenEmail, setTokenEmail] = useState({ email: "", token: "" });
  const { resetToken, resetEmail } = useParams(null);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTokenEmail({
      email: decodeURIComponent(resetEmail).replace(/\+/g, " "),
      token: resetToken,
    });
  }, [resetToken, resetEmail]);

  console.log(getTokenEmail);

  const handleFormSubmit = async (values) => {
    const objResetPassword = {
      ...values,
      email: getTokenEmail.email,
      token: getTokenEmail.token,
    };
    setLoading(true);
    try {
      const response = await authApi.resetPassword(objResetPassword);
      const { status } = response;
      if (status === 200) {
        setLoading(false);
        dispatch(push(ROUTES.USER_LOGIN));
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
      <Head title="新しパスワード" />
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
                新しパスワード
              </H3>

              <TextField
                name="password"
                placeholder="新しパスワード"
                autoComplete="on"
                fullwidth
                type="password"
                mb="1rem"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password || ""}
                errorText={touched.password && errors.password}
              />

              <TextField
                name="password_confirmation"
                placeholder="再入力パスワード"
                autoComplete="on"
                fullwidth
                type="password"
                mb="1rem"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password_confirmation || ""}
                errorText={
                  touched.password_confirmation && errors.password_confirmation
                }
              />

              <Button
                mb="1.65rem"
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
                      リセット中です
                    </Small>
                  </>
                ) : (
                  <Small color="white" fontWeight="600">
                    パスワードをリセット
                  </Small>
                )}
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

export default UserNewPasswordPage;
