import { Box } from "components/atoms";
import { Grid } from "components/organisms";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LotterySkeletonCard: React.FC = () => {
  return (
    <Grid container>
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
  );
};
