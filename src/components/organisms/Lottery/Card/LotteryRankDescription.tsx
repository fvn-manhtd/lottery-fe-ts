import { Box, Typography } from "components/atoms";
import { LotteryProduct } from "components/organisms";
import { theme } from "../../../../utils/theme";

type LotteryRankDescriptionProps = {
  rank: string; //ex)A賞
  title: string; //賞の名前
  probability: number; //当選確率
  description: string; //賞の説明
  products: any; //景品配列
};

export const LotteryRankDescription: React.FC<LotteryRankDescriptionProps> = ({
  rank,
  title,
  probability,
  description,
  products,
}) => {
  return (
    <Box bg="white" paddingBottom={["0.25rem", "0.25rem", "0.5rem", "0.75rem"]}>
      <Box display="flex" width="100%" alignItems="center" textAlign="center">
        <Box
          background={theme.colors.gradient[100]}
          width="10%"
          height={["4rem", "4rem", "4.625rem", "5.25rem"]}
          display="table"
          minWidth="3.6rem"
        >
          <Box display="table-cell" verticalAlign="middle">
            <Typography
              as="h1"
              fontSize={["1rem", "1rem", "1.35rem", "1.5rem"]}
              color="white"
            >
              {rank}
            </Typography>
          </Box>
        </Box>
        <Box
          bg="gray.800"
          display="flex"
          color="white"
          width="80%"
          alignItems="center"
          justifyContent="space-between"
          height={["4rem", "4rem", "4.625rem", "5.25rem"]}
          padding={["0.625rem", "0.625rem", "1.25rem", "1.25rem"]}
        >
          <Typography
            as="h2"
            fontSize={["1rem", "1rem", "1.35rem", "1.5rem"]}
            ellipsis={true}
          >
            {title}
          </Typography>
          <Typography
            as="h2"
            fontSize={["1rem", "1rem", "1.35rem", "1.5rem"]}
            minWidth={["3.44rem", "3.44rem", "4.06rem", "4.06rem"]}
          >
            全5種
          </Typography>
        </Box>
        <Box
          width="10%"
          textAlign="center"
          bg="gray.500"
          height={["4rem", "4rem", "4.625rem", "5.25rem"]}
          display="table"
          minWidth={57}
        >
          <Box display="table-cell" verticalAlign="middle">
            <Typography
              as="h3"
              lineHeight={1}
              fontSize={["0.6875rem", "0.7rem", "0.9rem", "0.9rem"]}
              margin="0 0 0.3125rem 0"
            >
              当選確率
            </Typography>
            <Typography
              as="h3"
              lineHeight={1}
              fontSize={["0.6875rem", "0.7rem", "0.9rem", "0.9rem"]}
              margin={0}
            >
              {probability + "/100"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        as="p"
        fontSize={["0.93rem", "0.93rem", "1rem", "1rem"]}
        paddingX={["0.93rem", "0.93rem", "1.875rem", "2.5rem"]}
        paddingY={["0.3rem", "0.625rem", "0.8rem", "0.94rem"]}
      >
        {description}
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        marginX={["0.5rem", "0.5rem", "0.75rem", "0.75rem"]}
      >
        {products.map((value, index) => {
          return (
            <Box
              key={index}
              width="20%"
              marginX={"0.5rem"}
              marginBottom={"1rem"}
              minWidth={["10rem", "10rem", "11.875rem", "11.875rem"]}
            >
              <LotteryProduct src={value.src} title={value.title} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
