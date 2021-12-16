import { Box, Container, Typography, Button } from "components/atoms";
import { LotteryList } from "components/organisms";
import { BaseLayout } from "components/templates";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Pagination } from "components/organisms";
import { fakeLotteryList as lotteryList } from "utils/fakeData";

const LotteryListPage = () => {

  return (
    <>
      <BaseLayout>
        <main>
          <Container>
            <Box p={{ _: 0, md: 40 }}>
              
              {/*title*/}
              <Box marginY="2rem"> 
                <Typography
                  textAlign={["center", "center", "unset"]}
                  as="h1"
                  fontSize={["1.6rem", "1.6rem", "2.5rem", "3.3rem"]}
                  lineHeight={1.1}
                  margin={0}
                  fontFamily="Lato"
                >
                  NOW ON SALE
                </Typography>
                <Box
                  display={["flex", "flex", "unset"]}
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent={["center", "center", "unset"]}
                >
                  <Typography
                    as="h1"
                    fontSize={["1.6rem", "1.6rem", "2.5rem", "3.3rem"]}
                    margin={0}
                    fontFamily="Lato"
                  >
                    ＆COMING SOON
                  </Typography>
                  <Typography
                    as="span"
                    fontSize={["1rem", "1rem", "1.1rem", "1.25rem"]}
                    fontFamily="Noto Sans CJK JP"
                    fontWeight="bold"
                    ml="0.7rem"
                  >
                    販売中/近日発売予定
                  </Typography>
                </Box>
              </Box>
              
              {/* button list */}
              <Box
                display="flex"
                width={{ _: "90%", md: "60%" }}
                margin="0 auto 2.5rem auto"
              >
                <Button 
                  fullwidth={true}
                  variant="contained" 
                  color="secondary" 
                  borderRadius="10px"
                  marginX={1}>販売中</Button>
                <Button
                  fullwidth={true} 
                  variant="outlined" 
                  color="secondary"
                  borderRadius="10px"
                  marginX={1}>終了間際</Button>
                <Button
                  fullwidth={true} 
                  variant="outlined" 
                  color="secondary"
                  borderRadius="10px"
                  marginX={1}>販売予定</Button>
              </Box>

              {/** lottery list */}
              <LotteryList lotteries={lotteryList.lotteries}/>
              
              {/* pagination */}
              <Box 
              display="flex"
              justifyContent="center"
              width="90%"
              margin="1rem auto">
                <Pagination pageCount={10}/>
              </Box>
            
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};

export default LotteryListPage;