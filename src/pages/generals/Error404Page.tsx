import { CartLayout } from "components/templates";
import { FlexBox, Box, Button, Image } from "components/atoms";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const Error404Page = () => {
  const history = useHistory();

  const handleGoBack = async () => {
    history.goBack();
  };

  return (
    <CartLayout>
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
