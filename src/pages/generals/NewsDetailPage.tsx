import { Box, Container, Paragraph, H3 } from "components/atoms";
import { BaseLayout } from "components/templates";
import { fakeNewsDetail as newsDetailData } from "utils/fakeData";

const NewsDetailPage = () => {
    return (
        <BaseLayout>
            <main>
            <Container>
                <Box 
                paddingY={{ _: 3, md: 5 }}
                paddingX={{ _: 2, md: 40 }}>
                    <H3 mb={2}>{newsDetailData.title}</H3>
                    <Paragraph mb={2} textAlign="right">{newsDetailData.date}</Paragraph>
                    <Paragraph>{newsDetailData.content}</Paragraph>
                </Box>
            </Container>
            </main>
        </BaseLayout>
    )
}

export default NewsDetailPage;