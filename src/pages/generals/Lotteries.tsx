import styled from "styled-components";
import { Box, Container, Typography } from "components/atoms";
import { Lottery } from "components/organisms";
import { BaseLayout } from "components/templates";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Lottery as LotteryModel } from "models/lottery";
import { lotteryStatusObj } from "utils/constants";

const StyledText = styled(Typography) `
position:absolute;
top:0;
left:0;
transform: rotate(-45deg);
`
const StyledBox = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill, 33%);
justify-content: center;
@media screen and (max-width: 768px){
  grid-template-columns: repeat(auto-fill,50%);
}
`

interface data {
  lotteries: LotteryModel[];
}

export const Lotteries = () => {
  
  const data: data = {
    lotteries: [
      {
        id: 1,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 1,
      },
      {
        id: 2,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 2,
      },
      {
        id: 3,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 3,
      },
      {
        id: 4,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 4,
      },
      {
        id: 5,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 1,
      },
    ],
  };

  return (
    <>
      <BaseLayout>
        <main>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={62}
            totalSlides={data.lotteries.length}
            visibleSlides={1}
            currentSlide={0}
            infinite={true}
            isPlaying={true}
            interval={5000}
          >
            <Slider>
              {data.lotteries.map((value, index) => {
                return (
                  <Slide index={index} className={"carousel__slide-"+value.status}>
                    {
                    value.status<=2?
                    <StyledText 
                      color="white" 
                      fontWeight={600} 
                      pt={["4%","4%","4%","4%"]} 
                      ml={["-1%","-1%","unset","unset"]} 
                      fontSize={["0.8rem","1.4rem","1rem","1.4rem"]}>
                      {lotteryStatusObj[value.status-1].text}
                    </StyledText>:
                    <StyledText 
                      color="white" 
                      fontWeight={600} 
                      pt={["4%","4%","4%","4%"]} 
                      ml={["-1%","-2%","-1%","-1%"]} 
                      fontSize={["0.6rem","1.1rem","0.8rem","1.2rem"]}>
                      {lotteryStatusObj[value.status-1].text}
                    </StyledText>
                    }
                    <Box
                      position="absolute"
                      bottom={0}
                      backgroundColor="rgba(0,0,0,0.5)"
                      width="100%"
                      textAlign="left"
                      paddingY={["0.5rem", "0.5rem", "0.8rem", "1.2rem"]}
                      paddingX={["1rem", "1rem", "1.2rem", "1.8rem"]}
                    >
                      <Typography
                        fontWeight="500"
                        as="h4"
                        fontFamily="Noto Sans CJK JP"
                        color="#ffff00"
                        fontSize={["0.8rem", "0.8rem", "0.9rem", "1rem"]}
                        margin={0}
                      >
                        販売終了日　{value.startedAt}
                      </Typography>
                      <Typography
                        fontWeight="600"
                        as="h1"
                        fontFamily="Noto Sans CJK JP"
                        color="white"
                        fontSize={["0.8rem", "1rem", "1.2rem", "1.45rem"]}
                        margin={0}
                      >
                        {value.title}
                      </Typography>
                    </Box>
                    <Image src={value.image} hasMasterSpinner={true} />
                  </Slide>
                );
              })}
            </Slider>
            <DotGroup></DotGroup>
            <ButtonBack>◀︎</ButtonBack>
            <ButtonNext>▶︎</ButtonNext>
          </CarouselProvider>
          <Container>
            <Box p={[0, 0, 40, 40]}>
              <Box marginY="2rem">
                <Typography
                  textAlign={["center", "center", "unset"]}
                  as="h1"
                  fontSize={["1.6rem", "1.6rem", "2.5rem", "3.3rem"]}
                  lineHeight={1.1}
                  margin={0}
                  fontFamily="Lato"
                >
                  NOW ON SALE
                </Typography>
                <Box
                  display={["flex", "flex", "unset"]}
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent={["center", "center", "unset"]}
                >
                  <Typography
                    as="h1"
                    fontSize={["1.6rem", "1.6rem", "2.5rem", "3.3rem"]}
                    margin={0}
                    fontFamily="Lato"
                  >
                    ＆COMING SOON
                  </Typography>
                  <Typography
                    as="span"
                    fontSize={["1rem", "1rem", "1.1rem", "1.25rem"]}
                    fontFamily="Noto Sans CJK JP"
                    fontWeight="bold"
                    ml="0.7rem"
                  >
                    販売中/近日発売予定
                  </Typography>
                </Box>
              </Box>
              <StyledBox>
                {data.lotteries.map((value) => {
                  return (
                    <Box
                      key={value.id}
                      width={["95%","95%","92%","90%"]}
                      mb={[3,3,3,4]}
                    >
                      <Lottery
                        src={value.image}
                        title={value.title}
                        status={value.status}
                        period={value.startedAt}
                      />
                    </Box>
                  );
                })}
              </StyledBox>
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};
