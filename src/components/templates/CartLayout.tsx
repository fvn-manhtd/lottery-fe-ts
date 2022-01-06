import React from "react";
import { Box, FlexBox, NavLink, Paragraph, Typography } from "components/atoms";
import { HeaderCart } from "components/organisms";
import { Route as ROUTES } from "utils";

const listStaticPage = [
  { id: 1, title: "ご利用規約", href: ROUTES.STATIC_USAGE_POLICY },
  {
    id: 2,
    title: "特定商取引法に基づく表示",
    href: ROUTES.STATIC_LEGAL,
  },
  {
    id: 3,
    title: "プライバシーポリシー",
    href: ROUTES.STATIC_LEGAL,
  },
  { id: 4, title: "お問い合わせ", href: ROUTES.CONTACT },
];

type CartLayoutProps = {
  children:JSX.Element,
  pageTitle?:string,
}

export const CartLayout: React.FC<CartLayoutProps> = ({ children, pageTitle }) => (
  <>
    <HeaderCart />

    <Typography as="h2" textAlign="center" my="3rem">
      {pageTitle?pageTitle:"カート"}
    </Typography>
    <Box bg="gray.400" my="3rem">
      {children}
    </Box>

    <FlexBox
      justifyContent={{ _: "center" }}
      flexDirection={{ _: "column", lg: "row" }}
      fontSize="1rem"
      fontWeight="bold"
      textAlign="center"
    >
      {listStaticPage.map((value) => {
        return (
          <NavLink
            key={value.id}
            color="gray.700"
            mb="1rem"
            ml={{ _: 0, lg: "3rem" }}
            href={value.href}
          >
            {value.title}
          </NavLink>
        );
      })}
    </FlexBox>

    <Paragraph py="1rem" textAlign="center" fontSize="0.8rem">
      &copy;Online Gacha
    </Paragraph>
  </>
);
