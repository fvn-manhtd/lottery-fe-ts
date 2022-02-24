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
import React, { useEffect, useRef, useState } from "react";
import PayjpCheckout from "hooks/PayjpCheckout";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import {
  currentUserActions,
  selectCurrentUserCard,
  selectDefaultCardID,
} from "redux/features";
import { currentUserApi } from "api";
import { Card, Head } from "components/organisms";
import { toast } from "react-toastify";
import { UserCard1 } from "models";

const UserCardPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const isScreenMounted = useRef(true);
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

  const getCustomerCard = async () => {
    setLoading(true);
    try {
      const res = await currentUserApi.getCard();
      const data: UserCard1 = res.data.data;
      if (!isScreenMounted.current) return;
      dispatch(currentUserActions.setCurrentUserCard(data.cards));
      dispatch(currentUserActions.setDefaultCard(data.default_card));
      setLoading(false);
    } catch (error) {
      console.log(error);
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
      toast.success("カードは登録できました。", {
        autoClose: 7000,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
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
      toast.success("カードは削除できました。", {
        autoClose: 7000,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
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
      toast.success("カードは追加できました。", {
        autoClose: 7000,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Get and set payjp customer id
  useEffect(() => {
    getCustomerCard();

    return () => {
      isScreenMounted.current = false;
    };
  }, []);

  return (
    <>
      <Head title="クレジットカード" />

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
              カードはありません。
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
                    {defaultCard && String(defaultCard) !== String(item.id) && (
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
    </>
  );
};

export default UserCardPage;
