import { FlexBox, Image, Typography, Button, Box } from "components/atoms";
import { ModalComponent } from "components/molecules";
import { Grid, Product } from "components/organisms";
import { push } from "connected-react-router";
import { LotteryAggregate } from "models";
import { useAppDispatch } from "redux/app/hooks";
import { addThousandsSeparators, formatNormalDate } from "utils";

type LotteryPurchasedHistoryProps = {
  id: number;
  title: string;
  image: string;
  date: string;
  total: number;
  paymethod: string;
  lottery_aggregate: LotteryAggregate;
};

export const LotteryPurchasedHistory: React.FC<
  LotteryPurchasedHistoryProps
> = ({ id, title, image, date, total, paymethod, lottery_aggregate }) => {
  const dispatch = useAppDispatch();

  return (
    <FlexBox
      flexDirection={{ _: "column", md: "row" }}
      borderBottom="1px solid"
      borderColor="gray.500"
      pb="2rem"
    >
      <FlexBox
        mb={{ _: "2rem", md: "0" }}
        flexDirection="column"
        width={{ _: "100%", md: "70%" }}
      >
        <Typography
          fontSize="1rem"
          color="primary.blue"
          fontWeight={600}
          mb="1rem"
        >
          {title}
        </Typography>
        <FlexBox maxWidth="600px">
          <FlexBox width="30%">
            <Image
              width="100%"
              src={process.env.REACT_APP_MALL_IMAGE_PATH + image}
              alt="商品"
              objectFit="cover"
            />
          </FlexBox>
          <FlexBox
            fontSize="0.8rem"
            px="2rem"
            flexDirection="column"
            width="70%"
          >
            <FlexBox mb="0.5rem">
              <FlexBox width="40%">日付</FlexBox>
              <FlexBox width="60%">{formatNormalDate(date)}</FlexBox>
            </FlexBox>
            <FlexBox mb="0.5rem">
              <FlexBox width="40%">合計額</FlexBox>
              <FlexBox width="60%">¥{addThousandsSeparators(total)}</FlexBox>
            </FlexBox>
            <FlexBox>
              <FlexBox width="40%">お支払い方法</FlexBox>
              <FlexBox width="60%">
                {paymethod === "credit" ? "クレジットカード" : paymethod}
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox flexDirection="column" width={{ _: "100%", md: "30%" }}>
        <Button
          onClick={() => dispatch(push(`/user/purchased-history/${id}`))}
          color="primary"
          mb="0.5rem"
          size="small"
          variant="outlined"
        >
          領収書
        </Button>

        <ModalComponent
          minHeight="400px"
          maxWidth="800px"
          buttonElement={
            <Button
              color="primary"
              size="small"
              width="100%"
              variant="outlined"
            >
              朝鮮結果
            </Button>
          }
          content={
            <Box p="2rem" height="370px" overflow="auto">
              <Grid container spacing={6}>
                {lottery_aggregate?.count.map((item) => (
                  <Grid item lg={3} sm={6} xs={12} key={item.id}>
                    <Product
                      src={item.lottery_product?.image}
                      title={item.lottery_product?.name}
                      prize={item.selected_rank_label}
                      quanity={item.count}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
        ></ModalComponent>
      </FlexBox>
    </FlexBox>
  );
};
