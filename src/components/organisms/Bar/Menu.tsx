import { FlexBox, NavLink } from "components/atoms";
import React from "react";

export const Menu: React.FC = () => {
  return (
    <FlexBox
      bg="gray.800"
      px={4}
      fontSize="1rem"
      display={{ _: "none", md: "flex" }}
    >
      <NavLink
        as="div"
        href="/"
        color="gray.white"
        px="2rem"
        py="1rem"
        variant="hover"
      >
        スクラッチ
      </NavLink>
      <NavLink
        as="div"
        href="/"
        color="gray.white"
        px="2rem"
        py="1rem"
        variant="hover"
      >
        マイコレクション
      </NavLink>
      <NavLink
        as="div"
        href="/"
        color="gray.white"
        px="2rem"
        py="1rem"
        variant="hover"
      >
        ショップ
      </NavLink>
    </FlexBox>
  );
};
