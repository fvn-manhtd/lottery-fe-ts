import { fakeLotteryList } from "utils/fakeData";
import { TopPage } from "pages/common/TopPage";

const SiteTopPage = () => {

  return (
      <>
        <TopPage lotteries={fakeLotteryList} />
      </>
  );
};

export default SiteTopPage;
