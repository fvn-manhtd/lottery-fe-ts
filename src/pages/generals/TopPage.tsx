import { Box, Container, Typography } from "components/atoms";
import { LotteryList, LotterySkeletonCard } from "components/organisms";
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
import { lotteryStatusObj } from "utils/constants";
import { CarouselStyle, StyledLabelText } from "./TopPageStyle";
import { fakeLotteryList as lotteryList } from "utils/fakeData"; //apiからのデータがないのでフェイクデータを表示中
import { lotteryApi } from "api/lotteryApi";
import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RequestListResponse, LotteryListModel } from "models";

const TopPage = () => {
  const [request,setRequest]=useState<RequestListResponse<LotteryListModel>>({
    data:null,loading:true
  });
  const isScreenMounted = useRef(true);

  if(request.data){
    console.log(request.data);
  };

  const getLotteryIndex = async () => {
    if (!isScreenMounted.current) return;
    setRequest({data:null,loading:true});
    try {
      const data = await lotteryApi.getAll();
      if (!isScreenMounted.current) return;
      setRequest({data:data.data.data,loading:false});
    } catch (error) {
      console.log(error);
      setRequest({data:null,loading:false});
    }
  };

  useEffect(() => {
    getLotteryIndex();
    return () => {isScreenMounted.current = false};
  }, []);

  return (
    <>
      <BaseLayout>
        <main>
          {/* carousel lottery list */}
          <CarouselStyle>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={62}
              totalSlides={lotteryList.lotteries.length}
              visibleSlides={1}
              currentSlide={1}
              infinite={true}
              isPlaying={true}
              interval={5000}
            >
              {request.loading && (
                <Slider>
                  <Slide index={1}>
                    <Skeleton height="100%" />
                  </Slide>
                  <Slide index={1}>
                    <Skeleton height="100%" />
                  </Slide>
                  <Slide index={1}>
                    <Skeleton height="100%" />
                  </Slide>
                </Slider>
              )}
              {!request.loading && request.data && (
                <Slider>
                  {lotteryList.lotteries.map((value, index) => {
                    return (
                      <Slide
                        index={index}
                        className={"carousel__slide-" + value.status}
                        key={value.id}
                      >
                        {value.status <= 2 ? (
                          <StyledLabelText
                            color="white"
                            fontWeight={600}
                            pt={["4%", "4%", "4%", "4%"]}
                            ml={["-1%", "-1%", "unset", "unset"]}
                            fontSize={["0.8rem", "1.4rem", "1rem", "1.4rem"]}
                          >
                            {lotteryStatusObj[value.status - 1].text}
                          </StyledLabelText>
                        ) : (
                          <StyledLabelText
                            color="white"
                            fontWeight={600}
                            pt={["4%", "4%", "4%", "4%"]}
                            ml={["-1%", "-2%", "-1%", "-1%"]}
                            fontSize={["0.6rem", "1.1rem", "0.8rem", "1.2rem"]}
                          >
                            {lotteryStatusObj[value.status - 1].text}
                          </StyledLabelText>
                        )}
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
              )}
              <DotGroup></DotGroup>
              <ButtonBack>◀︎</ButtonBack>
              <ButtonNext>▶︎</ButtonNext>
            </CarouselProvider>
          </CarouselStyle>
          <Container>
            <Box p={{ _: 0, md: 40 }}>
              {/* title */}
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

              {/** lottery list */}
              {request.loading && <LotterySkeletonCard />}
              {!request.loading && request.data && (
                <LotteryList lotteries={lotteryList.lotteries} />
              )}
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};

export default TopPage;
