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
import React, { useEffect, useState } from "react";
import PayjpCheckout from "hooks/PayjpCheckout";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import {
  currentUserActions,
  selectCurrentUserCard,
  selectPayjpCustomerID,
} from "redux/features";
import { currentUserApi } from "api";
import { Card } from "components/organisms";

const UserCardPage: React.FC = () => {
  const [userCard, setUserCard] = useState([]);
  const payjpCheckoutProps = {
    dataKey: process.env.REACT_APP_PAPJP_PUBLIC_KEY,
    dataText: "クレジットカード追加",
    dataPartial: "true",
    dataNamePlaceholder: "名前を入力してください",
    onCreatedHandler: (payload) => {
      console.log(payload.token);
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
    }
  };

  const getCustomerCard = async () => {
    try {
      const { data } = await currentUserApi.getCard();
      await dispatch(currentUserActions.setCurrentUserCard(data.data.data));
      if (data.data.data.length != 0) {
        await setUserCard(data.data.data);
      }
    } catch (error) {
      console.log(error);
      await dispatch(currentUserActions.unSetCurrentUserCard());
      await setUserCard([]);
    }
  };

  const handleRemoveCard = async (cardID) => {
    try {
      let obj = {
        card_id: cardID,
      };
      await currentUserApi.deleteCard(obj);
      let newCurrentUserCard = currentUserCard.filter(
        (card) => card.id != cardID
      );
      console.log(newCurrentUserCard);
      await dispatch(currentUserActions.setCurrentUserCard(newCurrentUserCard));
    } catch (error) {
      console.log(error);
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

        {userCard.map((item) => (
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
              <Icon
                variant="small"
                defaultcolor="currentColor"
                onClick={() => handleRemoveCard(item.id)}
              >
                delete
              </Icon>
            </Typography>
          </TableRow>
        ))}
      </Box>
    </DashBoardLayout>
  );
};

export default UserCardPage;
