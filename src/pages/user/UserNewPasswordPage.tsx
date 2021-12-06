import { OneColumnLayout } from "components/templates";
import { useFormik } from "formik";
import { Button, H3, Box, Paragraph, TextField } from "components/atoms";
import { Card, Logo } from "components/organisms";
import * as yup from "yup";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const formSchema = yup.object().shape({
  password: yup.string().required("パスワードを入力してください"),
  confirmPassword: yup.string().required("再入力パスワード"),
});

const UserNewPasswordPage = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
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
                name="confirmPassword"
                placeholder="再入力パスワード"
                autoComplete="on"
                fullwidth
                type="password"
                mb="1rem"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword || ""}
                errorText={touched.confirmPassword && errors.confirmPassword}
              />

              <Button
                mb="1.65rem"
                variant="contained"
                color="primary"
                type="submit"
                fullwidth
                borderRadius={5}
              >
                パスワードをリセット
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
