import { fakeLotteryList } from "utils/fakeData";
import { LotteryListPage } from "pages/common/LotteryListPage";

const ShopLotteryListPage = () => {

  return (
    <>
      <LotteryListPage lotteries={fakeLotteryList}/>
    </>
  );
};

export default ShopLotteryListPage;
