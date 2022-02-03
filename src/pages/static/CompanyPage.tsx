import { Box, Paragraph } from "components/atoms";
import { Head } from "components/organisms";
import { StaticPage } from "pages/common/StaticPage";
import { fakeStaticPageData as data } from "utils/fakeData";

const CompanyPage = () => {
  return (
    <>
      <Head title="会社概要" />
      <StaticPage
        title="会社概要"
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

export default CompanyPage;
