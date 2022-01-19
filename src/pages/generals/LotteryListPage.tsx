import { Box, Container, Typography, Button } from "components/atoms";
import {
  LotteryList,
  Pagination,
  LotterySkeletonCard,
} from "components/organisms";
import { BaseLayout } from "components/templates";
import "pure-react-carousel/dist/react-carousel.es.css";
import { fakeLotteryList as lotteryList } from "utils/fakeData"; //apiからのデータがないのでフェイクデータを表示中
import { getSearchQueryObj, Route as ROUTES } from "utils";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { lotteryApi } from "api/lotteryApi";
import { useQuery } from "react-query";
import { ListResponse, LotteryModel } from "models";

const StyledLink = styled.a`
  display: contents;
`;

const LotteryListPage = () => {
  const { data: lotteriesData, isLoading: isLoadingLotteries } = useQuery<
    ListResponse<LotteryModel>
  >(
    "lotteries",
    async () => {
      const res = await lotteryApi.getAll();
      return res.data.data;
    },
    {
      staleTime: 5 * 60 * 1000, // cache data 5min
      refetchInterval: 5 * 60 * 1000, // auto refetch after 5 min
      refetchIntervalInBackground: true,
    }
  );

  const statusButton = [
    { status: 1, text: "販売中" },
    { status: 2, text: "終了間際" },
    { status: 3, text: "販売予定" },
  ];

  const history = useHistory();
  const changeRoute = (data) => {
    const page = data + 1;
    history.push(
      ROUTES.LOTTERIES +
        "?status=" +
        getSearchQueryObj("status") +
        "&page=" +
        page
    );
  };

  return (
    <>
      <BaseLayout>
        <main>
          <Container>
            <Box p={{ _: 0, md: 40 }}>
              {/*title*/}
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

              {/* button list */}
              <Box
                display="flex"
                width={{ _: "90%", md: "60%" }}
                margin="0 auto 2.5rem auto"
              >
                {statusButton.map((value, index) => {
                  if (value.status == getSearchQueryObj("status")) {
                    return (
                      <StyledLink
                        href={ROUTES.LOTTERIES + "?status=" + value.status}
                        key={index}
                      >
                        <Button
                          fullwidth={true}
                          variant="contained"
                          color="primary"
                          borderRadius="10px"
                          marginX={1}
                        >
                          {value.text}
                        </Button>
                      </StyledLink>
                    );
                  } else {
                    return (
                      <StyledLink
                        href={ROUTES.LOTTERIES + "?status=" + value.status}
                        key={index}
                      >
                        <Button
                          fullwidth={true}
                          variant="outlined"
                          color="secondary"
                          borderRadius="10px"
                          marginX={1}
                        >
                          {value.text}
                        </Button>
                      </StyledLink>
                    );
                  }
                })}
              </Box>

              {/** lottery list */}
              {isLoadingLotteries && <LotterySkeletonCard />}
              {!isLoadingLotteries && lotteriesData && (
                <LotteryList lotteries={lotteryList.lotteries} />
              )}

              {/* pagination */}
              {!isLoadingLotteries && lotteriesData && (
                <Box
                  display="flex"
                  justifyContent="center"
                  width="90%"
                  margin="1rem auto"
                >
                  <Pagination
                    pageCount={
                      lotteriesData && lotteriesData.pagination.last_page
                    }
                    onChange={(data) => {
                      changeRoute(data);
                    }}
                  />
                </Box>
              )}
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};

export default LotteryListPage;
