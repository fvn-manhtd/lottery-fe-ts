import { Box, Span, Button, FlexBox, Typography } from "components/atoms";
import { Grid, Logo, Product } from "components/organisms";
import { useHistory } from "react-router-dom";
import { Route as ROUTES } from "utils";
import { fakeProductList } from "utils/fakeData";

const EffectFinishPage: React.FC = () => {
  const history = useHistory();
  return (
    <Box py="1rem">
      <Box maxWidth="300px" mx="auto" my="2rem">
        <Logo />
      </Box>
      <Typography
        textAlign="center"
        color="primary.light"
        as="h1"
        fontSize="2.5rem"
        mt="3rem"
      >
        当たり
      </Typography>
      <Box
        bg="transparent"
        borderRadius="5px"
        maxWidth={1200}
        mx={{ _: "15px", md: "auto" }}
        mb="3rem"
      >
        <Box>
          <Grid container spacing={6}>
            {fakeProductList.map((item) => (
              <Grid item lg={3} sm={6} xs={12} key={item.id}>
                <Box p="1rem" bg="white" shadow={5} borderRadius="10px">
                  <Product
                    src={item.image}
                    title={item.title}
                    prize={item.prize}
                    quanity={item.quanity}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <FlexBox
        justifyContent="center"
        flexDirection={{ _: "column-reverse", md: "row" }}
        mx="auto"
        px="1rem"
        maxWidth="600px"
      >
        <Button
          width={{ _: "100%", md: "50%" }}
          mx={{ _: "0", md: "1rem" }}
          size="large"
          color="gray"
          variant="outlinedSecond"
          borderRadius={5}
          onClick={() => history.push(ROUTES.HOME)}
        >
          <Span fontSize="1rem">トップページへ戻る</Span>
        </Button>
        <Button
          width={{ _: "100%", md: "50%" }}
          mx={{ _: "0", md: "1rem" }}
          mb={{ _: "1rem", md: "0" }}
          size="large"
          color="primary"
          variant="contained"
          borderRadius={5}
          type="submit"
          onClick={() => history.push(ROUTES.LOTTERIES)}
        >
          <Span fontSize="1rem">商品ページへ戻る</Span>
        </Button>
      </FlexBox>
    </Box>
  );
};

export default EffectFinishPage;
