import { Box, Container, Typography, Button } from "components/atoms";
import {
  LotteryList,
  Pagination,
  LotterySkeletonCard,
} from "components/organisms";
import { BaseLayout } from "components/templates";
import "pure-react-carousel/dist/react-carousel.es.css";
import { fakeLotteryList as lotteryList } from "utils/fakeData"; //apiからのデータがないのでフェイクデータを表示中
import { getSearchQueryObj, Route } from "utils";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { lotteryApi } from "api/lotteryApi";
import { useEffect, useState, useRef } from "react";
import { LotteryListModel, RequestListResponse } from "models";

const StyledLink = styled.a`
  display: contents;
`;

const LotteryListPage = () => {
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
      setRequest({data:data.data.data,loading:false})
    } catch (error) {
      console.log(error);
      setRequest({data:null,loading:false});
    }
  };

  useEffect(() => {
    getLotteryIndex();
    return () => {isScreenMounted.current = false};
  }, []);

  const statusButton = [
    { status: 1, text: "販売中" },
    { status: 2, text: "終了間際" },
    { status: 3, text: "販売予定" },
  ];

  const history = useHistory();
  const changeRoute = (data) => {
    const page = data + 1;
    history.push(
      Route.LOTTERIES +
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
                        href={Route.LOTTERIES + "?status=" + value.status}
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
                        href={Route.LOTTERIES + "?status=" + value.status}
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
              {request.loading && <LotterySkeletonCard />}
              {!request.loading && request.data && (
                <LotteryList lotteries={lotteryList.lotteries} />
              )}

              {/* pagination */}
              {!request.loading && request.data && (
                <Box
                  display="flex"
                  justifyContent="center"
                  width="90%"
                  margin="1rem auto"
                >
                  <Pagination
                    pageCount={request.data.pagination.last_page}
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
