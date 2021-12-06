import { OneColumnLayout } from "components/templates";
import { NavLink, Button, H3, Box, Paragraph } from "components/atoms";
import { Card1, Logo } from "components/organisms";

const UserPasswordForgotConfirmMailPage = () => {
  return (
    <>
      <OneColumnLayout>
        <main>
          <Box bg="body.paper" mt="3rem" maxWidth="400px" mx="auto">
            <Card1 mb="2rem" borderRadius={5} shadow={6}>
              <Box mx="auto" mt="1rem" mb="2rem" maxWidth="200px">
                <Logo />
              </Box>
              <H3 textAlign="center" mb="0.5rem">
                パスワードの再設定
              </H3>

              <Paragraph textAlign="center" mb="1rem" fontSize="0.8rem">
                ご入力いただきましたメールアドレスへ新パスワード設定URLを送信しました。
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
            </Card1>
          </Box>
          <Paragraph mb="1rem" textAlign="center" fontSize="0.8rem">
            &copy;Online Gacha
          </Paragraph>
        </main>
      </OneColumnLayout>
    </>
  );
};

export default UserPasswordForgotConfirmMailPage;
