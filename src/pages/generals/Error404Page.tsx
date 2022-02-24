import { OneColumnLayout } from "components/templates";
import { FlexBox, Box, Button, Image, Typography } from "components/atoms";
import { Link } from "react-router-dom";
import { useAppDispatch } from "redux/app/hooks";
import { goBack } from "connected-react-router";
import { Head } from "components/organisms";

const Error404Page = () => {
  const dispatch = useAppDispatch();
  const handleGoBack = () => {
    dispatch(goBack());
  };

  return (
    <>
      <Head title="ページが見当たりません" />

      <OneColumnLayout>
        <FlexBox
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px="1rem"
        >
          <Typography as="h1" color="primary.main" mt="3rem" mb="0.5rem">
            ページが見当たりません
          </Typography>
          <Box maxWidth="500px" mx="auto">
            <Image
              src={`${process.env.REACT_APP_MALL_IMAGE_ASSET_PATH}/assets/images/illustrator/404.png`}
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
      </OneColumnLayout>
    </>
  );
};

export default Error404Page;
