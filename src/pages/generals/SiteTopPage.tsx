import { fakeLotteryList as lotteryList } from "utils/fakeData";
import { TopPage } from "pages/common/TopPage";

const SiteTopPage = () => {

  return (
      <>
        <TopPage lotteries={lotteryList.lotteries} />
      </>
  );
};

export default SiteTopPage;
