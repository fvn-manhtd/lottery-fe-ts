import {
  Box,
  Container,
  FlexBox,
  Spinner,
  Typography,
  NavLink,
} from "components/atoms";
import {
  Carousel,
  Head,
  LotteryList,
  LotterySkeletonCard,
} from "components/organisms";
import { BaseLayout } from "components/templates";
import { siteMetaSetting, Route as ROUTES } from "utils";
import { useGetLotteriesQuery } from "api";

const TopPage = () => {
  const {
    data: lotteriesData,
    isLoading,
    isFetching,
  } = useGetLotteriesQuery({
    limitArg: 12,
    pageArg: 1,
  });

  return (
    <>
      <Head title={siteMetaSetting.title} />
      <BaseLayout>
        <main>
          {/* carousel lottery list */}
          <Carousel
            lotteries={lotteriesData?.lotteries}
            isLoading={isLoading}
            isFetching={isFetching}
            showDots={true}
            showArrow={true}
          />
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

              {lotteriesData === undefined && (isLoading || isFetching) && (
                <Box mb="3rem">
                  <LotterySkeletonCard />
                </Box>
              )}

              {lotteriesData && (isLoading || isFetching) && (
                <FlexBox justifyContent="center" mb="2rem">
                  <Spinner
                    size={30}
                    border="2px solid"
                    borderColor="primary.main"
                    borderTop="2px solid white"
                  ></Spinner>
                </FlexBox>
              )}

              {!isLoading && lotteriesData && (
                <>
                  <Box mb="3rem">
                    <LotteryList lotteries={lotteriesData.lotteries} />
                  </Box>
                  <FlexBox
                    justifyContent="center"
                    maxWidth="200px"
                    mx="auto"
                    mb="3rem"
                  >
                    <NavLink variant="button" href={ROUTES.LOTTERIES}>
                      一覧を見る
                    </NavLink>
                  </FlexBox>
                </>
              )}
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};

export default TopPage;
