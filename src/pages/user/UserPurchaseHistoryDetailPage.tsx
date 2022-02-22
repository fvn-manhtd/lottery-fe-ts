import { useListPurchaseHistoryQuery } from "api";
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
import { useParams } from "react-router-dom";
import { addThousandsSeparators, formatNormalDate } from "utils";
import UserPurchaseHistoryDetailSkeletonPage from "./UserPurchaseHistoryDetailSkeletonPage";

const UserPurchaseHistoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { purchaseHistoryData } = useListPurchaseHistoryQuery(undefined, {
    selectFromResult: ({ data }) => ({
      purchaseHistoryData: data?.orders?.find((item) => item.id === Number(id)),
    }),
  });

  if (purchaseHistoryData === undefined) {
    return <UserPurchaseHistoryDetailSkeletonPage />;
  }

  return (
    <>
      <Head title="領収書" />
      <DashBoardLayout>
        <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
          領収書
        </Typography>
        <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
          <Card p="0px" mb="30px" overflow="hidden">
            <TableRow bg="gray.200" p="12px" boxShadow="none" borderRadius={0}>
              <FlexBox className="pre" m="6px" alignItems="center">
                <Typography fontSize="14px" color="text.muted" mr="4px">
                  注文:
                </Typography>
                <Typography fontSize="14px">
                  {purchaseHistoryData?.id}
                </Typography>
              </FlexBox>
              <FlexBox
                justifyContent="flex-end"
                className="pre"
                m="6px"
                alignItems="center"
              >
                <Typography fontSize="14px" color="text.muted" mr="4px">
                  日付:
                </Typography>
                <Typography fontSize="14px">
                  {formatNormalDate(purchaseHistoryData?.order?.created_at)}
                </Typography>
              </FlexBox>
            </TableRow>

            <Box py="0.5rem">
              <FlexBox
                px="1rem"
                py="0.5rem"
                flexWrap="wrap"
                alignItems="center"
              >
                <FlexBox flex="2 2 260px" m="6px" alignItems="center">
                  <Image
                    width="240px"
                    src={
                      process.env.REACT_APP_MALL_IMAGE_PATH +
                      purchaseHistoryData?.order_ticket[0]?.lottery
                        ?.thumbnail_image
                    }
                    alt="商品"
                    objectFit="cover"
                  />
                  <Box ml="20px">
                    <H6 my="0px">
                      {purchaseHistoryData?.order_ticket[0]?.lottery_title}
                    </H6>
                  </Box>
                </FlexBox>
                <FlexBox flex="1 1 260px" m="6px" alignItems="center">
                  <Typography fontSize="14px" color="text.muted"></Typography>
                </FlexBox>
              </FlexBox>
            </Box>
          </Card>

          <Grid container spacing={6}>
            <Grid item lg={6} md={6} xs={12}>
              <Card p="20px 30px">
                <H5 mt="0px" mb="14px">
                  お届け先
                </H5>
                <Paragraph fontSize="14px" my="0px">
                  {purchaseHistoryData?.order?.recipient_first_name}
                  {"  " + purchaseHistoryData?.order?.recipient_last_name} 様
                  <br />〒
                  {purchaseHistoryData?.order?.recipient_post_code.replace(
                    /^(.{3})/,
                    "$1-"
                  )}
                  <br />
                  {purchaseHistoryData?.order?.recipient_address}
                  <br />
                  TEL {purchaseHistoryData?.order?.recipient_phone_number}
                </Paragraph>
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
                  <H6 my="0px">
                    {addThousandsSeparators(
                      purchaseHistoryData?.order.goods_subtotal
                    )}
                    円
                  </H6>
                </FlexBox>
                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    配送手数料:
                  </Typography>
                  <H6 my="0px">
                    {addThousandsSeparators(
                      purchaseHistoryData?.order.shipping_fee
                    )}
                    円
                  </H6>
                </FlexBox>

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    割引金額:
                  </Typography>
                  <H6 my="0px">
                    {purchaseHistoryData?.order.total_discount_price === 0
                      ? addThousandsSeparators(
                          purchaseHistoryData?.order.total_discount_price
                        )
                      : "-" +
                        addThousandsSeparators(
                          purchaseHistoryData?.order.total_discount_price
                        )}
                    円
                  </H6>
                </FlexBox>

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    合計
                  </Typography>
                  <H6 my="0px">
                    {addThousandsSeparators(
                      purchaseHistoryData?.order.total_price
                    )}
                    円
                  </H6>
                </FlexBox>

                <Divider mb="0.5rem" />

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="1rem"
                >
                  <H6 my="0px">支払い金額 </H6>
                  <H6 my="0px">
                    {addThousandsSeparators(
                      purchaseHistoryData?.order.total_price
                    )}
                    円
                  </H6>
                </FlexBox>
                <Typography fontSize="14px">
                  {purchaseHistoryData?.order.payment_method}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </DashBoardLayout>
    </>
  );
};

export default UserPurchaseHistoryDetailPage;
