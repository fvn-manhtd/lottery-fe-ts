import { fakeLotteryList as lotteryList } from "utils/fakeData";
import { TopPage } from "pages/common/TopPage";

const SiteTopPage = () => {
  console.log(window.location)

  return (
      <>
        <TopPage lotteries={lotteryList.lotteries} />
      </>
  );
};

export default SiteTopPage;
