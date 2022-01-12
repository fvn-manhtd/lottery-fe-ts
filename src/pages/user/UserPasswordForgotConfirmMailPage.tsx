import { OneColumnLayout } from "components/templates";
import { NavLink, Button, H3, Box, Paragraph } from "components/atoms";
import { Card, Logo } from "components/organisms";

const UserPasswordForgotConfirmMailPage = () => {
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
              パスワードの再設定
            </H3>

            <Paragraph textAlign="center" mb="1rem" fontSize="0.8rem">
              ご入力いただきましたメールアドレスへ新パスワード設定URLを送信しました。
              <br />
              ご確認の上、新しいパスワードへ変更ください。
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

export default UserPasswordForgotConfirmMailPage;
