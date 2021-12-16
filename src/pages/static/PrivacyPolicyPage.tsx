import { Box, Paragraph } from "components/atoms";
import { StaticPage } from "pages/common/StaticPage";
import { fakeStaticPageData as data } from "utils/fakeData";

const PrivacyPolicyPage = () => {
    return (
        <>
            <StaticPage
                title="プライバシーポリシー"
                contents={
                    data.contents.map((value,index)=>{
                        return (
                            <Box key={index} mb={3}>
                                <Paragraph fontWeight="bold" mb={2}>{index+1+"."}{value.title}</Paragraph>
                                <Paragraph>{value.text}</Paragraph>
                            </Box>
                        )
                    })
                }
            />
        </>
    )
};

export default PrivacyPolicyPage;