import { Box, Paragraph } from "components/atoms";
import { Head } from "components/organisms";
import { StaticPage } from "pages/common/StaticPage";
import { fakeStaticPageData as data } from "utils/fakeData";

const UsagePolicyPage = () => {
  return (
    <>
      <Head title="利用規約" />
      <StaticPage
        title="利用規約"
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

export default UsagePolicyPage;
