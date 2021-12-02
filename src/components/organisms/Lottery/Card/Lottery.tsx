import styled from "styled-components";
import { Box, Image, Typography } from "components/atoms";
import { theme } from "../../../../utils/theme";

type LotteryProps = {
  src: string;
  title: string;
  status: number;
  period: string;
};

const StyledBox = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: -27%;
    left: -64%;
    width: 421px;
    height: 120px;
    background: ${(props) => props.color};
    transform: rotate(-45deg);
    @media only screen and (max-width: 1087px) {
      width: 400px;
    }
    @media only screen and (max-width: ${theme.breakpoints.lg}) {
      width: 365px;
    }
    @media only screen and (max-width: 900px) {
      width: 322px;
    }
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      width: 300px;
    }
  }
`;

export const Lottery: React.FC<LotteryProps> = ({
  src,
  title,
  status,
  period,
}) => {
  const position: { [key: string]: object } = {
    shortText: { top: "9%", left: "2%" },
    longText: { top: "10%", left: "0%" },
  };

  const statusObj: Array<{ [key: string]: any }> = [
    {
      text: "New!",
      color: "linear-gradient(to top left, #FA6268, #ED378E)",
      textPosition: position.shortText,
    },
    {
      text: "販売中",
      color: "linear-gradient(to top left, #F4C521, #E95106)",
      textPosition: position.shortText,
    },
    {
      text: "終了間際",
      color: "linear-gradient(to top left, #6CD625, #06DC74)",
      textPosition: position.longText,
    },
    {
      text: "販売予定",
      color: "linear-gradient(to top left, #84B5D3, #725DDF)",
      textPosition: position.longText,
    },
  ];

  return (
    <Box bg="white">
      <StyledBox color={statusObj[status - 1].color}>
        <Box
          display="block"
          transform="rotate(-49deg)"
          color="white"
          position="absolute"
          top={statusObj[status - 1].textPosition.top}
          left={statusObj[status - 1].textPosition.left}
          fontWeight={600}
          fontSize={["0.8125rem", "0.875rem", "0.9375rem"]}
        >
          {statusObj[status - 1].text}
        </Box>
        <Image
          width="100%"
          maxHeight={220}
          src={src}
          alt="商品画像"
          objectFit="cover"
        />
      </StyledBox>
      <Box padding={2}>
        <Typography as="h1" fontSize={["0.9375rem", "0.9375rem", "1.1875rem"]}>
          {title}
        </Typography>
        <Box
          bg={status === 4 ? "gray.650" : "primary.light"}
          paddingX={1}
          paddingY={2}
          textAlign="center"
          borderRadius={25}
        >
          <Typography
            as="span"
            color="white"
            fontWeight="500"
            fontFamily="Noto Sans CJK JP"
            fontSize={["0.75rem", "0.8125rem", "0.875rem"]}
          >
            {period}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
