import { Box, Span, Button, FlexBox } from "components/atoms";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Route as ROUTES } from "utils";

const EffectStartPage: React.FC = () => {
  const history = useHistory();

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <Box>
      <FlexBox justifyContent="center" flexDirection="column" mx="auto">
        <video height="100%" ref={videoRef}>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>

        <Box position={"fixed"} bottom="20px" left="calc(50% - 100px)">
          <Button
            width="200px"
            size="medium"
            color="primary"
            variant="contained"
            borderRadius={5}
            onClick={() => history.push(ROUTES.EFFECT_FINISH)}
          >
            <Span fontSize="1rem">スキップ</Span>
          </Button>
        </Box>
      </FlexBox>
    </Box>
  );
};

export default EffectStartPage;
