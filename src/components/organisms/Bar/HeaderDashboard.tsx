import React from "react";
import { Box, FlexBox, Icon, Typography } from "components/atoms";
import { Logo } from "./Logo";
import { useHistory } from "react-router-dom";
import { MyPageMenu } from "./MyPageMenu";

export const HeaderDashboard: React.FC = () => {
  let history = useHistory();

  const handleBackClick = async () => {
    history.goBack();
  };

  return (
    <header>
      <Box width="100%" shadow={6} bg="body.paper" zIndex="1000">
        <FlexBox
          alignItems="center"
          justifyContent="space-between"
          height={{ _: "60px", md: "80px" }}
          px={10}
          position="relative"
          maxWidth="97%"
          mx="auto"
        >
          <Box width={{ _: "20%", lg: "30%" }}>
            <Box
              width="50px"
              display="flex"
              justifyContent="center"
              onClick={handleBackClick}
            >
              <Icon defaultcolor="currentColor" variant="medium">
                arrow-left
              </Icon>
            </Box>
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
            <Typography display={{ _: "none", md: "block" }}>
              マン さん
            </Typography>
          </FlexBox>
        </FlexBox>
      </Box>

      <MyPageMenu></MyPageMenu>
    </header>
  );
};
