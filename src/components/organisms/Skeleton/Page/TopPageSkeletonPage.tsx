import { Box, Container, Typography } from "components/atoms";
import { BaseLayout } from "components/templates";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselStyle } from "pages/generals/TopPageStyle";
import { LotterySkeletonCard } from "..";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const TopPageSkeletonPage = () => {

  return (
    <>
      <BaseLayout>
        <main>
          {/* carousel lottery list */}
          <CarouselStyle>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={62}
              totalSlides={3}
              visibleSlides={1}
              currentSlide={1}
              isPlaying={false}
            >
              <Slider>
                    <Slide index={1}>
                      <Skeleton height="100%"/>
                    </Slide>
                    <Slide index={1}>
                      <Skeleton height="100%"/>
                    </Slide>
                    <Slide index={1}>
                      <Skeleton height="100%"/>
                    </Slide>
              </Slider>
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
              <LotterySkeletonCard/>
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};

export default TopPageSkeletonPage;
