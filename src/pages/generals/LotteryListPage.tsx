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
import { useEffect, useRef } from "react";

const LotteryListPage = () => {
  // const [pagination, setPagination] = useState(1);

  const dispatch = useAppDispatch();

  let currentStatus = getSearchQueryObj("status");
  let currentPage = getSearchQueryObj("page");

  if (!currentStatus) {
    currentStatus = 1;
  }
  if (!currentPage) {
    currentPage = 1;
  }

  let myRef = useRef(null);

  const {
    data: lotteriesData,
    isLoading,
    isFetching,
  } = useGetLotteriesQuery({ pageArg: currentPage, statusArg: currentStatus });

  const handleChangePagination = (value) => {
    dispatch(push(`${ROUTES.LOTTERIES}?status=${currentStatus}&page=${value}`));
    // setPagination(value);
  };

  const handleStatusChange = (value) => {
    // setPagination(1);
    dispatch(push(`${ROUTES.LOTTERIES}?status=${value}&page=1`));
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  }, [currentStatus, currentPage]);

  return (
    <>
      <Head title="NOW ON SALE＆COMING SOON 販売中/近日発売予定" />
      <BaseLayout>
        <main>
          <Container pt="5px">
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
                  <LotteryList lotteries={lotteriesData.lotteries} />
                </Box>
              )}

              {/* pagination */}
              {!isLoading && lotteriesData && (
                <Box
                  display="flex"
                  justifyContent="center"
                  width="90%"
                  margin="1rem auto 3rem auto"
                >
                  <Pagination
                    onChange={(data) => handleChangePagination(data)}
                    pageRangeDisplayed={5}
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
