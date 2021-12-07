import { BaseLayout } from "components/templates";
import { Container, Box, Image, Typography, Icon, Small, FlexBox, Paragraph } from "components/atoms";
import { Grid, LotteryRankDescription, LotteryRankedProduct } from "components/organisms";
import styled from "styled-components";
import { fakeLotteryDetail } from "utils/fakeData";

const StyledImage = styled(Image) `
height:65vh;
@media only screen and (max-width:767px) {
    height:50vh;
}
`
const StyledGrid = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill, 25%);
justify-content: center;
margin:2rem 0;
@media screen and (max-width: 768px){
    grid-template-columns: repeat(auto-fill,33%);
}
@media screen and (max-width: 425px){
    grid-template-columns: repeat(auto-fill,50%);
}
`

const ShopLotteryDetailPage = () => {

    return (
        <>
            <BaseLayout>
                <main>
                    {/* eye catch */}
                    <section>
                        <Container isMaxWidth={true}>
                            <Box
                                pt={{ _: 0, md: 40 }}
                                pb={{ _: 0, md: 20 }}
                                borderBottomLeftRadius="20px"
                                borderBottomRightRadius="20px">
                                <StyledImage 
                                    src={fakeLotteryDetail.topImage}
                                    width="100%"
                                    objectFit="cover"/>
                                <Grid container>
                                    <Grid 
                                        lg={2}
                                        md={2}
                                        sm={12}
                                        xs={12}
                                        item>
                                        <Box
                                            borderRadius={{_:"unset",md:"0 0 0 20px"}}
                                            paddingY={{_:1,md:3}}
                                            bg="primary.light">
                                        <Typography
                                            textAlign="center"
                                            margin={1}
                                            color="white"
                                            as="h2"
                                            fontSize={{_: "1rem", md: "1.4rem"}}
                                            >販売期間</Typography>
                                            </Box>
                                    </Grid>
                                    <Grid 
                                        lg={10}
                                        md={10}
                                        sm={12}
                                        xs={12}
                                        item>
                                        <Box
                                            borderRadius={{_:"unset",md:"0 0 20px 0"}}
                                            bg="gray.800"
                                            paddingY={{_:1,md:3}}
                                            display="flex"
                                            flexWrap="wrap"
                                            justifyContent="center">
                                        <Typography
                                            margin={1}
                                            color="white"
                                            as="h2"
                                            fontSize={{_: "1rem", md: "1.4rem"}}
                                            >{fakeLotteryDetail.startedAt+" 〜"}</Typography>
                                        <Typography
                                            margin={1}
                                            marginRight={{_:"1.5rem",md:"unset"}}
                                            color="white"
                                            as="h2"
                                            fontSize={{_: "1rem", md: "1.4rem"}}
                                            >{fakeLotteryDetail.endedAt}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </section>
                    {/* description */}
                    <section>
                        <Container>
                            {/* lottery title */}
                            <Typography
                                as="h1"
                                fontSize={{_:"1.3rem",md:"1.8rem"}}
                                fontWeight="bold">
                                {fakeLotteryDetail.title}
                            </Typography>
                            {/* sns buttons */}
                            <FlexBox 
                                marginY={{_:2,md:4}}
                                justifyContent={{_:"flex-end",md:"space-between"}}
                                flexWrap="wrap">
                                <FlexBox mb={{_:2,md:0}}>
                                    {/* facebook */}
                                    <FlexBox
                                        justifyContent="center"
                                        alignItems="center"
                                        bg="#3B5998"
                                        borderRadius={3}
                                        color="white"
                                        paddingY={2}
                                        paddingX={{_:2,md:3}}
                                        mr={2}
                                    >
                                        <Icon variant="small"  mr="0.5rem">
                                        facebook-filled-white
                                        </Icon>
                                        <Small >シェア</Small>
                                    </FlexBox>
                                    {/* twitter */}
                                    <FlexBox
                                        justifyContent="center"
                                        alignItems="center"
                                        bg="#099DD9"
                                        borderRadius={3}
                                        color="white"
                                        paddingY={2}
                                        paddingX={{_:2,md:3}}
                                        mr={2}
                                    >
                                        <Icon variant="small"  mr="0.5rem">
                                        twitter-1
                                        </Icon>
                                        <Small >ツイート</Small>
                                    </FlexBox>
                                    {/* line */}
                                    <FlexBox
                                        justifyContent="center"
                                        alignItems="center"
                                        bg="#02ba04"
                                        borderRadius={3}
                                        color="white"
                                        paddingY={2}
                                        paddingX={{_:2,md:3}}
                                        mr={2}
                                    >
                                        <Icon variant="small" mr="0.5rem">
                                        line
                                        </Icon>
                                        <Small >送る</Small>
                                    </FlexBox>
                                </FlexBox>
                                <FlexBox>
                                    {/* like button */}
                                    <FlexBox
                                        mb={{_:2,md:0}}
                                        justifyContent="center"
                                        alignItems="center"
                                        bg="#febf0f"
                                        borderRadius={20}
                                        color="white"
                                        paddingY={2}
                                        paddingX={3}
                                    >
                                        <Icon variant="small" mr="0.5rem">
                                        star
                                        </Icon>
                                        <Small >お気に入り</Small>
                                    </FlexBox>
                                </FlexBox>
                            </FlexBox>
                            <Paragraph 
                                fontSize="1rem"
                                lineHeight="1.8rem">
                                スクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入ります。
                                スクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入ります。
                            </Paragraph>
                            <StyledGrid>
                                {
                                    fakeLotteryDetail.rankedProducts.map(
                                        (value, index) => {
                                        return (
                                            <Box 
                                                width={{_:"95%",md:"90%"}}
                                                key={index}
                                                mb={2}>
                                                <LotteryRankedProduct
                                                    src={value.src}
                                                    index={index}
                                                    rank={value.rank}
                                                />
                                            </Box>
                                        );
                                })}
                            </StyledGrid>
                        </Container>
                    </section>
                    {/* purchase buttons */}
                    <section>
                        <Box 
                            bg="gray.550"
                            pt={{_:3,md:4}}
                            pb={{_:4,md:5}}
                            mb={{_:4,md:5}}>
                            <Container>
                                <Typography
                                    as="h3"
                                    fontSize={{_:"1.4rem",md:"1.9rem"}}
                                    fontWeight="bold"
                                    textAlign="center"
                                    margin={0}>
                                    くじを購入!
                                </Typography>
                                <Typography
                                    as="h3"
                                    fontSize={{_:"1rem",md:"1.2rem"}}
                                    fontWeight="bold"
                                    textAlign="center"
                                    color="primary.light"
                                    margin={1}
                                    mb={{_:2,md:4}}>
                                    WIN A PRICE
                                </Typography>
                                <FlexBox 
                                    maxWidth={{_:500,md:"unset"}}
                                    margin={{_:"0 auto",md:"unset"}}
                                    justifyContent={{_:"center",md:"space-between"}}
                                    flexDirection={{_:"column",md:"inherit"}}>
                                    <Box
                                    borderRadius="20px"
                                    paddingY={{_:10,md:20}}
                                    paddingX={30}
                                    bg="#0068b7"
                                    width={{_:"unset",md:"48%"}}
                                    boxShadow="1px 8px 1px #004980"
                                    mb={{_:20,md:0}}
                                        >
                                        <Typography 
                                            textAlign="center"
                                            as="h4"
                                            color="white"
                                            fontSize={{_:"1rem",md:"1.5rem"}}
                                            margin={0}
                                            mb={2}
                                            >
                                            <Typography 
                                                as="span" 
                                                color="#ffff00" 
                                                fontSize={{_:"1.5rem",md:"2.3rem"}}>
                                                <Typography as="span" fontSize={{_:"1.5rem",md:"2.4rem"}}>1</Typography>
                                                回くじ
                                            </Typography>
                                            を購入する
                                        </Typography>
                                        <Typography 
                                            borderRadius={35}
                                            textAlign="center"
                                            paddingY={2}
                                            bg="#004980"
                                            margin={0}
                                            color="white"
                                            as="h4"
                                            fontSize={{_:"1.2rem",md:"1.6rem"}}>
                                            500円/1回
                                        </Typography>
                                    </Box>
                                    <Box
                                    borderRadius="20px"
                                    paddingY={{_:10,md:20}}
                                    paddingX={30}
                                    bg="#ea5206"
                                    width={{_:"unset",md:"48%"}}
                                    boxShadow="1px 8px 1px #bb4002"
                                        >
                                        <Typography 
                                            textAlign="center"
                                            as="h4"
                                            color="white"
                                            fontSize={{_:"1rem",md:"1.5rem"}}
                                            margin={0}
                                            mb={2}
                                            >
                                            <Typography 
                                                as="span" 
                                                color="#ffff00" 
                                                fontSize={{_:"1.5rem",md:"2.3rem"}}>
                                                <Typography as="span" fontSize={{_:"1.5rem",md:"2.4rem"}}>10</Typography>
                                                回くじ
                                            </Typography>
                                            を購入する
                                        </Typography>
                                        <Typography 
                                            borderRadius={35}
                                            textAlign="center"
                                            paddingY={2}
                                            bg="#bb4002"
                                            margin={0}
                                            color="white"
                                            as="h4"
                                            fontSize={{_:"1.2rem",md:"1.6rem"}}>
                                            500円/1回
                                        </Typography>
                                    </Box>
                                </FlexBox>
                            </Container>
                        </Box>
                    </section>
                    {/* rank list */}
                    <section>
                        <Container>
                            {
                                fakeLotteryDetail.ranks.sort((a,b)=>{
                                    if(a.rank > b.rank) return 1;
                                    if(a.rank < b.rank) return -1;
                                    return 0;
                                }).map((value)=>{
                                    return (
                                        <Box mb={{_:4,md:5}}>
                                        <LotteryRankDescription
                                            key={value.id}
                                            title={value.title}
                                            description={value.description}
                                            rankTitle={value.rankTitle}
                                            rank={value.rank}
                                            probability={value.probability}
                                            products={value.products}
                                        />
                                        </Box>
                                    )
                                })
                            }
                        </Container>
                    </section>
                </main>
            </BaseLayout>
        </>
    )
}

export default ShopLotteryDetailPage;