import { Box, Container, FlexBox, H5,  NavLink, Paragraph, Typography } from "components/atoms";
import { NewsListModel } from "models/news"

export const NewsSection: React.FC<NewsListModel> = ({news}) => {
    return (
        <section>
            <Container 
            bg="gray.900"
            color="white"
            isAlwaysFullWidth={true}>
                <Container 
                p={{ _: 0, md: 40 }}
                paddingY={{_:4,md:40}}>
                    <FlexBox
                        mb={{_:3,md:4}}
                        alignItems="center"
                        flexDirection={{_:"column",md:"inherit"}}>
                        <Typography 
                            as="h1" 
                            fontSize={{_:"2rem",md:"4rem"}}
                            lineHeight={1}
                            m={0}>News</Typography>
                        <H5 
                            mt={{_:0,md:2}}
                            ml={{_:0,md:4}}>お知らせ</H5>
                    </FlexBox>
                    {
                        news.map((value)=>{
                            return (
                                <FlexBox 
                                    key={value.id}
                                    mb={{_:3,md:"2rem"}}
                                    flexDirection={{_:"column",md:"inherit"}}>
                                    <Paragraph mr={{_:0,md:5}} minWidth="10rem">{value.date}</Paragraph>
                                    <Paragraph 
                                        ellipsis={true}
                                        borderBottom="1px solid white"
                                        >{value.content}</Paragraph>
                                </FlexBox>
                            )
                        })
                    }
                    <Box textAlign="right">
                        <NavLink 
                            href="/news-list" 
                            color="white">一覧を見る</NavLink>
                    </Box>
                </Container>
            </Container>
        </section>
    )
};