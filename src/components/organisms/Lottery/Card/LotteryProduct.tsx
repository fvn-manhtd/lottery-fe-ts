import { Box, Paragraph, Image } from "components/atoms";
import { Card } from "components/organisms";

type LotteryProductProps = {
  src: string;
  title: string;
};

export const LotteryProduct: React.FC<LotteryProductProps> = ({
  src,
  title,
}) => {
  return (
    <Box>
      <Card hoverEffect={true} borderRadius={20}>
        <Image width="100%" src={src} borderRadius={20} alt="商品画像" /></Card>
      <Paragraph
        color="text.primary"
        fontWeight="regular"
        lineHeight={["1.2rem", "1.4rem", "1.6rem"]}
        fontSize={["0.875rem", "0.9375rem", "1rem"]}
        marginTop={2}
      >
        {title}
      </Paragraph>
    </Box>
  );
};
