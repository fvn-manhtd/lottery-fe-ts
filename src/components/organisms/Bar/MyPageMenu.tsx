import {
  FlexBox,
  Box,
  IconPng,
  NavLink,
  Typography,
  Menu,
} from "components/atoms";
import React from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "redux/app/hooks";
import { authActions } from "redux/features";
import styled from "styled-components";
import { getTheme, theme } from "utils";

const MyPageStyledBox = styled(FlexBox)`
  background-color: ${getTheme("colors.gray.800")};
  justify-content: center;

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 80px;
    width: 100px;
    height: 100vh;
    bg: gray.800;
    fontsize: 1rem;
    zindex: 0;
    flex-direction: column;
    justify-content: unset;
  }
`;

export const MyPageMenu: React.FC = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <MyPageStyledBox>
      <NavLink
        color="gray.white"
        bg={location.pathname === "/user/favorite" ? "gray.900" : ""}
        py="1rem"
        px="0.8rem"
        href="/user/favorite"
      >
        <FlexBox flexDirection="column" alignItems="center">
          <Box mb="5px" width="24px">
            <IconPng>favorite</IconPng>
          </Box>
          <Typography fontSize="0.8rem">お気に入り</Typography>
        </FlexBox>
      </NavLink>

      <NavLink
        py="1rem"
        px="0.8rem"
        bg={location.pathname === "/user/purchase-history" ? "gray.900" : ""}
        color="gray.white"
        href="/user/purchase-history"
      >
        <FlexBox flexDirection="column" alignItems="center">
          <Box mb="5px" width="20px">
            <IconPng>history</IconPng>
          </Box>
          <Typography fontSize="0.8rem">購入履歴</Typography>
        </FlexBox>
      </NavLink>

      <Menu
        direction="top_right"
        handler={
          <NavLink
            py="1rem"
            px="0.8rem"
            bg={
              location.pathname === "/user/mypage" ||
              location.pathname === "/user/shipping-address" ||
              location.pathname === "/user/card"
                ? "gray.900"
                : ""
            }
            color="gray.white"
            href="#!"
          >
            <FlexBox flexDirection="column" alignItems="center">
              <Box mb="5px" width="24px">
                <IconPng>user-white</IconPng>
              </Box>
              <Typography fontSize="0.8rem">アカウント</Typography>
            </FlexBox>
          </NavLink>
        }
      >
        <FlexBox flexDirection="column" bg="gray.800">
          <NavLink
            bg={location.pathname === "/user/mypage" ? "gray.900" : ""}
            py="0.8rem"
            px="1rem"
            color="gray.white"
            href="/user/mypage"
          >
            <Typography>登録情報</Typography>
          </NavLink>
          <NavLink
            bg={
              location.pathname === "/user/shipping-address" ? "gray.900" : ""
            }
            py="0.8rem"
            px="1rem"
            color="gray.white"
            href="/user/shipping-address"
          >
            <Typography>お届け先</Typography>
          </NavLink>
          <NavLink
            bg={location.pathname === "/user/card" ? "gray.900" : ""}
            py="0.8rem"
            px="1rem"
            color="gray.white"
            href="/user/card"
          >
            <Typography>クレジットカード</Typography>
          </NavLink>
        </FlexBox>
      </Menu>

      <NavLink
        py="1rem"
        px="0.8rem"
        color="gray.white"
        href="#!"
        onClick={handleLogout}
      >
        <FlexBox flexDirection="column" alignItems="center">
          <Box mb="5px" width="26px">
            <IconPng>logout-white</IconPng>
          </Box>
          <Typography fontSize="0.8rem">ログアウト</Typography>
        </FlexBox>
      </NavLink>
    </MyPageStyledBox>
  );
};
