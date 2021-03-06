import { Box, Image, Typography } from "components/atoms";

export type ProductProps = {
  src: string;
  prize: string;
  title: string;
  quanity?: number;
};

export const Product: React.FC<ProductProps> = ({
  src,
  prize,
  title,
  quanity,
}) => {
  return (
    <Box bg="white" fontSize="0.8rem">
      <Box
        borderRadius="5px"
        mb="0.5rem"
        border="1px solid"
        borderColor="gray.500"
        bg="gray.500"
      >
        <Image
          borderRadius="5px"
          width="100%"
          maxHeight={175}
          src={src}
          alt={title}
          objectFit="cover"
        />
      </Box>
      <Typography fontWeight={600} mb="0.5rem">
        {prize}賞
      </Typography>
      <Typography mb="0.5rem">{title}</Typography>
      <Typography>数量: {quanity}</Typography>
    </Box>
  );
};
