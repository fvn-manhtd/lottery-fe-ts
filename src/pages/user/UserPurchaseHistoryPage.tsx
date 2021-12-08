import { Box, Divider, FlexBox, Typography } from "components/atoms";
import { LotteryPurchasedHistory, Grid } from "components/organisms";
import { DashBoardLayout } from "components/templates";
import React from "react";
import { fakeLotteryPurchasedHistoryList } from "utils/fakeData";

const UserPurchaseHistoryPage: React.FC = () => {
  return (
    <DashBoardLayout>
      <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
        購入履歴
      </Typography>
      <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <Typography fontWeight={600} fontSize="1.2rem">
            購入履歴一覧
          </Typography>
          <Box></Box>
        </FlexBox>
        <Divider
          height="2px"
          mb="2rem"
          width="100%"
          backgroundColor="gray.500"
        ></Divider>

        <Box mb="2rem">
          <Grid container spacing={6}>
            {fakeLotteryPurchasedHistoryList.map((item) => (
              <Grid item xs={12} key={item.id}>
                <LotteryPurchasedHistory
                  title={item.title}
                  image={item.image}
                  date={item.date}
                  total={12000}
                  paymethod={item.paymethod}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </DashBoardLayout>
  );
};

export default UserPurchaseHistoryPage;
