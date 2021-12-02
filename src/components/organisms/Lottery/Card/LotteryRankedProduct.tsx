import styled from "styled-components";
import { Box, Image } from "components/atoms";
import { colors } from "utils/themeColors";
import { theme } from "../../../../utils/theme";

type LotteryRankedProductProps = {
  src?: string;
  index?: number;
  rank?: string;
};

const StyledBox = styled.div`
  position: relative;
  &::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    border-top: solid ${(props) => props.color};
    border-left: solid ${(props) => props.color};
    border-right: solid transparent;
    border-bottom: solid transparent;
    border-radius: 20px 0 0 0;
    border-width: 3rem;
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      border-width: 2.9rem;
    }
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      border-width: 2.5rem;
    }
  }
`;

export const LotteryRankedProduct: React.FC<LotteryRankedProductProps> = ({
  src,
  index,
  rank,
}) => {
  const colorArr: string[] = [
    colors.primary.pink,
    colors.primary.green,
    colors.primary.light,
    colors.primary.blue,
  ];

  return (
    <StyledBox color={colorArr[index]}>
      <Box
        display="block"
        transform="rotate(-49deg)"
        color="white"
        position="absolute"
        top="9%"
        left="7%"
        fontWeight={600}
        fontSize={["1rem", "1.2rem", "1.3rem"]}
      >
        {rank}
      </Box>
      <Image
        width="100%"
        height="auto"
        src={src}
        alt="商品画像"
        borderRadius={20}
      />
    </StyledBox>
  );
};
