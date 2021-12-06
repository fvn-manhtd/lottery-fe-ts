import styled from "styled-components";
import { Box, Image, Typography } from "components/atoms";
import { lotteryStatusObj } from 'utils/constants';

type LotteryProps = {
    src: string;
    title: string;
    status?: number;
    period: string;
};

const StyledBox=styled.div `
position:relative;
overflow:hidden;
&::before{
    content: "";
    position: absolute;
    background:${props=>props.color};
    width: 40%;
    top: -38%;
    left: -20%;
    transform: rotate(45deg);
    padding-top: 40%;
}
`
const StyledText = styled(Typography) `
position:absolute;
top:0;
left:0;
transform: rotate(-45deg);
`

export const Lottery: React.FC<LotteryProps> = ({ src, title, status, period }) => {
    
    return (
        <Box bg="white" shadow={9}>
            <StyledBox color={lotteryStatusObj[status-1].color}>
                {
                    status<=2?
                    <StyledText 
                      color="white" 
                      fontWeight={600} 
                      pt={["4%","7%","7%","8%"]} 
                      fontSize={["0.6rem","0.8rem","0.875rem","0.9375rem"]}>
                      {lotteryStatusObj[status-1].text}
                    </StyledText>:
                    <StyledText 
                      color="white" 
                      fontWeight={600} 
                      pt={["6%","7%","7%","8%"]} 
                      ml={["-4%","-3%","-2%","-2%"]} 
                      fontSize={["0.5rem","0.8rem","0.8rem","0.85rem"]}>
                      {lotteryStatusObj[status-1].text}
                    </StyledText>
                }
                <Image 
                  width="100%" 
                  maxHeight={175} 
                  src={src} 
                  alt="商品画像" 
                  objectFit="cover"/>
            </StyledBox>
            <Box padding={[1,1,2,2]}>
                <Typography 
                  as="h1" 
                  fontSize={["0.9375rem","0.9375rem", "1.1875rem"]}>
                  {title}
                </Typography>
                <Box 
                  bg={status===4?"gray.650":"primary.light"} 
                  paddingX={[0,0,1,1]} 
                  paddingY={[1,1,2,2]} 
                  textAlign="center" 
                  justifyContent="center" 
                  borderRadius={[10,10,25,25]} 
                  display="flex" 
                  flexWrap="wrap">
                    {
                        status===4?
                        <Typography 
                          as="p" 
                          lineHeight={0.5} 
                          color="white" 
                          fontWeight="500" 
                          fontFamily="Noto Sans CJK JP" 
                          fontSize={["0.5rem","0.75rem","0.8125rem", "0.875rem"]} 
                          margin="0.4rem">
                        COMING SOON
                        </Typography>:
                        <>
                        <Typography 
                          as="p" 
                          lineHeight={0.5} 
                          color="white" 
                          fontWeight="500" 
                          fontFamily="Noto Sans CJK JP" 
                          fontSize={["0.5rem","0.75rem","0.8125rem", "0.875rem"]} 
                          margin="0.4rem">
                        販売終了
                        </Typography>
                        <Typography 
                          as="p" 
                          lineHeight={0.5} 
                          color="white" 
                          fontWeight="500" 
                          fontFamily="Noto Sans CJK JP" 
                          fontSize={["0.5rem","0.75rem","0.8125rem", "0.875rem"]} 
                          margin="0.4rem">
                            {period}
                        </Typography>
                        </>
                    }
                </Box>
            </Box>
        </Box>
    )
}
