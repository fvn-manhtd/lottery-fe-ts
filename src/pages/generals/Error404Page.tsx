import { OneColumnLayout } from "components/templates";
import {
  FlexBox,
  Box,
  Button,
  Image,
  Typography,
  Paragraph,
} from "components/atoms";
import { Link } from "react-router-dom";
import { Card, Head, Logo } from "components/organisms";

const Error404Page = () => {
  return (
    <>
      <Head title="ページが見当たりません" />

      <OneColumnLayout>
        <Box
          bg="body.paper"
          maxWidth="800px"
          mt="3rem"
          shadow={6}
          borderRadius={5}
          mx="auto"
        >
          <Card
            pt="5rem"
            px={{ _: "1rem", md: "0" }}
            maxWidth="490px"
            mx="auto"
            boxShadow="none"
          >
            <Box mx="auto" mb="2rem" maxWidth="200px">
              <Logo />
            </Box>

            <FlexBox
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              px="1rem"
              mb="2rem"
            >
              <Typography as="h1" color="primary.main" mt="3rem" mb="0.5rem">
                ページが見当たりません
              </Typography>
              <Box maxWidth="500px" mx="auto">
                <Image
                  src={`${process.env.REACT_APP_MALL_IMAGE_ASSET_PATH}assets/images/illustrator/404.png`}
                  width="100%"
                  alt="404"
                />
              </Box>
              <FlexBox flexWrap="wrap">
                <Link to="/">
                  <Button variant="contained" color="primary" m="0.5rem">
                    トップ
                  </Button>
                </Link>
              </FlexBox>
            </FlexBox>
          </Card>
          <Paragraph py="1rem" textAlign="center" fontSize="0.8rem">
            &copy;Online Gacha
          </Paragraph>
        </Box>
      </OneColumnLayout>
    </>
  );
};

export default Error404Page;
