import { fakeLotteryList as lotteryList } from "utils/fakeData";
import { LotteryListPage } from "pages/common/LotteryListPage";

const SiteLotteryListPage = () => {

  return (
    <>
      <LotteryListPage lotteries={lotteryList.lotteries}/>
    </>
  );
};

export default SiteLotteryListPage;
