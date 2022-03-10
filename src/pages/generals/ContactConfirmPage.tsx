import { contactApi } from "api";
import {
  Box,
  Button,
  H3,
  Spinner,
  Container,
  Typography,
} from "components/atoms";
import { Breadcrumb, Card } from "components/organisms";
import { BaseLayout } from "components/templates";
import { push } from "connected-react-router";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { selectStoreObject, storeObjectActions } from "redux/features";
import { Route as ROUTES } from "utils";

const ContactConfirmPage = () => {
  const formData = useAppSelector(selectStoreObject);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const isScreenMounted = useRef(true);

  const handleBack = () => {
    dispatch(push(ROUTES.CONTACT));
  };

  const handleSubmitForm = async () => {
    setLoading(true);
    try {
      const { status } = await contactApi.send(formData);
      if (!isScreenMounted.current) return;
      if (status === 200) {
        dispatch(storeObjectActions.unSetObject());
        dispatch(push(ROUTES.CONTACT_COMPLETE));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      isScreenMounted.current = false;
    };
  }, []);

  const breadcrumbList = [
    { url: ROUTES.HOME, description: "ホーム" },
    {
      url: "",
      description: "お問い合わせ",
    },
  ];

  return (
    <BaseLayout>
      <main>
        <Container pt="5px">
          <Breadcrumb my={20} breadcrumbList={breadcrumbList} />
          <Box
            bg="body.paper"
            maxWidth="800px"
            my="3rem"
            pt={{ _: 3, md: 40 }}
            pb={{ _: 3, md: 80 }}
            shadow={6}
            borderRadius={5}
            mx="auto"
          >
            <Card
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

              <Box
                borderRadius="5px"
                bg="gray.400"
                p="1rem"
                mb="1rem"
                border="1px solid"
                borderColor="gray.500"
              >
                {formData.name}
              </Box>
              <Box
                borderRadius="5px"
                bg="gray.400"
                p="1rem"
                mb="1rem"
                border="1px solid"
                borderColor="gray.500"
              >
                {formData.email}
              </Box>
              <Box
                borderRadius="5px"
                bg="gray.400"
                p="1rem"
                mb="1rem"
                border="1px solid"
                borderColor="gray.500"
              >
                {formData.phone}
              </Box>

              <Typography fontWeight={600} mb="0.5rem" fontSize="0.875rem">
                内容
              </Typography>

              <Box
                borderRadius="5px"
                bg="gray.400"
                p="1rem"
                mb="1rem"
                border="1px solid"
                borderColor="gray.500"
              >
                {formData.title}
              </Box>

              <Box
                borderRadius="5px"
                bg="gray.400"
                p="1rem"
                mb="1rem"
                border="1px solid"
                borderColor="gray.500"
              >
                {formData.content}
              </Box>

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
        </Container>
      </main>
    </BaseLayout>
  );
};

export default ContactConfirmPage;
