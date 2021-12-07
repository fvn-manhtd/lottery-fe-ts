import {
  Box,
  Button,
  FlexBox,
  Icon,
  Image,
  Typography,
} from "components/atoms";
import styled from "styled-components";
import { lotteryStatusObj, getTheme } from "utils";
import { LotteryProps } from "./Lottery";

const StyledButton = styled(Button)`
  &:hover {
    color: ${getTheme("colors.gray.white")};
    background-color: ${getTheme("colors.primary.main")};
    border-color: ${getTheme("colors.primary.main")};
  }
`;
const StyledText = styled(Box)`
  display: inline-block;
  padding: 0.4rem 1rem;
`;

export const LotteryFavorite: React.FC<LotteryProps> = ({
  src,
  title,
  status,
}) => {
  return (
    <Box bg="white" borderRadius="10px" shadow={4}>
      <Image
        width="100%"
        maxHeight={175}
        src={src}
        alt="商品画像"
        objectFit="cover"
      />

      <Box padding={[1, 1, 2, 2]}>
        <Box>
          {status <= 2 ? (
            <StyledText
              width="auto"
              color="white"
              fontWeight={600}
              background={lotteryStatusObj[status - 1].color}
              fontSize={["0.6rem", "0.8rem", "0.875rem", "0.9375rem"]}
            >
              {lotteryStatusObj[status - 1].text}
            </StyledText>
          ) : (
            <StyledText
              color="white"
              fontWeight={600}
              background={lotteryStatusObj[status - 1].color}
              fontSize={["0.5rem", "0.8rem", "0.8rem", "0.85rem"]}
            >
              {lotteryStatusObj[status - 1].text}
            </StyledText>
          )}
        </Box>
        <Typography as="h1" fontSize={["0.9375rem", "0.9375rem", "1rem"]}>
          {title}
        </Typography>
        <StyledButton
          fullwidth
          borderRadius="5rem"
          size="small"
          border="1px solid"
          borderColor="gray.600"
          variant="outlined"
          type="button"
        >
          <FlexBox>
            <Icon size="1rem" px="0.5rem">
              close
            </Icon>
            <Typography>お気に入りから削除</Typography>
          </FlexBox>
        </StyledButton>
      </Box>
    </Box>
  );
};
