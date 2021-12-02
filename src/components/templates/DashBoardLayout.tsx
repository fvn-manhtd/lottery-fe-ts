import React from "react";
import { Sticky, Box } from "components/atoms";
import { HeaderDashboard, MyPageMenu } from "components/organisms";
import ProtectedRoute from "router/ProtectedRoute";

const DashBoardLayout: React.FC = ({ children }) => (
  <>
    <Sticky fixedOn={0}>
      <HeaderDashboard />
    </Sticky>
    <Box bg="gray.400">
      <MyPageMenu></MyPageMenu>

      <Box ml={{ _: "0", md: "100px" }} p={20}>
        {children}
      </Box>
    </Box>
  </>
);

export default ProtectedRoute(DashBoardLayout);
