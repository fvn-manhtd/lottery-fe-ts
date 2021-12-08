import styled from "styled-components";
import { Image, Typography } from "components/atoms";
import { theme } from "../../../../utils/theme";

type LotteryRankedProductProps = {
  src: string;
  rankTitle: string;
  rank:number;
};

const StyledBox=styled.div `
position:relative;
overflow:hidden;
border-radius:20px;
&::before{
    content: "";
    position: absolute;
    background:${props=>props.color};
    width: 55%;
    padding-top: 55%;
    top: -28%;
    left: -28%;
    transform: rotate(45deg);
}
`
const StyledText = styled(Typography) `
position:absolute;
top:6%;
left:5%;
transform: rotate(-45deg);
`

export const LotteryRankedProduct: React.FC<LotteryRankedProductProps> = ({
  src,
  rankTitle,
  rank,
}) => {

  return (
    <StyledBox color={theme.colors.gradient[`${rank*100}`]}>
      <StyledText 
        color="white" 
        fontWeight={600} 
        fontSize={{_:"1rem",md:"1.3rem"}}>
        {rankTitle}
      </StyledText>
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
