import { CartLayout } from "components/templates";
import { FlexBox, Box, Button, Image } from "components/atoms";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Error404Page = () => {
  let history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <CartLayout pageTitle="ページが見つかりませんでした">
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px="1rem"
      >
        <Box maxWidth="500px" mx="auto">
          <Image
            src="/assets/images/illustrator/404.png"
            width="100%"
            alt="404"
          />
        </Box>
        <FlexBox flexWrap="wrap">
          <Button
            variant="outlined"
            color="primary"
            m="0.5rem"
            onClick={handleGoBack}
          >
            前へ戻る
          </Button>
          <Link to="/">
            <Button variant="contained" color="primary" m="0.5rem">
              トップ
            </Button>
          </Link>
        </FlexBox>
      </FlexBox>
    </CartLayout>
  );
};

export default Error404Page;
