import {
  Box,
  Divider,
  FlexBox,
  H5,
  Icon,
  TableRow,
  Typography,
} from "components/atoms";
import { DashBoardLayout } from "components/templates";
import React, { useEffect } from "react";
import PayjpCheckout from "hooks/PayjpCheckout";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import {
  currentUserActions,
  selectCurrentUserCard,
  selectPayjpCustomerID,
} from "redux/features";
import { currentUserApi } from "api";
import { Card } from "components/organisms";
import { toast } from "react-toastify";

const UserCardPage: React.FC = () => {
  const payjpCheckoutProps = {
    dataKey: process.env.REACT_APP_PAPJP_PUBLIC_KEY,
    dataText: "クレジットカード追加",
    dataPartial: "true",
    dataNamePlaceholder: "名前を入力してください",
    onCreatedHandler: (payload) => {
      // setCardToken(payload.token);
      saveCustomerCard(payload.token);
    },
    onFailedHandler: (payload) => {
      console.log("onFailedHandler", payload && payload.message);
    },
  };

  const payjpCustomerID = useAppSelector(selectPayjpCustomerID);
  const currentUserCard = useAppSelector(selectCurrentUserCard);

  const dispatch = useAppDispatch();

  const registerCustomerToPayjp = async () => {
    try {
      const { data } = await currentUserApi.registerPayCustomerID();
      await dispatch(currentUserActions.setPayjpCustomerID(data.id));
    } catch (error) {
      console.log(error);
      await dispatch(currentUserActions.unSetPayjpCustomerID());
      toast.error("エラーが発生しました", {
        autoClose: 7000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const saveCustomerCard = async (cardToken) => {
    try {
      const { data } = await currentUserApi.saveCard({
        token: cardToken,
      });
      await dispatch(currentUserActions.setCurrentUserCard(data.data.data));
      toast.success("カードを追加しました。", {
        autoClose: 7000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      console.log(error);
      toast.error("エラーが発生しました", {
        autoClose: 7000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const getCustomerCard = async () => {
    try {
      const { data } = await currentUserApi.getCard();
      await dispatch(currentUserActions.setCurrentUserCard(data.data.data));
    } catch (error) {
      console.log(error);
      dispatch(currentUserActions.unSetCurrentUserCard());
      toast.error("エラーが発生しました", {
        autoClose: 7000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const handleRemoveCard = async (cardID) => {
    try {
      const { data } = await currentUserApi.deleteCard({
        card_id: cardID,
      });
      await dispatch(currentUserActions.setCurrentUserCard(data.data.data));
      toast.success("カードを削除しました。", {
        autoClose: 7000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      console.log(error);
      toast.error("エラーが発生しました", {
        autoClose: 7000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  // Get and set payjp customer id
  useEffect(() => {
    if (!Boolean(payjpCustomerID)) {
      registerCustomerToPayjp();
    } else {
      getCustomerCard();
    }
  }, [payjpCustomerID]);

  return (
    <DashBoardLayout>
      <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
        アカウント設定
      </Typography>
      <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <Typography fontWeight={600} fontSize="1.2rem">
            クレジットカードの追加
          </Typography>
          <Box></Box>
        </FlexBox>
        <Divider
          height="2px"
          mb="2rem"
          width="100%"
          backgroundColor="gray.500"
        ></Divider>

        <div className="payjpButtonArea">
          <PayjpCheckout {...payjpCheckoutProps} />
        </div>

        {currentUserCard.map((item) => (
          <TableRow my="1rem" padding="6px 18px" key={item.id}>
            <FlexBox alignItems="center" m="6px">
              <Card width="42px" height="28px" mr="10px" elevation={4}>
                <img
                  width="100%"
                  src={`/assets/images/payment-methods/${item.brand.toLowerCase()}.svg`}
                  alt={item.brand}
                />
              </Card>
              <H5 className="pre" m="6px">
                {item.name}
              </H5>
            </FlexBox>
            <Typography className="pre" m="6px">
              **** **** **** {item.last4}
            </Typography>
            <Typography className="pre" m="6px">
              {item.exp_month}/{item.exp_year}
            </Typography>

            <Typography className="pre" textAlign="center" color="text.muted">
              <Box cursor="pointer" onClick={() => handleRemoveCard(item.id)}>
                <Icon variant="small" defaultcolor="currentColor">
                  delete
                </Icon>
              </Box>
            </Typography>
          </TableRow>
        ))}
      </Box>
    </DashBoardLayout>
  );
};

export default UserCardPage;
