import React from "react";
import { Box, FlexBox, NavLink, Paragraph, Typography } from "components/atoms";
import { HeaderCart } from "components/organisms";
import { Route as ROUTES } from "utils";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import { useGetStaticPagesQuery } from "api";
import Skeleton from "react-loading-skeleton";

type CartLayoutProps = {
  children: ReactNode;
  pageTitle?: string;
};

export const CartLayout: React.FC<CartLayoutProps> = ({
  children,
  pageTitle,
}) => {
  const { data: listStaticPage, isLoading } = useGetStaticPagesQuery({});
  return (
    <>
      <HeaderCart />

      <Typography as="h2" textAlign="center" my="3rem">
        {pageTitle ? pageTitle : "カート"}
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
      </FlexBox>

      <Paragraph py="1rem" textAlign="center" fontSize="0.8rem">
        &copy;Online Gacha
      </Paragraph>
    </>
  );
};
