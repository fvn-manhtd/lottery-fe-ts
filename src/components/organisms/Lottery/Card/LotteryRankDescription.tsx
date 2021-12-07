import { Box, Paragraph, SemiSpan, Typography } from "components/atoms";
import { LotteryProduct } from "components/organisms";
import { theme } from "../../../../utils/theme";

type LotteryRankDescriptionProps = {
  rankTitle: string; //ex)A賞
  rank:number; //賞の順番
  title: string; //賞の名前
  probability: number; //当選確率
  description: string; //賞の説明
  products: any; //景品配列
};

export const LotteryRankDescription: React.FC<LotteryRankDescriptionProps> = ({
  rankTitle,
  rank,
  title,
  probability,
  description,
  products,
}) => {
  return (
    <Box 
      bg="white" 
      pb={{_:"0.25rem",md:"0.75rem"}}
      >
      <Box display="flex" width="100%" alignItems="center" textAlign="center" flexWrap={{_:"wrap",md:"unset"}}>
        {/* rank title  */}
        <Box
          background={theme.colors.gradient[`${rank*100}`]}
          width="15%"
          height={{_:"4rem",md:"5.25rem"}}
          display="table"
        >
          <Box display="table-cell" verticalAlign="middle">
            <Typography
              as="h1"
              fontSize={{_:"1rem",md:"1.5rem"}}
              color="white"
            >
              {rankTitle}
            </Typography>
          </Box>
        </Box>
        {/* product title and number of products */}
        <Box
          bg="gray.800"
          display="flex"
          color="white"
          width={{_:"85%",md:"80%"}}
          alignItems="center"
          justifyContent="space-between"
          height={{_:"4rem",md:"5.25rem"}}
          padding={{_:"0.625rem",md:"1.25rem"}}
        >
          <Typography
            as="h2"
            fontSize={{_:"1rem",md:"1.5rem"}}
            ellipsis={true}
          >
            {title}
          </Typography>
          <Typography
            as="h2"
            fontSize={["1rem", "1rem", "1.35rem", "1.5rem"]}
            minWidth={{_:"3.44rem",md:"4.06rem"}}
          >
            {"全"+products.length+"種"}
          </Typography>
        </Box>
        {/* probability */}
        <Box
          width={{_:"100%",md:"10%"}}
          bg="gray.500"
          height={{_:"unset",md:"5.25rem"}}
          display="table"
          minWidth={57}
        >
          <Box 
            display={{_:"flex",md:"table-cell"}} 
            padding={2}
            paddingY={{_:1,md:0}}
            verticalAlign="middle"
            justifyContent="center">
            <SemiSpan 
              color="black"
              fontWeight="bold">
              当選確率
            </SemiSpan>
            <SemiSpan 
              color="black"
              fontWeight="bold">
              {probability + "/100"}
            </SemiSpan>
          </Box>
        </Box>
      </Box>
      <Paragraph
        fontSize="1rem"
        padding={3}
      >
        {description}
      </Paragraph>
      <Box
        display="flex"
        flexWrap="wrap"
        marginX={{_:"0.5rem",md:"0.75rem"}}
      >
        {products.map((value, index) => {
          return (
            <Box
              key={index}
              width="20%"
              marginX={"0.5rem"}
              marginBottom={"1rem"}
              minWidth={{_:"10rem",md:"12rem"}}
            >
              <LotteryProduct src={value.src} title={value.title} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
