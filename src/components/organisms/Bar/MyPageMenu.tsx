import { FlexBox, Icon, NavLink, Typography } from "components/atoms";
import React from "react";

export const MyPageMenu: React.FC = () => {
  return (
    <FlexBox
      position="fixed"
      top="80px"
      width="100px"
      height="100vh"
      bg="gray.800"
      fontSize="1rem"
      display={{ _: "none", md: "flex" }}
      flexDirection="column"
    >
      <NavLink bg="gray.900" color="gray.white" href="/favorite">
        <FlexBox flexDirection="column" alignItems="center" py={3}>
          <Icon defaultcolor="currentColor" variant="medium">
            star
          </Icon>
          <Typography fontSize="0.8rem">お気に入り</Typography>
        </FlexBox>
      </NavLink>

      <NavLink color="gray.white" href="/favorite">
        <FlexBox flexDirection="column" alignItems="center" py={3}>
          <Icon defaultcolor="none" variant="medium">
            receipt
          </Icon>
          <Typography fontSize="0.8rem">購入履歴</Typography>
        </FlexBox>
      </NavLink>

      <NavLink color="gray.white" href="/favorite">
        <FlexBox flexDirection="column" alignItems="center" py={3}>
          <Icon defaultcolor="none" variant="medium">
            user-3
          </Icon>
          <Typography fontSize="0.8rem">アカウント</Typography>
        </FlexBox>
      </NavLink>

      <NavLink color="gray.white" href="/favorite">
        <FlexBox flexDirection="column" alignItems="center" py={3}>
          <Icon defaultcolor="none" variant="medium">
            logout
          </Icon>
          <Typography fontSize="0.8rem">ログアウト</Typography>
        </FlexBox>
      </NavLink>
    </FlexBox>
  );
};
