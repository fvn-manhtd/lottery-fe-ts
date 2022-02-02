import { Box, Paragraph } from "components/atoms";
import { Head } from "components/organisms";
import { StaticPage } from "pages/common/StaticPage";
import { fakeStaticPageData as data } from "utils/fakeData";

const GuideLinePage = () => {
  return (
    <>
      <Head title="ご利用ガイド" />
      <StaticPage
        title="ご利用ガイド"
        contents={data.contents.map((value, index) => {
          return (
            <Box key={index} mb={3}>
              <Paragraph fontWeight="bold" mb={1}>
                {index + 1 + "."}
                {value.title}
              </Paragraph>
              <Paragraph>{value.text}</Paragraph>
            </Box>
          );
        })}
      />
    </>
  );
};

export default GuideLinePage;
