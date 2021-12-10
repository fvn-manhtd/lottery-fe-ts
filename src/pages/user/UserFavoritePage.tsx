import { Box, Divider, FlexBox, SelectBox, Typography } from "components/atoms";
import { Grid, LotteryFavorite, Pagination } from "components/organisms";
import { DashBoardLayout } from "components/templates";
import { fakeLotteryList } from "utils/fakeData";

const sortOptions = [
  { label: "新着順", value: "new" },
  { label: "タイトル", value: "title" },
];

const UserFavoritePage = () => {
  return (
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
              <SelectBox
                placeholder="Short by"
                defaultValue={sortOptions[0]}
                options={sortOptions}
              />
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
            {fakeLotteryList.lotteries.map((item) => (
              <Grid item lg={3} sm={6} xs={12} key={item.id}>
                <LotteryFavorite
                  src={item.image}
                  title={item.title}
                  status={item.status}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider
          height="1px"
          mb="2rem"
          width="100%"
          backgroundColor="gray.500"
        ></Divider>

        <FlexBox justifyContent="center">
          <Pagination
            pageCount={10}
            onChange={(data) => {
              console.log(data.selected);
            }}
          />
        </FlexBox>
      </Box>
    </DashBoardLayout>
  );
};

export default UserFavoritePage;
