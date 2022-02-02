import {
  Box,
  Divider,
  Button,
  FlexBox,
  TextField,
  Typography,
  Paragraph,
  Small,
  Spinner,
} from "components/atoms";
import { DashBoardLayout } from "components/templates";
import * as yup from "yup";
import { useFormik } from "formik";
import { StyledModal } from "components/molecules";
import React, { useState } from "react";
import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { authActions, selectCurrentUser } from "redux/features";
import { currentUserApi } from "api";
import { Route as ROUTES } from "utils";
import { push } from "connected-react-router";
import { Head } from "components/organisms";

const UserMyPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUser = useAppSelector(selectCurrentUser);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const initialValues = {
    email: currentUser ? currentUser.email : "",
    password: "",
  };

  const handleLeave = async () => {
    setLoading(true);
    try {
      const { status, data } = await currentUserApi.leave();
      if (status === 200 && data.status === "success") {
        setLoading(false);
        localStorage.removeItem("isLoggedIn");
        dispatch(authActions.logout());
        dispatch(push(ROUTES.USER_LOGIN));
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      const { status, data } = await currentUserApi.account({
        password: values.password,
      });
      if (status === 200 && data.status === "success") {
        setLoading(false);
        localStorage.removeItem("isLoggedIn");
        dispatch(authActions.logout());
        dispatch(push(ROUTES.USER_LOGIN));
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      dispatch(authActions.loginFailed());
      dispatch(push(ROUTES.USER_LOGIN));
      localStorage.removeItem("isLoggedIn");
    }
  };

  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required("パスワードを入力してください")
      .min(8, "半角英数字、数字を含む8文字以上"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    });

  return (
    <>
      <Head title="マイページ" />

      <DashBoardLayout>
        <Typography fontWeight={600} fontSize="1.6rem" mb="1rem">
          アカウント設定
        </Typography>
        <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
          <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
            <Typography fontWeight={600} fontSize="1.2rem">
              アカウント設定 / 登録情報
            </Typography>
            <Box></Box>
          </FlexBox>
          <Divider
            height="2px"
            mb="2rem"
            width="100%"
            backgroundColor="gray.500"
          ></Divider>

          {loading ||
            (!(currentUser && currentUser.email) && (
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
            ))}

          {!!(currentUser && currentUser.email) && (
            <form onSubmit={handleSubmit}>
              <Box mb="2rem" maxWidth="900px">
                <FlexBox
                  alignItems="center"
                  flexDirection={{ _: "column", md: "row" }}
                  mb="1rem"
                >
                  <Box
                    mb={{ _: "1rem", md: "0" }}
                    width={{ _: "100%", md: "30%" }}
                  >
                    メールアドレス
                  </Box>
                  <Box
                    mb={{ _: "1rem", md: "0" }}
                    width={{ _: "100%", md: "70%" }}
                  >
                    <TextField
                      name="email"
                      type="email"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email || ""}
                      errorText={touched.email && errors.email}
                      disabled
                    />
                  </Box>
                </FlexBox>
                <FlexBox
                  alignItems="center"
                  flexDirection={{ _: "column", md: "row" }}
                  mb="1rem"
                >
                  <Box
                    mb={{ _: "1rem", md: "0" }}
                    width={{ _: "100%", md: "30%" }}
                  >
                    パスワード
                  </Box>
                  <Box
                    mb={{ _: "1rem", md: "0" }}
                    width={{ _: "100%", md: "70%" }}
                  >
                    <TextField
                      name="password"
                      autoComplete="on"
                      fullwidth
                      type="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password || ""}
                      errorText={touched.password && errors.password}
                    />
                  </Box>
                </FlexBox>
              </Box>

              <Divider
                height="1px"
                mb="2rem"
                width="100%"
                backgroundColor="gray.500"
              ></Divider>

              <FlexBox
                justifyContent="center"
                flexDirection="column"
                maxWidth="320px"
                mx="auto"
                alignItems="center"
              >
                <Button
                  mb="1rem"
                  variant="containedSecond"
                  size="large"
                  color="secondary"
                  type="submit"
                  fullwidth
                  borderRadius={5}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner
                        size={16}
                        border="2px solid"
                        borderColor="secondary.900"
                        borderTop="2px solid white"
                      ></Spinner>
                      <Small ml="0.5rem" color="white" fontWeight="600">
                        情報を変更中です
                      </Small>
                    </>
                  ) : (
                    <Small color="white" fontWeight="600">
                      情報を変更
                    </Small>
                  )}
                </Button>

                <Box cursor="pointer" onClick={() => setIsModalOpen(true)}>
                  <Typography
                    color="primary.dark"
                    borderBottom="1px solid"
                    borderColor="primary.dark"
                  >
                    アカウントを削除
                  </Typography>
                </Box>

                <Modal
                  isOpen={isModalOpen}
                  style={StyledModal("180px", "600px")}
                  ariaHideApp={false}
                  onRequestClose={() => {
                    setIsModalOpen(false);
                  }}
                >
                  <Box
                    textAlign="center"
                    p="2rem"
                    justifyContent="center"
                    minWidth={180}
                  >
                    <Typography
                      color="primary.second"
                      fontWeight={600}
                      fontSize="1.4rem"
                      mb="2rem"
                    >
                      アカウントを削除しますか？
                    </Typography>

                    <Paragraph fontSize="1rem" mb="2rem">
                      アカウントを削除するとお気に入り情報や
                      <br />
                      ご登録情報がすべて削除されます。
                    </Paragraph>

                    <FlexBox maxWidth="">
                      <Button
                        mx="1rem"
                        variant="containedSecond"
                        size="small"
                        color="secondary"
                        type="submit"
                        fullwidth
                        borderRadius={5}
                        onClick={() => {
                          setIsModalOpen(false);
                        }}
                      >
                        <Small color="white" fontWeight="600">
                          キャンセル
                        </Small>
                      </Button>
                      <Button
                        mx="1rem"
                        variant="danger"
                        size="small"
                        color="primary"
                        type="submit"
                        fullwidth
                        borderRadius={5}
                        onClick={() => handleLeave()}
                      >
                        {loading ? (
                          <>
                            <Spinner
                              size={16}
                              border="2px solid"
                              borderColor="primary.dark"
                              borderTop="2px solid white"
                            ></Spinner>
                            <Small ml="0.5rem" color="white" fontWeight="600">
                              削除中です
                            </Small>
                          </>
                        ) : (
                          <Small color="white" fontWeight="600">
                            削除する
                          </Small>
                        )}
                      </Button>
                    </FlexBox>
                  </Box>
                </Modal>
              </FlexBox>
            </form>
          )}
        </Box>
      </DashBoardLayout>
    </>
  );
};

export default UserMyPage;
