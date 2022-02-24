import { favoriteApiNew } from "api";
import { Box, Divider, FlexBox, Typography } from "components/atoms";
import { Grid, LotteryFavorite, Pagination, Head } from "components/organisms";
import { DashBoardLayout } from "components/templates";
import { useEffect, useRef, useState } from "react";
// import UserFavoriteSkeletonPage from "./UserFavoriteSkeletonPage";
import { getSearchQueryObj, Route as ROUTES } from "utils";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { push } from "connected-react-router";
import Skeleton from "react-loading-skeleton";
import { currentUserDataActions, selectCurrentUserFav } from "redux/features";

const UserFavoritePage = () => {
  const dispatch = useAppDispatch();

  const isScreenMounted = useRef(true);

  const userFavoriteData = useAppSelector(selectCurrentUserFav);
  let currentPage = getSearchQueryObj("page");
  if (!currentPage) {
    currentPage = 1;
  }
  const [pageCount, setPageCount] = useState(currentPage);
  const [nextPage, setNextPage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const getFavList = async (value) => {
    setIsFetching(true);
    try {
      const { data } = await favoriteApiNew.list(value);
      if (!isScreenMounted.current) return;
      dispatch(currentUserDataActions.addUserFav(data.data.data));
      setPageCount(data.data.pagination.total); // total pagination
      setNextPage(data.data.pagination.next_page_url); // Next page
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getFavList(currentPage);

    return () => {
      isScreenMounted.current = false;
    };
  }, []);

  const handleChangePagination = (value) => {
    dispatch(push(`${ROUTES.USER_FAVORITE}?page=${value}`));
  };

  return (
    <>
      <Head title="お気に入り" />

      <DashBoardLayout>
        <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
          お気に入り
        </Typography>
        <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
          <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
            <Typography fontWeight={600} fontSize="1.2rem">
              お気に入り一覧
            </Typography>
            <Box>
              <Box minWidth="150px">
                {/* <SelectBox
                  placeholder="Short by"
                  defaultValue={sortOptions[0]}
                  options={sortOptions}
                /> */}
              </Box>
            </Box>
          </FlexBox>
          <Divider
            height="2px"
            mb="2rem"
            width="100%"
            backgroundColor="gray.500"
          ></Divider>

          {isFetching && (
            <Box mb="2rem">
              <Grid container spacing={6}>
                {(() => {
                  const items = [];
                  for (let i = 0; i < 8; i++) {
                    items.push(
                      <Grid spacing={6} item lg={3} sm={6} xs={12} key={i}>
                        <Box height={{ _: "200px", md: "280px" }}>
                          <Skeleton height="100%" />
                        </Box>
                      </Grid>
                    );
                  }
                  return <>{items}</>;
                })()}
              </Grid>
            </Box>
          )}

          {!isFetching && (
            <Box mb="2rem">
              <Grid container spacing={6}>
                {userFavoriteData?.map((item) => (
                  <Grid item lg={3} sm={6} xs={12} key={item.lottery_id}>
                    <LotteryFavorite
                      id={item.lottery_id}
                      shop_id={item.shop_id}
                      src={item.image}
                      title={item.title}
                      status={item.status}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {userFavoriteData.length != 0 && nextPage != null && (
            <>
              <Divider
                height="1px"
                mb="2rem"
                width="100%"
                backgroundColor="gray.500"
              ></Divider>

              <FlexBox justifyContent="center">
                <Pagination
                  onChange={(data) => handleChangePagination(data)}
                  // pageRangeDisplayed={5}
                  pageCount={pageCount}
                />
              </FlexBox>
            </>
          )}
        </Box>
      </DashBoardLayout>
    </>
  );
};

export default UserFavoritePage;
