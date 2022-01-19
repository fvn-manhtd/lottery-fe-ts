import { FlexBox, Box, NavLink } from "components/atoms";
import React from "react";
import { Route as ROUTES } from "utils";

const aStyle = {
  textAlign: "center",
};

export const Menu: React.FC = () => {
  const listPage = [
    {
      id: 1,
      title: "スクラッチ",
      href: ROUTES.LOTTERIES + "?status=1",
    },
    {
      id: 2,
      title: "マイコレクション",
      href: ROUTES.HOME,
    },
    {
      id: 3,
      title: "ショップ",
      href: ROUTES.HOME,
    },
  ];

  return (
    <FlexBox
      bg="gray.800"
      px={{ _: 0, md: 4 }}
      fontSize={{ _: "0.8rem", md: "1rem" }}
      display={{ _: "flex" }}
      justifyContent={{ _: "space-around", md: "flex-start" }}
    >
      {listPage.map((value) => {
        return (
          <Box key={value.id} width={{ _: "33%", lg: "auto" }}>
            <NavLink
              as="div"
              href={value.href}
              color="gray.white"
              px={{ _: "0rem", md: "2rem" }}
              py={{ _: "1rem", md: "1rem" }}
              variant="hover"
            >
              {value.title}
            </NavLink>
          </Box>
        );
      })}
    </FlexBox>
  );
};
