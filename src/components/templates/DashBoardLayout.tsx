import React from "react";
import { Sticky, Box } from "components/atoms";
import { HeaderDashboard } from "components/organisms";
import { useAppSelector } from "redux/app/hooks";
import { selectIsLogging } from "redux/features";
import { LoadingBox } from "components/molecules";

export const DashBoardLayout: React.FC = ({ children }) => {
  const isLogging = useAppSelector(selectIsLogging);

  return (
    <>
      <Sticky fixedOn={0}>
        <HeaderDashboard />
      </Sticky>

      <Box className="section-after-sticky" bg="gray.400">
        <Box ml={{ _: "0", md: "100px" }} p={20}>
          {children}
        </Box>
      </Box>

      {isLogging && <LoadingBox />}
    </>
  );
};
