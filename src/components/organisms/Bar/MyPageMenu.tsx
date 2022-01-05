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
import { getTheme, theme, Route as ROUTES } from "utils";

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
  const handleLogout = async () => {
    await dispatch(authActions.logout());
  };

  return (
    <MyPageStyledBox>
      <NavLink
        color="gray.white"
        bg={location.pathname === ROUTES.USER_FAVORITE ? "gray.900" : ""}
        py="1rem"
        px="0.8rem"
        href={ROUTES.USER_FAVORITE}
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
        bg={
          location.pathname === ROUTES.USER_PURCHASED_HISTORY ? "gray.900" : ""
        }
        color="gray.white"
        href={ROUTES.USER_PURCHASED_HISTORY}
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
              location.pathname === ROUTES.USER_MYAPGE ||
              location.pathname === ROUTES.USER_SHIPPING_ADDRESS ||
              location.pathname === ROUTES.USER_CARD
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
            bg={location.pathname === ROUTES.USER_MYAPGE ? "gray.900" : ""}
            py="0.8rem"
            px="1rem"
            color="gray.white"
            href={ROUTES.USER_MYAPGE}
          >
            <Typography>登録情報</Typography>
          </NavLink>
          <NavLink
            bg={
              location.pathname === ROUTES.USER_SHIPPING_ADDRESS
                ? "gray.900"
                : ""
            }
            py="0.8rem"
            px="1rem"
            color="gray.white"
            href={ROUTES.USER_SHIPPING_ADDRESS}
          >
            <Typography>お届け先</Typography>
          </NavLink>
          <NavLink
            bg={location.pathname === ROUTES.USER_CARD ? "gray.900" : ""}
            py="0.8rem"
            px="1rem"
            color="gray.white"
            href={ROUTES.USER_CARD}
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
