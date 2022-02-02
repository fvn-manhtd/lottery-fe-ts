import { Button, Box, NavLink } from "components/atoms";
import { Route } from "utils";
import { GridSection } from ".";
import { Route as ROUTES } from "utils";

export const RegisterSection: React.FC = () => {
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));

  return (
    <GridSection
      title="初めての方へ"
      subTitle="BEGINNERS"
      content={
        <>
          <NavLink href={Route.USER_REGISTER}>
            <Box
              mr={{ _: 0, md: 3 }}
              ml={{ _: 0, md: 3 }}
              mb={{ _: 3, md: 0 }}
              color="white"
            >
              <Button
                size="large"
                fullwidth={true}
                color="inherit"
                borderRadius={60}
                bg="black"
                border="1px solid black"
              >
                新規会員登録
              </Button>
            </Box>
          </NavLink>
          <NavLink href={isLoggedIn ? ROUTES.USER_MYAPGE : ROUTES.USER_LOGIN}>
            <Box ml={{ _: 0, md: 3 }} mr={{ _: 0, md: 3 }} color="black">
              <Button
                size="large"
                fullwidth={true}
                color="inherit"
                borderRadius={60}
                bg="white"
                border="1px solid black"
              >
                {isLoggedIn ? "マイページ" : "ログイン"}
              </Button>
            </Box>
          </NavLink>
        </>
      }
    />
  );
};
