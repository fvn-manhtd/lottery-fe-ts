import { Box, Divider, FlexBox, Typography } from "components/atoms";
import { Grid, LotteryFavorite, Pagination, Head } from "components/organisms";
import { DashBoardLayout } from "components/templates";
import Skeleton from "react-loading-skeleton";
import { fakeLotteryList } from "utils/fakeData";

const UserFavoriteSkeletonPage = () => {
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

          <Divider
            height="1px"
            mb="2rem"
            width="100%"
            backgroundColor="gray.500"
          ></Divider>
        </Box>
      </DashBoardLayout>
    </>
  );
};

export default UserFavoriteSkeletonPage;
