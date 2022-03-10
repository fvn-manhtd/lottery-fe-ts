import {
  Button,
  FlexBox,
  H3,
  NavLink,
  Typography,
  Container,
  Box,
} from "components/atoms";
import { Breadcrumb, Card } from "components/organisms";
import { BaseLayout } from "components/templates";
import { Route as ROUTES } from "utils";

const ContactCompletePage = () => {
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
            shadow={6}
            borderRadius={5}
            mx="auto"
          >
            <Card
              py="5rem"
              px={{ _: "1rem", md: "0" }}
              maxWidth="600px"
              mx="auto"
              boxShadow="none"
            >
              <H3 textAlign="center" mb="2rem" mt="1rem">
                お問い合わせ送信完了
              </H3>

              <Typography textAlign="center" mb="1rem">
                お問い合わせありがとうございました。
                <br />
                担当者からの連絡をお待ち下さい。
              </Typography>
              <FlexBox justifyContent="center">
                <NavLink href="/">
                  <Button variant="contained" color="primary" m="0.5rem">
                    トップに戻る
                  </Button>
                </NavLink>
              </FlexBox>
            </Card>
          </Box>
        </Container>
      </main>
    </BaseLayout>
  );
};

export default ContactCompletePage;
