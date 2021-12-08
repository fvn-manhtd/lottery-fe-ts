import { Box, Divider, FlexBox, Typography } from "components/atoms";
import { DashBoardLayout } from "components/templates";
import React from "react";

const UserReceiptPage: React.FC = () => {
  return (
    <DashBoardLayout>
      <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
        領収書
      </Typography>
      <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <Typography fontWeight={600} fontSize="1.2rem">
            カートへの領収書 - 2021年8月16日
          </Typography>
          <Box></Box>
        </FlexBox>
        <Divider
          height="2px"
          mb="2rem"
          width="100%"
          backgroundColor="gray.500"
        ></Divider>

        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <Typography fontSize="1rem">
            CONNECT INC <br />
            〒550-0001 大阪府大阪市西区土佐堀1丁目2番24号
            <br />
            カスタリアタワー1909
          </Typography>
          <Box>
            日付： 2021年8月16日 <br />
            注文#: AD-676D616C596E6D666D613241
          </Box>
        </FlexBox>
        <Divider
          height="1px"
          my="2rem"
          width="100%"
          backgroundColor="gray.500"
        ></Divider>

        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <Typography fontSize="1rem">請求先: Tran Duc Manh</Typography>
          <Box></Box>
        </FlexBox>
        <Divider
          height="1px"
          my="2rem"
          width="100%"
          backgroundColor="gray.500"
        ></Divider>
      </Box>
    </DashBoardLayout>
  );
};

export default UserReceiptPage;
