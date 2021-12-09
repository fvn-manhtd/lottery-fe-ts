import React from "react";
import { FlexBox, Container, NavLink, Box, Paragraph } from "components/atoms";
import { Route as ROUTES } from "utils";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
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
  return (
    <footer>
      <Box pt={115} pb={60}>
        <Container>
          <FlexBox
            mx="auto"
            alignItems="center"
            flexDirection={{ _: "column", lg: "row" }}
            justifyContent="space-between"
          >
            <Box width="260px" mb={{ _: "2rem", lg: 0 }}>
              <Logo />
            </Box>

            <Box width={{ _: 1, md: 3 / 4 }}>
              <FlexBox
                justifyContent={{ _: "center", lg: "flex-end" }}
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
            </Box>
          </FlexBox>
          <Paragraph
            textAlign={{ _: "center", md: "right" }}
            color="gray.600"
            fontSize="1rem"
          >
            &copy; Online Gacha
          </Paragraph>
        </Container>
      </Box>
    </footer>
  );
};
