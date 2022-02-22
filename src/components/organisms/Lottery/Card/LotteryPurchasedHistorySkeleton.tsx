import { FlexBox, Box } from "components/atoms";
import Skeleton from "react-loading-skeleton";

export const LotteryPurchasedHistorySkeleton: React.FC = () => {
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
        <Box mb="10px">
          <Skeleton width="90%" height="30px" />
        </Box>
        <FlexBox maxWidth="600px">
          <FlexBox width="30%">
            <Skeleton width="120px" height="120px" />
          </FlexBox>
          <FlexBox
            fontSize="0.8rem"
            px="2rem"
            flexDirection="column"
            width="70%"
          >
            <FlexBox mb="0.5rem">
              <FlexBox width="40%">日付</FlexBox>
              <FlexBox width="60%">
                <Skeleton width="100px" height="20px" />
              </FlexBox>
            </FlexBox>
            <FlexBox mb="0.5rem">
              <FlexBox width="40%">合計額</FlexBox>
              <FlexBox width="60%">
                <Skeleton width="100px" height="20px" />
              </FlexBox>
            </FlexBox>
            <FlexBox>
              <FlexBox width="40%">お支払い方法</FlexBox>
              <FlexBox width="60%">
                <Skeleton width="100px" height="20px" />
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox flexDirection="column" width={{ _: "100%", md: "30%" }}>
        <Box mb="10px">
          <Skeleton height="40px" />
        </Box>
        <Box mb="10px">
          <Skeleton height="40px" />
        </Box>
      </FlexBox>
    </FlexBox>
  );
};
