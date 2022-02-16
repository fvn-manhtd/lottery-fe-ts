import {
  Box,
  Button,
  Divider,
  FlexBox,
  Typography,
  Icon,
  Image,
  Span,
  TextField,
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Head, Stepper } from "components/organisms";
import { stepperList } from "utils";
import Skeleton from "react-loading-skeleton";

const ShoppingCartSkeletonPage: React.FC = () => {
  return (
    <>
      <Head title="カート" />
      <CartLayout pageTitle="カート">
        <main>
          <Box
            bg="body.paper"
            borderRadius="5px"
            maxWidth={1200}
            shadow={5}
            mx={{ _: "15px", md: "auto" }}
            py="4rem"
            px="1rem"
          >
            <Box maxWidth="1000px" mx="auto">
              <Box mb="3rem">
                <Stepper stepperList={stepperList} selectedStep={1} />
              </Box>
              <Divider mb="1rem" bg="gray.500"></Divider>

              <FlexBox mb="1rem" alignItems={{ _: "flex-start", md: "center" }}>
                <Box width={{ _: "50%", md: "20%" }} px="1rem">
                  <Skeleton height="120px" />
                </Box>
                <Box
                  width={{ _: "50%", md: "50%" }}
                  fontSize={{ _: "0.8rem", md: "1rem" }}
                >
                  <Box mb="5px">
                    <Skeleton width="90%" height="25px" />
                  </Box>
                  <Box mb="5px" display="inline-block">
                    <Skeleton width="120px" height="15px" />
                  </Box>
                  <Box>
                    <Skeleton width="80%" height="60px" />
                  </Box>
                </Box>
                <Box width="10%" display={{ _: "none", md: "block" }} mx="auto">
                  <Skeleton height="30px" width="90%" />
                </Box>
                <Box width="15%" display={{ _: "none", md: "block" }} mx="auto">
                  <Skeleton height="30px" width="90%" />
                </Box>
                <Box mx="auto" width="5%" display={{ _: "none", md: "block" }}>
                  <Skeleton height="30px" width="90%" />
                </Box>
              </FlexBox>

              <Divider mb="1rem" bg="gray.500"></Divider>

              <FlexBox justifyContent="flex-end" mb="1rem">
                <Box width="100%" maxWidth="380px">
                  <FlexBox alignItems="center" mb="10px">
                    <Typography fontSize="0.8rem" width="50%" fontWeight={600}>
                      商品税込計（税込）
                    </Typography>
                    <Typography
                      textAlign="right"
                      width="50%"
                      fontWeight={600}
                      fontSize="1.4rem"
                    >
                      <Skeleton height="30px" />
                    </Typography>
                  </FlexBox>
                  <Typography mb="10px">
                    プロモーションコードをお持ちの方
                  </Typography>
                  <FlexBox fontSize="0.8rem">
                    <Skeleton height="30px" />
                  </FlexBox>
                </Box>
              </FlexBox>

              <Divider bg="gray.500" mb="2rem"></Divider>
              <FlexBox
                justifyContent="center"
                flexDirection={{ _: "column-reverse", md: "row" }}
                maxWidth="480px"
                mx="auto"
              >
                <Box mb="10px" width="100%" mx="auto">
                  <Skeleton width="90%" height="50px" />
                </Box>
                <Box mb="10px" width="100%" mx="auto">
                  <Skeleton width="90%" height="50px" />
                </Box>
              </FlexBox>
            </Box>
          </Box>
        </main>
      </CartLayout>
    </>
  );
};

export default ShoppingCartSkeletonPage;
