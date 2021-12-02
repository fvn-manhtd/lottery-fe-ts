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

const StyledBox = styled(Box)`
  color: white;
  position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  top: -15%;
  left: -13%;
  width: 200px;
  height: 150px;
  background: ${(props) => props.color};
  transform: rotate(-45deg);
  padding-bottom: 0.625rem;
  @media only screen and (max-width: 1280px) {
    left: -17%;
    top: -18%;
  }
  @media only screen and (max-width: 1087px) {
    left: -20%;
    top: -25%;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 922px) {
    left: -25%;
    top: -29%;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 800px) {
    left: -28%;
    top: -33%;
  }
  @media only screen and (max-width: 768px) {
    left: -18%;
    top: -26%;
    width: 250px;
    height: 200px;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 655px) {
    left: -22%;
    top: -28%;
  }
  @media only screen and (max-width: 550px) {
    left: -27%;
    top: -37%;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 476px) {
    left: -31%;
    top: -44%;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 400px) {
    left: -40%;
    top: -56%;
    font-size: 1rem;
  }
  @media only screen and (max-width: 363px) {
    left: -44%;
    top: -62%;
    font-size: 1rem;
  }
  @media only screen and (max-width: 320px) {
    left: -49%;
    top: -69%;
    font-size: 1rem;
  }
`;

interface data {
  lotteries: LotteryModel[];
}

export const HomePage = () => {
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
                  <Slide index={index}>
                    <StyledBox color={lotteryStatusObj[value.status - 1].color}>
                      {lotteryStatusObj[value.status - 1].text}
                    </StyledBox>
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
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent={[
                  "space-between",
                  "space-between",
                  "center",
                  "center",
                ]}
              >
                {data.lotteries.map((value) => {
                  return (
                    <Box
                      key={value.id}
                      width={["48%", "48%", "30%", "30%"]}
                      mb={4}
                      minWidth={["unset", "unset", 250, 250]}
                      mr={[0, 0, 3, 3]}
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
              </Box>
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};
