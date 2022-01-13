import {
  Box,
  Divider,
  FlexBox,
  H5,
  Icon,
  TableRow,
  Typography,
  Spinner,
  Small,
} from "components/atoms";
import { DashBoardLayout } from "components/templates";
import React, { useEffect, useState } from "react";
import PayjpCheckout from "hooks/PayjpCheckout";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import {
  currentUserActions,
  selectCurrentUserCard,
  selectDefaultCardID,
} from "redux/features";
import { currentUserApi } from "api";
import { Card } from "components/organisms";
import { toast } from "react-toastify";

const UserCardPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const payjpCheckoutProps = {
    dataKey: process.env.REACT_APP_PAPJP_PUBLIC_KEY,
    dataText: "クレジットカード追加",
    dataPartial: "true",
    dataNamePlaceholder: "名前を入力してください",
    onCreatedHandler: (payload) => {
      saveCustomerCard(payload.token);
    },
    onFailedHandler: (payload) => {
      console.log("onFailedHandler", payload && payload.message);
    },
  };

  const currentUserCard = useAppSelector(selectCurrentUserCard);
  const defaultCard = useAppSelector(selectDefaultCardID);

  const dispatch = useAppDispatch();

  const registerCustomerToPayjp = async () => {
    try {
      await currentUserApi.registerPayCustomerID();
    } catch (error) {
      console.log(error);
      toast.error("PayJPが登録できませんでした。", {
        autoClose: 7000,
      });
    }
  };

  const getCustomerCard = async () => {
    setLoading(true);
    try {
      const { data } = await currentUserApi.getCard();
      dispatch(currentUserActions.setCurrentUserCard(data.data.cards));
      dispatch(currentUserActions.setDefaultCard(data.data.default_card));
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("顧客リストカードが取得できませんでした。", {
        autoClose: 7000,
      });
      setLoading(false);
    }
  };

  const saveCustomerCard = async (cardToken) => {
    setLoading(true);
    try {
      const { data } = await currentUserApi.saveCard({
        token: cardToken,
      });
      dispatch(currentUserActions.setCurrentUserCard(data.data.cards));
      dispatch(currentUserActions.setDefaultCard(data.data.default_card));
      toast.success("カードが登録できました。", {
        autoClose: 7000,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("カードが登録できませんでした。", {
        autoClose: 7000,
      });
      setLoading(false);
    }
  };

  const handleRemoveCard = async (cardID) => {
    setLoading(true);
    try {
      const { data } = await currentUserApi.deleteCard({
        card_id: cardID,
      });
      dispatch(currentUserActions.removeOneCard(cardID));
      dispatch(currentUserActions.setDefaultCard(data.data.default_card));
      toast.success("カードが削除できました。", {
        autoClose: 7000,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("カードが削除できませんでした", {
        autoClose: 7000,
      });
      setLoading(false);
    }
  };

  const handleSetDefaultCard = async (cardID) => {
    setLoading(true);
    try {
      const { data } = await currentUserApi.setDefaultCard({
        card_id: cardID,
      });
      dispatch(currentUserActions.setDefaultCard(data.data.card_default_id));
      toast.success("カードを設定しました。", {
        autoClose: 7000,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("カードを設定できません", {
        autoClose: 7000,
      });
      setLoading(false);
    }
  };

  // Get and set payjp customer id
  useEffect(() => {
    console.log(Boolean(defaultCard));
    if (Boolean(defaultCard)) {
      registerCustomerToPayjp();
    } else {
      getCustomerCard();
    }
  }, [defaultCard]);

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

        <Box mb="1rem">
          <PayjpCheckout {...payjpCheckoutProps} />
        </Box>

        <FlexBox display={{ _: "none", lg: "block" }}>
          <TableRow my="1rem" padding="6px 18px">
            <Typography fontWeight={700} className="pre" m="6px">
              ブランド/カード名
            </Typography>
            <Typography fontWeight={700} className="pre" m="6px">
              カード番号
            </Typography>
            <Typography fontWeight={700} className="pre" m="6px">
              月/年
            </Typography>

            <Typography fontWeight={700} className="pre" textAlign="center">
              ステータス
            </Typography>

            <Typography fontWeight={700} className="pre" textAlign="center">
              削除
            </Typography>
          </TableRow>
        </FlexBox>

        {loading && (
          <>
            <Box mt="1rem" mb="1rem">
              <Spinner
                size={20}
                border="1px solid"
                borderColor="primary.main"
                borderTop="1px solid white"
              ></Spinner>
            </Box>
          </>
        )}

        {!loading && currentUserCard && currentUserCard.length === 0 && (
          <Box mt="1rem" mb="1rem">
            カードがありません。
          </Box>
        )}

        {currentUserCard &&
          currentUserCard.map((item) => (
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

              <Typography
                mx="auto"
                className="pre"
                textAlign="center"
                color="text.muted"
              >
                <Box display="flex" justifyContent="center">
                  {!defaultCard && (
                    <Box
                      cursor="pointer"
                      bg="gray.300"
                      borderRadius="50%"
                      p="0.6rem"
                      color="text.muted"
                      onClick={() => handleSetDefaultCard(item.id)}
                    >
                      <Icon variant="small" defaultcolor="currentColor">
                        edit
                      </Icon>
                    </Box>
                  )}

                  {defaultCard && String(defaultCard) == String(item.id) && (
                    <Small>デフォルトカード</Small>
                  )}
                </Box>
              </Typography>

              <Typography
                mx="auto"
                className="pre"
                textAlign="center"
                color="text.muted"
              >
                <Box display="flex" justifyContent="center">
                  <Box
                    cursor="pointer"
                    bg="gray.300"
                    borderRadius="50%"
                    p="0.6rem"
                    color="text.muted"
                    onClick={() => handleRemoveCard(item.id)}
                  >
                    <Icon variant="small" defaultcolor="currentColor">
                      delete
                    </Icon>
                  </Box>
                </Box>
              </Typography>
            </TableRow>
          ))}
      </Box>
    </DashBoardLayout>
  );
};

export default UserCardPage;
