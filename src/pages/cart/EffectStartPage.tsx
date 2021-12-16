import { Box, Span, Button, FlexBox } from "components/atoms";
import { Logo } from "components/organisms";
import { useHistory } from "react-router-dom";
import { Route as ROUTES } from "utils";

const EffectStartPage: React.FC = () => {
  const history = useHistory();

  return (
    <Box py="1rem">
      <Box maxWidth="320px" mx="auto" my="2rem">
        <Logo />
      </Box>

      <FlexBox justifyContent="center" mx="auto"></FlexBox>

      <FlexBox
        justifyContent="center"
        flexDirection="column"
        maxWidth="480px"
        mx="auto"
      >
        <Button
          width="100%"
          size="large"
          color="primary"
          variant="contained"
          borderRadius={5}
        >
          <Span fontSize="1rem">スタート</Span>
        </Button>

        <Button
          width="100%"
          size="large"
          color="gray"
          variant="outlinedSecond"
          borderRadius={5}
          onClick={() => history.push(ROUTES.EFFECT_FINISH)}
        >
          <Span fontSize="1rem">スキップ</Span>
        </Button>
      </FlexBox>
    </Box>
  );
};

export default EffectStartPage;
