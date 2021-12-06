import { OneColumnLayout } from "components/templates";
import { NavLink, Button, H3, Box, Paragraph } from "components/atoms";
import { Card, Logo } from "components/organisms";

const UserRegisterConfirmMailPage = () => {
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

            <Paragraph textAlign="center" mb="1rem" fontSize="0.8rem">
              メールにメッセージが送信されたことを確認してください。
            </Paragraph>

            <NavLink href="/user/login">
              <Button
                mb="1.65rem"
                variant="contained"
                color="primary"
                type="submit"
                fullwidth
                borderRadius={5}
              >
                ログインへ戻る
              </Button>
            </NavLink>
          </Card>
          <Paragraph py="1rem" textAlign="center" fontSize="0.8rem">
            &copy;Online Gacha
          </Paragraph>
        </Box>
      </OneColumnLayout>
    </>
  );
};

export default UserRegisterConfirmMailPage;
