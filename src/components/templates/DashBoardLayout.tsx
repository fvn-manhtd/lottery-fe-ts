import React from "react";
import { Sticky, Box } from "components/atoms";
import { HeaderDashboard } from "components/organisms";

export const DashBoardLayout: React.FC = ({ children }) => (
  <>
    <Sticky fixedOn={0}>
      <HeaderDashboard />
    </Sticky>

    <Box className="section-after-sticky" bg="gray.400">
      <Box ml={{ _: "0", md: "100px" }} p={20}>
        {children}
      </Box>
    </Box>
  </>
);
