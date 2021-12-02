import {
  Box,
  Divider,
  FlexBox,
  Icon,
  IconPng,
  NavLink,
  Tiny,
  Typography,
} from "components/atoms";
import React from "react";

import styled from "styled-components";
import { authActions, selectIsLoggedIn } from "redux/features";
import { useAppSelector, useAppDispatch } from "redux/app/hooks";

const MobileMenuContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .mobile-menu-inner {
    flex: 1 1 0;
    overflow: auto;
  }
`;

export const MobileMenuContent: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <MobileMenuContentStyle>
      <div className="mobile-menu-inner">
        <FlexBox
          bg="body.paper"
          mt="2rem"
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
              <NavLink
                px="2rem"
                py="1rem"
                color="gray.700"
                href="/cart/shopping-cart"
              >
                <FlexBox position="relative" alignItems="center">
                  <Box width="16px" color="primary.main">
                    <Icon defaultcolor="currentColor" variant="medium">
                      shopping-cart
                    </Icon>
                  </Box>

                  <FlexBox
                    borderRadius="100%"
                    bg="error.main"
                    px="5px"
                    py="5px"
                    alignItems="center"
                    justifyContent="center"
                    position="absolute"
                    top="-1.1rem"
                    left="-1.3rem"
                  >
                    <Tiny color="white" fontWeight="600">
                      99
                    </Tiny>
                  </FlexBox>

                  <Typography ml={10}>カート</Typography>
                </FlexBox>
              </NavLink>

              <NavLink
                px="2rem"
                py="1rem"
                color="gray.700"
                href="/user/dashboard/"
              >
                <FlexBox alignItems="center">
                  <Box width="16px">
                    <IconPng>user</IconPng>
                  </Box>
                  <Typography ml={10}>マイページ</Typography>
                </FlexBox>
              </NavLink>

              <NavLink
                px="2rem"
                py="1rem"
                color="gray.700"
                href="/user/favorite"
              >
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

          <Divider width="100%" mx="auto" />

          <NavLink
            href="/"
            color="text.primary"
            px="2rem"
            py="1rem"
            variant="hover"
          >
            ホーム
          </NavLink>

          <NavLink
            href="/"
            color="text.primary"
            px="2rem"
            py="1rem"
            variant="hover"
          >
            スクラッチ
          </NavLink>
          <NavLink
            href="/"
            color="text.primary"
            px="2rem"
            py="1rem"
            variant="hover"
          >
            マイコレクション
          </NavLink>
          <NavLink
            href="/"
            color="text.primary"
            px="2rem"
            py="1rem"
            variant="hover"
          >
            ショップ
          </NavLink>

          <Divider width="100%" mx="auto" />

          {isLoggedIn && (
            <>
              <Divider width="100%" mx="auto" />

              <Box px="2rem" py="1rem" color="gray.700" onClick={handleLogout}>
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
    </MobileMenuContentStyle>
  );
};
