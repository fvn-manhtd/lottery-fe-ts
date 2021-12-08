import {
  Box,
  Divider,
  Button,
  FlexBox,
  TextField,
  Typography,
  Paragraph,
} from "components/atoms";
import { DashBoardLayout } from "components/templates";
import * as yup from "yup";
import { useFormik } from "formik";
import { StyledModal } from "components/molecules";
import React, { useState } from "react";
import Modal from "react-modal";

const UserMyPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    email: "manh@example.com",
    password: "123123123",
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("正式なメールアドレスを入力して下さい")
      .required("メールを入力してください"),
    password: yup.string().required("パスワードを入力してください"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    });

  return (
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
        <form onSubmit={handleSubmit}>
          <Box mb="2rem" maxWidth="900px">
            <FlexBox
              alignItems="center"
              flexDirection={{ _: "column", md: "row" }}
              mb="1rem"
            >
              <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "30%" }}>
                メールアドレス
              </Box>
              <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "70%" }}>
                <TextField
                  name="email"
                  type="email"
                  fullwidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email || ""}
                  errorText={touched.email && errors.email}
                />
              </Box>
            </FlexBox>
            <FlexBox
              alignItems="center"
              flexDirection={{ _: "column", md: "row" }}
              mb="1rem"
            >
              <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "30%" }}>
                パスワード
              </Box>
              <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "70%" }}>
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
            >
              情報を変更
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
                    キャンセル
                  </Button>
                  <Button
                    mx="1rem"
                    variant="danger"
                    size="small"
                    color="primary"
                    type="submit"
                    fullwidth
                    borderRadius={5}
                  >
                    削除する
                  </Button>
                </FlexBox>
              </Box>
            </Modal>
          </FlexBox>
        </form>
      </Box>
    </DashBoardLayout>
  );
};

export default UserMyPage;