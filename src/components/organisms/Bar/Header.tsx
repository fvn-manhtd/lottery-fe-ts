import React, { useState } from "react";
import {
  Box,
  FlexBox,
  Icon,
  IconPng,
  NavLink,
  Typography,
  Menu,
  Divider,
  Tiny,
  Button,
} from "components/atoms";
import { MobileMenu, MobileMenuContent } from "components/organisms";
import { Logo } from "./Logo";
import { useAppDispatch } from "redux/app/hooks";
import { authActions } from "redux/features";
import { Route as ROUTES } from "utils";
import { push } from "connected-react-router";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => setOpen(!open);

  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));

  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    await dispatch(authActions.logout());
  };

  const menuHandle = (
    <Box width="50px" display="flex" justifyContent="center">
      <Icon defaultcolor="currentColor" variant="medium">
        menu
      </Icon>
    </Box>
  );

  return (
    <header>
      <FlexBox
        bg="body.paper"
        alignItems="center"
        shadow={6}
        justifyContent="space-between"
        height={{ _: "60px", md: "80px" }}
        px={10}
        position="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex={991}
      >
        <Box width={{ _: "20%", lg: "30%" }}>
          <Box display={{ _: "block", lg: "none" }}>
            <MobileMenu
              handle={menuHandle}
              position="top"
              open={open}
              width={320}
              toggleMobileMenu={toggleMobileMenu}
            >
              <MobileMenuContent />
            </MobileMenu>
          </Box>
        </Box>
        <Box width={{ _: "60%", lg: "40%" }} maxWidth="260px">
          <Logo />
        </Box>
        <Box width={{ _: "20%", lg: "30%" }}>
          <Box
            fontSize="0.933rem"
            fontWeight="bold"
            alignItems="center"
            justifyContent="flex-end"
            display={{ _: "none", lg: "flex" }}
          >
            {isLoggedIn && (
              <>
                <Button
                  variant="text"
                  onClick={() => dispatch(push(ROUTES.SHOPPING_CART))}
                >
                  <FlexBox position="relative" alignItems="center">
                    <Box width="16px" color="primary.main">
                      <Icon defaultcolor="currentColor" variant="medium">
                        shopping-cart
                      </Icon>
                    </Box>

                    <FlexBox
                      borderRadius="100%"
                      bg="error.main"
                      px="5px"
                      py="3px"
                      alignItems="center"
                      justifyContent="center"
                      position="absolute"
                      top="-1.1rem"
                      left="-1.3rem"
                    >
                      <Tiny color="white" fontWeight="600">
                        99
                      </Tiny>
                    </FlexBox>

                    <Typography
                      color="gray.700"
                      fontSize="1rem"
                      fontWeight={600}
                      ml={10}
                    >
                      カート
                    </Typography>
                  </FlexBox>
                </Button>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Button
                  variant="text"
                  onClick={() => dispatch(push(ROUTES.USER_LOGIN))}
                >
                  <FlexBox alignItems="center">
                    <Box width="16px">
                      <IconPng>login</IconPng>
                    </Box>
                    <Typography
                      color="gray.700"
                      fontWeight={600}
                      fontSize="1rem"
                      ml={10}
                    >
                      ログイン
                    </Typography>
                  </FlexBox>
                </Button>
              </>
            )}

            <Menu
              ml={20}
              direction="right"
              handler={
                <Button variant="text" className="dropdown-handler">
                  <Box width="16px">
                    <IconPng>user</IconPng>
                  </Box>
                  <Typography
                    color="gray.700"
                    fontSize="1rem"
                    fontWeight={600}
                    ml={10}
                  >
                    マイページ
                  </Typography>
                  <Icon size="1rem">chevron-down</Icon>
                </Button>
              }
            >
              <FlexBox flexDirection="column">
                <NavLink
                  px="1rem"
                  py="0.5rem"
                  color="gray.700"
                  href={ROUTES.USER_MYAPGE}
                >
                  <FlexBox alignItems="center">
                    <Box width="16px">
                      <IconPng>user</IconPng>
                    </Box>
                    <Typography fontWeight={600} ml={10}>
                      マイページ
                    </Typography>
                  </FlexBox>
                </NavLink>

                <NavLink
                  px="1rem"
                  py="0.5rem"
                  color="gray.700"
                  href={ROUTES.USER_FAVORITE}
                >
                  <FlexBox alignItems="center">
                    <Box width="18px" color="primary.main">
                      <Icon defaultcolor="currentColor" variant="small">
                        heart
                      </Icon>
                    </Box>
                    <Typography ml={10}>お気に入り</Typography>
                  </FlexBox>
                </NavLink>

                <NavLink
                  px="1rem"
                  py="0.5rem"
                  color="gray.700"
                  href={ROUTES.STATIC_GUIDELINE}
                >
                  <FlexBox alignItems="center">
                    <Box width="16px">
                      <IconPng>book</IconPng>
                    </Box>
                    <Typography ml={10}>ご利用ガイド</Typography>
                  </FlexBox>
                </NavLink>

                {isLoggedIn && (
                  <>
                    <Divider height="1px" width="100%" mx="auto" />

                    <Button
                      px="1rem"
                      py="0.5rem"
                      color="primary"
                      variant="none"
                      onClick={handleLogout}
                    >
                      <FlexBox alignItems="center" justifyContent="flex-start">
                        <Box width="16px">
                          <IconPng>logout</IconPng>
                        </Box>
                        <Typography ml={10}>ログアウト</Typography>
                      </FlexBox>
                    </Button>
                  </>
                )}
              </FlexBox>
            </Menu>
          </Box>

          {/* Shopping Cart Icon on Mobile */}
          <Box
            alignItems="center"
            justifyContent="flex-end"
            display={{ _: "flex", lg: "none" }}
          >
            <Box
              color="gray.700"
              cursor="pointer"
              onClick={() => dispatch(push(ROUTES.SHOPPING_CART))}
            >
              <FlexBox
                position="relative"
                alignItems="center"
                flexDirection="column"
              >
                <Box
                  borderRadius="50%"
                  color="primary.main"
                  p="0.6rem"
                  borderColor="primary.main"
                  border="2px solid"
                >
                  <Icon defaultcolor="currentColor" variant="medium">
                    shopping-cart
                  </Icon>
                </Box>

                <FlexBox
                  borderRadius="100%"
                  bg="error.main"
                  px="5px"
                  py="5px"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  top="-0.5rem"
                  right="-8px"
                >
                  <Tiny color="white" fontWeight="600">
                    99
                  </Tiny>
                </FlexBox>
              </FlexBox>
            </Box>
          </Box>
        </Box>
      </FlexBox>
    </header>
  );
};
