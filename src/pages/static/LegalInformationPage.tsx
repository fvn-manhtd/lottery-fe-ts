import { Box, Paragraph } from "components/atoms";
import { Head } from "components/organisms";
import { StaticPage } from "pages/common/StaticPage";
import { fakeStaticPageData as data } from "utils/fakeData";

const LegalInformationPage = () => {
  return (
    <>
      <Head title="特定商取引法に基づく表示" />
      <StaticPage
        title="特定商取引法に基づく表示"
        contents={data.contents.map((value, index) => {
          return (
            <Box key={index} mb={3}>
              <Paragraph fontWeight="bold" mb={2}>
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

export default LegalInformationPage;
