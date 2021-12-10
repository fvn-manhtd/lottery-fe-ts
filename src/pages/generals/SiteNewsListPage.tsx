import { Box, Container, FlexBox, Paragraph, NavLink } from "components/atoms";
import { Pagination } from "components/organisms";
import { BaseLayout } from "components/templates";
import { fakeNewsList as newsListData } from "utils/fakeData";

const SiteNewsListPage = () => {
    return (
        <>
            <BaseLayout>
                <main>
                <Container>
                    <Box 
                    paddingY={{ _: 3, md: 5 }}
                    paddingX={{ _: 2, md: 40 }}>
                        {
                            newsListData.news.map((value)=>{
                                return (
                                    <FlexBox
                                        key={value.id}
                                        mb={{_:3,md:"2rem"}}
                                        flexDirection={{_:"column",md:"inherit"}}
                                        >
                                        <Paragraph mr={{_:0,md:4}} minWidth="10rem">{value.date}</Paragraph>
                                        <NavLink href={"/news/"+value.id}>{value.content}</NavLink>
                                    </FlexBox>
                                )
                            })
                        }
                        <Box
                        display="flex"
                        justifyContent="center"
                        width="90%"
                        margin="1rem auto"><Pagination pageCount={newsListData.pagination._total}/></Box>
                    </Box>
                </Container>
                </main>
            </BaseLayout>
    </>
    )
}

export default SiteNewsListPage;