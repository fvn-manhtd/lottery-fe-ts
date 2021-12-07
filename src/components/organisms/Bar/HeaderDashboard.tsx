import React from "react";
import { Box, FlexBox, Icon, Typography } from "components/atoms";
import { Logo } from "./Logo";
import { useHistory } from "react-router-dom";

export const HeaderDashboard: React.FC = () => {
  let history = useHistory();

  const handleBackClick = async () => {
    history.push("/");
  };

  return (
    <header>
      <FlexBox
        bg="body.paper"
        alignItems="center"
        shadow={6}
        justifyContent="space-between"
        height="80px"
        px={10}
        zIndex="1000"
        position="relative"
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
          <Typography mr="10%">マン さん</Typography>
        </FlexBox>
      </FlexBox>
    </header>
  );
};
