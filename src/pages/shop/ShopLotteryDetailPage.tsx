import { BaseLayout } from "components/templates";
import { Container, Box, Typography, Icon, Small, FlexBox, Paragraph } from "components/atoms";
import { ModalComponent } from "components/molecules";
import { Grid, LotteryRankDescription, LotteryRankedProduct, PurchaseModal, PurchaseButton } from "components/organisms";
import { StyledImage, StyledGrid, StyledWiderGrid } from "./ShopLotteryDetailPageStyle";
import { fakeLotteryDetail as lotteryDetail } from "utils/fakeData";

const ShopLotteryDetailPage = () => {

    return (
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
                                src={lotteryDetail.image}
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
                                        >{lotteryDetail.startedAt+" 〜"}</Typography>
                                    <Typography
                                        margin={1}
                                        marginRight={{_:"1.5rem",md:"unset"}}
                                        color="white"
                                        as="h2"
                                        fontSize={{_: "1rem", md: "1.4rem"}}
                                        >{lotteryDetail.endedAt}</Typography>
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
                            {lotteryDetail.title}
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
                            lineHeight="1.8rem">{lotteryDetail.description}
                        </Paragraph>
                        {/* ranked product lists */}
                        <StyledGrid>
                            {
                                lotteryDetail.rankedProducts.sort((a,b)=>{
                                    if(a.rank > b.rank) return 1;
                                    if(a.rank < b.rank) return -1;
                                    return 0;
                                }).map(
                                    (value, index) => {
                                    return (
                                        <Box 
                                            width={{_:"95%",md:"90%"}}
                                            key={index}
                                            mb={2}>
                                            <LotteryRankedProduct
                                                src={value.src}
                                                rankTitle={value.rankTitle}
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
                            <StyledWiderGrid>
                                <ModalComponent
                                    buttonElement={<Box mb={{_:20,md:0}}><PurchaseButton times={1} color="blue"/></Box>}
                                    content={<PurchaseModal/>}
                                ></ModalComponent>
                                {/* 10回くじ */}
                                <ModalComponent
                                    buttonElement={<PurchaseButton times={10} color="red"/>}
                                    content={<PurchaseModal/>}
                                ></ModalComponent>
                            </StyledWiderGrid>
                        </Container>
                    </Box>
                </section>
                {/* rank list */}
                <section>
                    <Container>
                        {
                            lotteryDetail.ranks.sort((a,b)=>{
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
                                        products={value.lotteryProducts}
                                    />
                                    </Box>
                                )
                            })
                        }
                    </Container>
                </section>
            </main>
        </BaseLayout>
    )
}

export default ShopLotteryDetailPage;