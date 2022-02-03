import {
  FlexBox,
  Box,
  Container,
  Typography,
  Button,
  Spinner,
} from "components/atoms";
import {
  LotteryList,
  Pagination,
  LotterySkeletonCard,
  Head,
} from "components/organisms";
import { BaseLayout } from "components/templates";
import { getSearchQueryObj, Route as ROUTES, statusButton } from "utils";
import { useGetLotteriesQuery } from "api";
import { useAppDispatch } from "redux/app/hooks";
import { push } from "connected-react-router";
import { useState, useEffect, useRef } from "react";

const LotteryListPage = () => {
  const [pagination, setPagination] = useState(1);
  const [limit, setLimit] = useState(12);
  const dispatch = useAppDispatch();

  let currentStatus = getSearchQueryObj("status");

  let myRef = useRef(null);

  const {
    data: lotteriesData,
    isLoading,
    isFetching,
  } = useGetLotteriesQuery({ limitArg: limit, pageArg: pagination });

  const handleChangePagination = (value) => {
    dispatch(push(`${ROUTES.LOTTERIES}?page=${value}`));
    setPagination(value);
  };

  const handleStatusChange = (value) => {
    dispatch(push(`${ROUTES.LOTTERIES}?status=${value}`));
  };

  useEffect(() => {
    if (currentStatus && currentStatus != undefined) {
      setLimit(100);
      setPagination(1);
    } else {
      setLimit(12);
    }
  }, [currentStatus]);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  }, [currentStatus, pagination]);

  const filterStatusData = (data, value) => {
    if (value == 1) {
      //[未調整]新着(開始1週間以内):1 販売中:2
      return data.filter((item) => item.status == 1 || item.status == 2);
    } else if (value == 2) {
      // 終了間際(期限1週間以内):3
      return data.filter((item) => item.status == 3);
    } else if (value == 3) {
      // 販売予定:4
      return data.filter((item) => item.status == 4);
    } else {
      return data;
    }
  };

  return (
    <>
      <Head title="NOW ON SALE＆COMING SOON 販売中/近日発売予定" />
      <BaseLayout>
        <main>
          <Container>
            <Box p={{ _: 0, md: 40 }}>
              {/*title*/}
              <Box ref={myRef} marginY="2rem">
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
              <FlexBox
                width={{ _: "90%", md: "60%" }}
                margin="0 auto 2.5rem auto"
                justifyContent="center"
              >
                {statusButton.map((value, index) => {
                  return (
                    <Box key={index} width="calc(100% / 3)" mx="0.5rem">
                      <Button
                        fullwidth={true}
                        variant={
                          value.status == currentStatus
                            ? "contained"
                            : "outlined"
                        }
                        color={
                          value.status == currentStatus
                            ? "primary"
                            : "secondary"
                        }
                        borderRadius="10px"
                        onClick={() => handleStatusChange(value.status)}
                      >
                        {value.text}
                      </Button>
                    </Box>
                  );
                })}
              </FlexBox>

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

              {lotteriesData && (
                <Box mb="3rem">
                  <LotteryList
                    lotteries={filterStatusData(
                      lotteriesData.lotteries,
                      currentStatus
                    )}
                  />
                </Box>
              )}

              {/* pagination */}
              {!isLoading &&
                lotteriesData &&
                lotteriesData.pagination.per_page != 100 && (
                  <Box
                    display="flex"
                    justifyContent="center"
                    width="90%"
                    margin="1rem auto 3rem auto"
                  >
                    <Pagination
                      onChange={(data) => handleChangePagination(data)}
                      pageCount={lotteriesData.pagination.last_page}
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
