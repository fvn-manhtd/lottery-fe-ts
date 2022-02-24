import { FlexBox, Spinner } from "components/atoms";

export const LoadingBox = () => {
  return (
    <FlexBox
      position="fixed"
      top="0"
      left="0"
      width="100%"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="rgba(255,255,255,.8)"
      zIndex={9999}
    >
      <Spinner
        size={60}
        border="5px solid"
        borderColor="primary.main"
        borderTop="5px solid white"
      ></Spinner>
    </FlexBox>
  );
};
