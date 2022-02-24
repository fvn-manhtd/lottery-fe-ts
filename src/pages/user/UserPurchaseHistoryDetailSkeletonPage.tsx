import {
  Box,
  Divider,
  FlexBox,
  H5,
  H6,
  Paragraph,
  TableRow,
  Typography,
  Image,
} from "components/atoms";
import { Card, Grid, Head } from "components/organisms";
import { DashBoardLayout } from "components/templates";
import React from "react";
import Skeleton from "react-loading-skeleton";

const UserPurchaseHistoryDetailSkeletonPage: React.FC = () => {
  return (
    <>
      <Head title="領収書" />
      <DashBoardLayout>
        <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
          領収書
        </Typography>
        <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
          <Card p="0px" mb="30px" overflow="hidden">
            <Box p="20px">
              <Skeleton width="100%" height="40px" />
              <Skeleton height="200px" />
            </Box>
          </Card>

          <Grid container spacing={6}>
            <Grid item lg={6} md={6} xs={12}>
              <Card p="20px 30px">
                <H5 mt="0px" mb="14px">
                  お届け先
                </H5>
                <Skeleton height="120px" />
              </Card>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Card p="20px 30px">
                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    小計
                  </Typography>
                  <Skeleton width="120px" height="20px" />
                </FlexBox>
                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    配送手数料:
                  </Typography>
                  <Skeleton width="120px" height="20px" />
                </FlexBox>

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    割引金額:
                  </Typography>
                  <Skeleton width="120px" height="20px" />
                </FlexBox>

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    合計
                  </Typography>
                  <Skeleton width="120px" height="20px" />
                </FlexBox>

                <Divider mb="0.5rem" />

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="1rem"
                >
                  <H6 my="0px">支払い金額 </H6>
                  <Skeleton width="120px" height="20px" />
                </FlexBox>
                <Typography fontSize="14px">
                  <Skeleton width="100%" height="20px" />
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </DashBoardLayout>
    </>
  );
};

export default UserPurchaseHistoryDetailSkeletonPage;
