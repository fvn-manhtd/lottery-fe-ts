import { fakeLotteryList } from "utils/fakeData";
import { TopPage } from "pages/common/TopPage";

const ShopTopPage = () => {

  return (
      <>
        <TopPage lotteries={fakeLotteryList} />
      </>
  );
};

export default ShopTopPage;
