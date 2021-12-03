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
import useWindowSize from "../../../hooks/useWindowSize";
import { Logo } from "./Logo";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { authActions, selectIsLoggedIn } from "redux/features";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const width = useWindowSize();
  const isTablet = width < 1000;
  const toggleMobileMenu = () => setOpen(!open);

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
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
        height="80px"
        px={10}
      >
        <Box width={{ _: "20%", lg: "30%" }}>
          <MobileMenu
            handle={menuHandle}
            position="left"
            open={open}
            width={320}
            toggleMobileMenu={toggleMobileMenu}
          >
            <MobileMenuContent />
          </MobileMenu>
        </Box>
        <Box width={{ _: "60%", lg: "40%" }} maxWidth="260px">
          <Logo />
        </Box>
        <FlexBox
          width={{ _: "20%", lg: "30%" }}
          fontSize="0.933rem"
          fontWeight="bold"
          alignItems="center"
          justifyContent="flex-end"
        >
          {!isTablet && (
            <>
              {isLoggedIn && (
                <>
                  <NavLink ml={40} color="gray.700" href="/cart/shopping-cart">
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

                      <Typography ml={10}>カート</Typography>
                    </FlexBox>
                  </NavLink>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <NavLink color="gray.700" href="/user/login">
                    <FlexBox alignItems="center">
                      <Box width="16px">
                        <IconPng>login</IconPng>
                      </Box>
                      <Typography ml={10}>ログイン</Typography>
                    </FlexBox>
                  </NavLink>
                </>
              )}

              <Menu
                ml={20}
                direction="right"
                handler={
                  <Button variant="none" className="dropdown-handler">
                    <Box width="16px">
                      <IconPng>user</IconPng>
                    </Box>
                    <Typography ml={10}>マイページ</Typography>
                    <Icon size="1rem">chevron-down</Icon>
                  </Button>
                }
              >
                <FlexBox flexDirection="column">
                  <NavLink
                    px="1rem"
                    py="0.5rem"
                    color="gray.700"
                    href="/user/mypage"
                  >
                    <FlexBox alignItems="center">
                      <Box width="16px">
                        <IconPng>user</IconPng>
                      </Box>
                      <Typography ml={10}>マイページ</Typography>
                    </FlexBox>
                  </NavLink>

                  <NavLink
                    px="1rem"
                    py="0.5rem"
                    color="gray.700"
                    href="/user/favorite"
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
                    href="/static-pages/guideline"
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
                      <Divider width="100%" mx="auto" />

                      <Button
                        px="1rem"
                        py="0.5rem"
                        color="primary"
                        variant="none"
                        onClick={handleLogout}
                      >
                        <FlexBox
                          alignItems="center"
                          justifyContent="flex-start"
                        >
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
            </>
          )}

          {isTablet && (
            <>
              <NavLink ml={40} color="gray.700" href="/cart/shopping-cart">
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
              </NavLink>
            </>
          )}
        </FlexBox>
      </FlexBox>
    </header>
  );
};
