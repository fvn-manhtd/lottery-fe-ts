import { Box, Button, H3, TextArea, TextField, Typography } from "components/atoms";
import { Card } from "components/organisms";
import { BaseLayout } from "components/templates";
import { useFormik } from "formik";
import * as yup from 'yup';
import { phoneRegExp } from "utils";

const initialValues = {
    name:"",
    phone:"",
    email:"",
    title:"",
    content:"",
};

const formSchema = yup.object().shape({
    name: yup.string().required('お名前を入力して下さい'),
    phone: yup.string().matches(phoneRegExp,'正式な電話番号を入力して下さい'),
    email:yup.string().required('メールアドレスを入力して下さい').email('正式なメールアドレスを入力して下さい'),
    content:yup.string().max(1500,'件名は1500文字以内で入力して下さい'),
    title:yup.string().max(250,'件名は250文字以内で入力して下さい'),
});

const ContactPage = () => {
    const handleFormSubmit = () => {};
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = 
    useFormik({
        onSubmit:handleFormSubmit,
        initialValues,
        validationSchema:formSchema,
    })
    return (
        <BaseLayout>
            <main>
            <Box
                bg="body.paper"
                maxWidth="800px"
                my="3rem"
                shadow={6}
                borderRadius={5}
                mx="auto"
                >
                    <form onSubmit={handleSubmit}>
                        <Card
                            pt="5rem"
                            pb="2rem"
                            px={{ _: "1rem", md: "0" }}
                            maxWidth="600px"
                            mx="auto"
                            boxShadow="none"
                            >
                            <H3 textAlign="center" mb="2rem" mt="1rem">
                                お問い合わせ
                            </H3>
                            <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                                連絡先
                            </Typography>
                            <TextField
                                name="name"
                                placeholder="お名前"
                                fullwidth
                                mb="1rem"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name || ""}
                                errorText={touched.name && errors.name}
                            />
                            <TextField
                                name="email"
                                placeholder="メールアドレス"
                                fullwidth
                                mb="1rem"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email || ""}
                                errorText={touched.email && errors.email}
                            />
                            <TextField
                                name="phone"
                                placeholder="電話番号"
                                fullwidth
                                mb="1rem"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phone || ""}
                                errorText={touched.phone && errors.phone}
                            />
                            <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                                内容
                            </Typography>
                            <TextField
                                name="title"
                                placeholder="件名"
                                fullwidth
                                mb="1rem"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.title || ""}
                                errorText={touched.title && errors.title}
                            />
                            <TextArea
                                name="content"
                                placeholder="内容"
                                fullwidth
                                rows={8}
                                mb="1rem"
                                borderRadius="5px"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.content || ""}
                                errorText={touched.content && errors.content}
                            />
                            <Button
                                mt="1.65rem"
                                mb="1.65rem"
                                variant="contained"
                                color="primary"
                                type="submit"
                                size="large"
                                fullwidth
                                borderRadius={5}
                            >
                                確認
                            </Button>
                        </Card>

                    </form>
            </Box>
            </main>
        </BaseLayout>
    )
}

export default ContactPage