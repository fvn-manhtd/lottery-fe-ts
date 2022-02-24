import React from "react";
import { formatJapanDate, lotteryStatusObj } from "utils";
import { LotteryModelDetail } from "models";
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
import { CarouselStyle, StyledLabelText } from "./CarouselStyle";
import { Box, NavLink, Typography } from "components/atoms";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface CarouselProps {
  lotteries: LotteryModelDetail[];
  showDots: boolean;
  showArrow: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  lotteries,
  showDots,
  showArrow,
  isLoading,
  isFetching,
}) => {
  return (
    <div>
      {lotteries === undefined && (isLoading || isFetching) && (
        <CarouselStyle>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={62}
            totalSlides={3}
            visibleSlides={1}
            currentSlide={1}
            infinite={false}
            isPlaying={true}
            interval={5000}
          >
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

            <DotGroup></DotGroup>
            <ButtonBack>&#9664;&#65038;</ButtonBack>
            <ButtonNext>&#9654;&#65038;</ButtonNext>
          </CarouselProvider>
        </CarouselStyle>
      )}
      {lotteries && (
        <CarouselStyle>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={62}
            totalSlides={lotteries.length}
            visibleSlides={1}
            currentSlide={1}
            infinite={true}
            isPlaying={true}
            interval={5000}
          >
            <Slider>
              {lotteries.map((value, index) => {
                return (
                  <Slide
                    index={index}
                    className={"carousel__slide-" + value.status}
                    key={value.id}
                  >
                    <StyledLabelText
                      color="white"
                      fontWeight={600}
                      textAlign="center"
                      pt={["20px", "30px"]}
                      ml={["-1%", "-1%", "unset", "unset"]}
                      fontSize={["0.6rem", "0.8rem", "0.875rem", "0.9375rem"]}
                    >
                      {lotteryStatusObj[value.status - 1].text}
                    </StyledLabelText>
                    <Box
                      position="absolute"
                      bottom={0}
                      backgroundColor="rgba(0,0,0,0.5)"
                      width="100%"
                      textAlign="left"
                      paddingY={["0.5rem", "0.5rem", "0.8rem", "1.2rem"]}
                      paddingX={["1rem", "1rem", "1.2rem", "1.8rem"]}
                      zIndex={900}
                    >
                      <Typography
                        fontWeight="500"
                        as="h4"
                        color="#ffff00"
                        fontSize={["0.8rem", "0.8rem", "0.9rem", "1rem"]}
                        margin={0}
                      >
                        販売終了日 {formatJapanDate(value.startedAt)}
                      </Typography>
                      <Typography
                        fontWeight="600"
                        as="h1"
                        color="white"
                        fontSize={["0.8rem", "1rem", "1.2rem", "1.45rem"]}
                        margin={0}
                      >
                        {value.title}
                      </Typography>
                    </Box>
                    <a href={"http://" + value.url} target="_blank">
                      <Image
                        src={
                          process.env.REACT_APP_MALL_IMAGE_PATH + value.image
                        }
                        hasMasterSpinner={true}
                      />
                    </a>
                  </Slide>
                );
              })}
            </Slider>

            {showDots && <DotGroup></DotGroup>}

            {showArrow && (
              <>
                <ButtonBack>&#9664;&#65038;</ButtonBack>
                <ButtonNext>&#9654;&#65038;</ButtonNext>
              </>
            )}
          </CarouselProvider>
        </CarouselStyle>
      )}
    </div>
  );
};
