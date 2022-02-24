import {
  Box,
  Divider,
  FlexBox,
  Icon,
  IconPng,
  NavLink,
  Typography,
} from "components/atoms";
import React from "react";

import { authActions } from "redux/features";
import { useAppDispatch } from "redux/app/hooks";

export const MobileMenuContent: React.FC = () => {
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="mobile-menu-inner">
      <FlexBox
        bg="body.paper"
        mt={{ _: 0, md: "2rem" }}
        fontSize="1rem"
        flexDirection="column"
      >
        {!isLoggedIn && (
          <>
            <NavLink px="2rem" py="1rem" color="gray.700" href="/user/login">
              <FlexBox alignItems="center">
                <Box width="16px">
                  <IconPng>login</IconPng>
                </Box>
                <Typography ml={10}>ログイン</Typography>
              </FlexBox>
            </NavLink>
          </>
        )}

        {isLoggedIn && (
          <>
            <NavLink px="2rem" py="1rem" color="gray.700" href="/user/mypage">
              <FlexBox alignItems="center">
                <Box width="16px">
                  <IconPng>user</IconPng>
                </Box>
                <Typography ml={10}>マイページ</Typography>
              </FlexBox>
            </NavLink>

            <NavLink px="2rem" py="1rem" color="gray.700" href="/user/favorite">
              <FlexBox alignItems="center">
                <Box width="18px" color="primary.main">
                  <Icon defaultcolor="currentColor" variant="small">
                    heart
                  </Icon>
                </Box>
                <Typography ml={10}>お気に入り</Typography>
              </FlexBox>
            </NavLink>
          </>
        )}

        <Divider height="1px" width="100%" mx="auto" />

        {isLoggedIn && (
          <>
            <Divider height="1px" width="100%" mx="auto" />

            <Box
              cursor="pointer"
              px="2rem"
              py="1rem"
              color="gray.700"
              onClick={handleLogout}
            >
              <FlexBox alignItems="center">
                <Box width="16px">
                  <IconPng>logout</IconPng>
                </Box>
                <Typography ml={10}>ログアウト</Typography>
              </FlexBox>
            </Box>
          </>
        )}
      </FlexBox>
    </div>
  );
};
