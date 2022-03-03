import { useListPurchaseHistoryQuery } from "api";
import { Box, Divider, FlexBox, Typography } from "components/atoms";
import {
  Grid,
  Head,
  LotteryPurchasedHistory,
  LotteryPurchasedHistorySkeleton,
} from "components/organisms";
import { DashBoardLayout } from "components/templates";
import React from "react";

const UserPurchaseHistoryPage: React.FC = () => {
  const { data: purchaseHistoryData, isLoading } =
    useListPurchaseHistoryQuery();

  return (
    <>
      <Head title="購入履歴" />

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

          {(isLoading || purchaseHistoryData == undefined) && (
            <Box mb="2rem">
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <LotteryPurchasedHistorySkeleton />
                </Grid>
              </Grid>
            </Box>
          )}

          {(!isLoading || purchaseHistoryData !== undefined) && (
            <Box mb="2rem">
              <Grid container spacing={6}>
                {purchaseHistoryData.orders?.map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <LotteryPurchasedHistory
                      id={item.id}
                      title={item.order_ticket[0]?.lottery_title}
                      image={item.order_ticket[0]?.lottery?.thumbnail_image}
                      date={item.order.created_at}
                      total={item.order_ticket[0]?.total_price}
                      paymethod={item.order?.payment_method}
                      lottery_aggregate={
                        item.order_ticket[0]?.lottery_aggregate
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </DashBoardLayout>
    </>
  );
};

export default UserPurchaseHistoryPage;
