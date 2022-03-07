import {
  Box,
  Button,
  FlexBox,
  Span,
  IconPng,
  Typography,
} from "components/atoms";
import { CartLayout } from "components/templates";
import { Stepper } from "components/organisms";
import styled from "styled-components";
import { stepperList } from "utils";
import { theme, Route as ROUTES } from "utils";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { push } from "connected-react-router";
import { selectStoreObject } from "redux/features";
import { OrderComplete } from "models";

const StyledFinishButton = styled(Button)`
  background-color: ${theme.colors.primary.light};
  padding: 1.5rem 8rem 1.5rem 8rem;
  border: none;
  box-shadow: 0 4px 0 ${theme.colors.primary.main};
  align-items: flex-end;
  &:hover {
    opacity: 0.7;
  }
`;

const OrderCompletePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const orderCompleteData: OrderComplete = useAppSelector(selectStoreObject);

  return (
    <CartLayout>
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
            <Stepper stepperList={stepperList} selectedStep={4} />
          </Box>

          <Box mb="1rem" mx="auto" width="100px">
            <IconPng>complete-color</IconPng>
          </Box>
          <Typography textAlign="center" as="h1">
            ご注文ありがとうございます!
          </Typography>
          <Typography textAlign="center" as="p" mb="2rem">
            下のボタンを押して抽選結果を確認しましょう!
          </Typography>
          <FlexBox
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            maxWidth="480px"
            mx="auto"
          >
            <StyledFinishButton
              width="100%"
              mb="1rem"
              size="large"
              color="gray"
              variant="outlinedSecond"
              borderRadius={5}
              onClick={() => dispatch(push(ROUTES.EFFECT_START))}
            >
              <Span color="primary.yellow" fontSize="1.5rem">
                {orderCompleteData?.number_of_times} 回くじ
              </Span>
              <Span color="primary.text" fontSize="1rem">
                をひく
              </Span>
            </StyledFinishButton>
            {/* <StyledNewButton
              width="100%"
              size="medium"
              color="secondary"
              variant="contained"
              borderRadius={5}
              onClick={() => history.push("/")}
            >
              <Span fontSize="1rem">もう一度購入する</Span>
            </StyledNewButton> */}
          </FlexBox>
        </Box>
      </Box>
    </CartLayout>
  );
};

export default OrderCompletePage;
