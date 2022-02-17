import styled from "styled-components";
import { Box, Image, Typography } from "components/atoms";
import { Card } from "components/organisms";
import { lotteryStatusObj } from "utils/constants";
import { formatJapanDate } from "utils";

export type LotteryProps = {
  id: number;
  src: string;
  title: string;
  status?: number;
  period?: string;
  url?: string;
  shop_id?: number;
  lottery_category_id?: number;
};

const StyledBox = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background: ${(props) => props.color};
    width: 100px;
    height: 100px;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  @media screen and (min-width: 768px) {
    &::before {
      width: 150px;
      height: 150px;
    }
  }
`;
const StyledText = styled(Typography)`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-45deg);
`;

export const Lottery: React.FC<LotteryProps> = ({
  src,
  title,
  status,
  period,
  url,
}) => {
  return (
    <Card bg="white" shadow={9} hoverEffect={true}>
      <a href={"http://" + url} target="_blank">
        <StyledBox color={lotteryStatusObj[status - 1].color}>
          <StyledText
            color="white"
            fontWeight={600}
            textAlign="center"
            pt={["20px", "30px"]}
            fontSize={["0.6rem", "0.8rem", "0.875rem", "0.9375rem"]}
          >
            {lotteryStatusObj[status - 1].text}
          </StyledText>

          <Image
            width="100%"
            maxHeight={175}
            src={process.env.REACT_APP_MALL_IMAGE_PATH + src}
            alt="商品画像"
            objectFit="cover"
          />
        </StyledBox>
        <Box p={[2, 2, 2, 2]}>
          <Typography
            as="h1"
            px={[1, 2, 2, 2]}
            my={[1, 2, 2, 2]}
            fontSize={["0.9375rem", "0.9375rem", "1.1875rem"]}
          >
            {title}
          </Typography>
          <Box
            bg={status === 4 ? "gray.650" : "primary.light"}
            paddingX={[0, 0, 1, 1]}
            paddingY={[1, 1, 2, 2]}
            textAlign="center"
            justifyContent="center"
            borderRadius={[10, 10, 25, 25]}
            display="flex"
            flexWrap="wrap"
          >
            {status === 4 ? (
              <Typography
                as="p"
                lineHeight={0.5}
                color="white"
                fontWeight="500"
                fontSize={["0.75rem", "0.8125rem", "0.875rem"]}
                margin="0.4rem"
              >
                COMING SOON
              </Typography>
            ) : (
              <>
                <Typography
                  as="p"
                  lineHeight={0.5}
                  color="white"
                  fontWeight="500"
                  fontSize={["0.75rem", "0.8125rem", "0.875rem"]}
                  margin="0.4rem"
                >
                  販売終了
                </Typography>
                <Typography
                  as="p"
                  lineHeight={0.5}
                  color="white"
                  fontWeight="500"
                  fontSize={["0.75rem", "0.8125rem", "0.875rem"]}
                  margin="0.4rem"
                >
                  {formatJapanDate(period)}
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </a>
    </Card>
  );
};
