import { fakeLotteryList as lotteryList } from "utils/fakeData";
import { TopPage } from "pages/common/TopPage";

const ShopTopPage = () => {

  return (
      <>
        <TopPage lotteries={lotteryList.lotteries} />
      </>
  );
};

export default ShopTopPage;
