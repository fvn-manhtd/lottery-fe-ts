import { fakeLotteryList } from "utils/fakeData";
import { LotteryListPage } from "pages/common/LotteryListPage";

const SiteLotteryListPage = () => {

  return (
    <>
      <LotteryListPage lotteries={fakeLotteryList}/>
    </>
  );
};

export default SiteLotteryListPage;
