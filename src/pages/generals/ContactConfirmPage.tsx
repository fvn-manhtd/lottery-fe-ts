import { contactApi } from "api";
import {
  Box,
  Button,
  H3,
  Spinner,
  TextArea,
  TextField,
  Typography,
} from "components/atoms";
import { Card } from "components/organisms";
import { BaseLayout } from "components/templates";
import { push } from "connected-react-router";
import { ContactContext, initialValues } from "context";
import { useContext, useState, useEffect } from "react";
import { useAppDispatch } from "redux/app/hooks";
import { Route as ROUTES } from "utils";

const ContactConfirmPage = () => {
  const formData = useContext(ContactContext);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    dispatch(push(ROUTES.CONTACT));
  };

  const handleSubmitForm = async () => {
    setLoading(true);
    try {
      const { status } = await contactApi.send(formData.contact);
      if (status === 200) {
        dispatch(push(ROUTES.CONTACT_COMPLETE));
      }
      formData.setContact(initialValues);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BaseLayout>
      <Box
        bg="body.paper"
        maxWidth="800px"
        my="3rem"
        shadow={6}
        borderRadius={5}
        mx="auto"
      >
        <Card
          pt="5rem"
          pb="2rem"
          px={{ _: "1rem", md: "0" }}
          maxWidth="600px"
          mx="auto"
          boxShadow="none"
        >
          <H3 textAlign="center" mb="2rem" mt="1rem">
            お問い合わせ確認
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
            value={formData.contact.name}
            disabled={true}
          />
          <TextField
            name="email"
            placeholder="メールアドレス"
            fullwidth
            mb="1rem"
            type="text"
            value={formData.contact.email}
            disabled={true}
          />
          <TextField
            name="phone"
            placeholder="電話番号"
            fullwidth
            mb="1rem"
            type="text"
            value={formData.contact.phone}
            disabled={true}
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
            value={formData.contact.title}
            disabled={true}
          />
          <TextArea
            name="content"
            placeholder="内容"
            fullwidth
            rows={8}
            mb="1rem"
            value={formData.contact.content}
            disabled={true}
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
            onClick={handleSubmitForm}
          >
            {loading ? (
              <>
                <Spinner
                  size={16}
                  border="2px solid"
                  borderColor="primary.light"
                  borderTop="2px solid white"
                ></Spinner>
                <Typography ml="0.5rem" color="white" fontWeight="600">
                  送信中です
                </Typography>
              </>
            ) : (
              <Typography color="white" fontWeight="600">
                送 信
              </Typography>
            )}
          </Button>

          <Button
            mt="1.65rem"
            mb="1.65rem"
            color="inherit"
            type="submit"
            size="large"
            fullwidth
            borderRadius={5}
            bg="white"
            border="1px solid black"
            onClick={handleBack}
          >
            戻る
          </Button>
        </Card>
      </Box>
    </BaseLayout>
  );
};

export default ContactConfirmPage;
