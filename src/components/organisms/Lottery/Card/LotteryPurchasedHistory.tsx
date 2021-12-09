import { FlexBox, Image, Typography, Button, Box } from "components/atoms";
import { ModalComponent } from "components/molecules";
import { Grid, Product } from "components/organisms";
import { useHistory } from "react-router-dom";
import { fakeProductList } from "utils/fakeData";

type LotteryPurchasedHistoryProps = {
  title: string;
  image: string;
  date: string;
  total: number;
  paymethod: string;
};

export const LotteryPurchasedHistory: React.FC<LotteryPurchasedHistoryProps> =
  ({ title, image, date, total, paymethod }) => {
    const history = useHistory();

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
              <Image width="100%" src={image} alt="商品" objectFit="cover" />
            </FlexBox>
            <FlexBox
              fontSize="0.8rem"
              px="2rem"
              flexDirection="column"
              width="70%"
            >
              <FlexBox mb="0.5rem">
                <FlexBox width="40%">日付</FlexBox>
                <FlexBox width="60%">{date}</FlexBox>
              </FlexBox>
              <FlexBox mb="0.5rem">
                <FlexBox width="40%">合計額</FlexBox>
                <FlexBox width="60%">¥{total}</FlexBox>
              </FlexBox>
              <FlexBox>
                <FlexBox width="40%">お支払い方法</FlexBox>
                <FlexBox width="60%">{paymethod}</FlexBox>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection="column" width={{ _: "100%", md: "30%" }}>
          <Button
            onClick={() => history.push("/user/purchased-history/12321")}
            color="primary"
            mb="0.5rem"
            size="small"
            variant="outlined"
          >
            領収書
          </Button>
          {/* <Button
            onClick={() => history.push("/user/invoice")}
            color="primary"
            mb="0.5rem"
            size="small"
            variant="outlined"
          >
            請求書
          </Button> */}

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
                  {fakeProductList.map((item) => (
                    <Grid item lg={3} sm={6} xs={12} key={item.id}>
                      <Product
                        src={item.image}
                        title={item.title}
                        prize={item.prize}
                        quanity={item.quanity}
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
