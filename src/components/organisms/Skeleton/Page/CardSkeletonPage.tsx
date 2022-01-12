import { Box, Divider, FlexBox, TableRow, Typography } from "components/atoms";
import { DashBoardLayout } from "components/templates";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkeletonPage: React.FC = () => {
  return (
    <DashBoardLayout>
      <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
        アカウント設定
      </Typography>
      <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <Typography fontWeight={600} fontSize="1.2rem">
            クレジットカードの追加
          </Typography>
          <Box></Box>
        </FlexBox>
        <Divider
          height="2px"
          mb="2rem"
          width="100%"
          backgroundColor="gray.500"
        ></Divider>

        <TableRow my="1rem" padding="6px 18px">
          <Box width="100%" height="40px">
            <Skeleton height="100%" />
          </Box>
        </TableRow>
      </Box>
    </DashBoardLayout>
  );
};
