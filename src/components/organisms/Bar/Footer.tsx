import React from "react";
import { FlexBox, Container, NavLink, Box, Paragraph } from "components/atoms";
import { Logo } from "./Logo";
import Skeleton from "react-loading-skeleton";
import { useGetStaticPagesQuery } from "api";
import { Route as ROUTES } from "utils";

export const Footer: React.FC = () => {
  const { data: listStaticPage, isLoading } = useGetStaticPagesQuery({});

  return (
    <footer>
      <Box pt={115} pb={60}>
        <Container>
          <FlexBox
            mx="auto"
            alignItems={{ _: "center", lg: "flex-start" }}
            flexDirection={{ _: "column", lg: "row" }}
            justifyContent="space-between"
          >
            <Box width="260px" mb={{ _: "2rem", lg: 0 }}>
              <Logo />
            </Box>

            <Box width={{ _: 1, md: 3 / 4, lg: 2 / 4 }}>
              {isLoading && (
                <Box
                  height={{ _: "120px", lg: "30px" }}
                  mb={{ _: "2rem", lg: "1rem" }}
                >
                  <Skeleton width="100%" height="100%"></Skeleton>
                </Box>
              )}

              {listStaticPage && (
                <>
                  <FlexBox
                    justifyContent={{ _: "center", lg: "flex-end" }}
                    flexDirection={{ _: "column", lg: "row" }}
                    fontSize="1rem"
                    fontWeight="bold"
                    textAlign="center"
                    flexWrap="wrap"
                  >
                    {listStaticPage
                      .filter((item) => item.public_status == 1)
                      .map((value) => {
                        return (
                          <NavLink
                            key={value.id}
                            color="gray.700"
                            mb="1rem"
                            ml={{ _: 0, lg: "3rem" }}
                            href={"/static-pages/" + value.label}
                          >
                            {value.title}
                          </NavLink>
                        );
                      })}

                    <NavLink
                      color="gray.700"
                      mb="1rem"
                      ml={{ _: 0, lg: "3rem" }}
                      href={ROUTES.CONTACT}
                    >
                      お問い合わせ
                    </NavLink>
                  </FlexBox>
                </>
              )}
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
