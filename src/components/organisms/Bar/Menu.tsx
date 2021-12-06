import { FlexBox, NavLink } from "components/atoms";
import React from "react";

export const Menu: React.FC = () => {
  return (
    <FlexBox
      bg="gray.800"
      px={{ _: 0, md: 4 }}
      fontSize={{ _: "0.8rem", md: "1rem" }}
      display={{ _: "flex" }}
      justifyContent={{ _: "space-around", md: "flex-start" }}
    >
      <NavLink
        as="div"
        href="/"
        color="gray.white"
        px={{ _: "0rem", md: "2rem" }}
        py={{ _: "1rem", md: "1rem" }}
        variant="hover"
      >
        スクラッチ
      </NavLink>
      <NavLink
        as="div"
        href="/"
        color="gray.white"
        px={{ _: "0rem", md: "2rem" }}
        py={{ _: "1rem", md: "1rem" }}
        variant="hover"
      >
        マイコレクション
      </NavLink>
      <NavLink
        as="div"
        href="/"
        color="gray.white"
        px={{ _: "0rem", md: "2rem" }}
        py={{ _: "1rem", md: "1rem" }}
        variant="hover"
      >
        ショップ
      </NavLink>
    </FlexBox>
  );
};
