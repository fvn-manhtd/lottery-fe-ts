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
import { formatNormalDate } from "utils";

const UserPurchaseHistoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

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
                <Typography fontSize="14px">9001997718074513</Typography>
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
                  {formatNormalDate(new Date())}
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
                    src="https://www.bs11.jp/anime/img/selection_project_main.jpg"
                    alt="商品"
                    objectFit="cover"
                  />
                  <Box ml="20px">
                    <H6 my="0px">ブルーロック　スクラッチ　10回くじ</H6>
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
                  Tran Manh 様 <br />
                  〒661-0953 <br />
                  兵庫県尼崎市東園田町Testes <br />
                  TEL 070-4374-1108
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
                    内訳
                  </Typography>
                  <H6 my="0px">10回くじ(4,500円)ｘ1</H6>
                </FlexBox>
                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    小計
                  </Typography>
                  <H6 my="0px">4500円</H6>
                </FlexBox>
                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    配送手数料:
                  </Typography>
                  <H6 my="0px">500円</H6>
                </FlexBox>

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    内消費税
                  </Typography>
                  <H6 my="0px">454円</H6>
                </FlexBox>

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    割引金額:
                  </Typography>
                  <H6 my="0px">-100円</H6>
                </FlexBox>

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="0.5rem"
                >
                  <Typography fontSize="14px" color="text.hint">
                    合計
                  </Typography>
                  <H6 my="0px">4,900円</H6>
                </FlexBox>

                <Divider mb="0.5rem" />

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb="1rem"
                >
                  <H6 my="0px">支払い金額 </H6>
                  <H6 my="0px">4,900円</H6>
                </FlexBox>
                <Typography fontSize="14px">クレジットカード</Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </DashBoardLayout>
    </>
  );
};

export default UserPurchaseHistoryDetailPage;
