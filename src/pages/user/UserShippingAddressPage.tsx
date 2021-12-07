import {
  Box,
  Divider,
  Button,
  FlexBox,
  TextField,
  Typography,
} from "components/atoms";
import { DashBoardLayout } from "components/templates";
import { useFormik } from "formik";
import React, { useState } from "react";
import { usePostalJp } from "use-postal-jp";

const UserShippingAddressPage: React.FC = () => {
  const [value, setValue] = useState("");
  const [address, loading, error] = usePostalJp(value, value.length >= 7);

  const initialValues = {
    firstName: "",
    lastName: "",
    firstNameKana: "",
    lastNameKana: "",
    postCode: "",
    address: "",
    phone: "",
  };

  const handleYubinbangoChange = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues,
  });

  return (
    <DashBoardLayout>
      <Typography fontSize="2rem" mb="1rem">
        アカウント設定
      </Typography>
      <Box shadow={3} p="2rem" bg="gray.white" borderRadius="10px">
        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <Typography fontWeight={600} fontSize="1.2rem">
            アカウント設定 / お届け先
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
          <Box mb="2rem">
            <FlexBox
              alignItems="center"
              flexDirection={{ _: "column", md: "row" }}
              mb="1rem"
            >
              <Box
                fontWeight={600}
                mb={{ _: "1rem", md: "0" }}
                width={{ _: "100%", md: "20%" }}
              >
                お名前
              </Box>

              <FlexBox
                flexDirection={{ _: "column", md: "row" }}
                mb={{ _: "1rem", md: "0" }}
                width={{ _: "100%", md: "60%" }}
              >
                <FlexBox
                  mb={{ _: "1rem", md: "0" }}
                  width={{ _: "100%", md: "50%" }}
                  alignItems="center"
                >
                  <Box width="20%" textAlign="center" px="1rem">
                    姓
                  </Box>
                  <Box width="80%">
                    <TextField
                      name="firstName"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName || ""}
                    />
                  </Box>
                </FlexBox>

                <FlexBox
                  mb={{ _: "1rem", md: "0" }}
                  width={{ _: "100%", md: "50%" }}
                  alignItems="center"
                >
                  <Box width="20%" textAlign="center" px="1rem">
                    名
                  </Box>
                  <Box width="80%">
                    <TextField
                      name="lastName"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName || ""}
                    />
                  </Box>
                </FlexBox>
              </FlexBox>
            </FlexBox>

            <Divider
              height="1px"
              my="2rem"
              width="100%"
              backgroundColor="gray.500"
            ></Divider>

            <FlexBox
              alignItems="center"
              flexDirection={{ _: "column", md: "row" }}
              mb="1rem"
            >
              <Box
                fontWeight={600}
                mb={{ _: "1rem", md: "0" }}
                width={{ _: "100%", md: "20%" }}
              >
                フリガナ
              </Box>

              <FlexBox
                flexDirection={{ _: "column", md: "row" }}
                mb={{ _: "1rem", md: "0" }}
                width={{ _: "100%", md: "60%" }}
              >
                <FlexBox
                  mb={{ _: "1rem", md: "0" }}
                  width={{ _: "100%", md: "50%" }}
                  alignItems="center"
                >
                  <Box width="20%" textAlign="center" px="1rem">
                    セイ
                  </Box>
                  <Box width="80%">
                    <TextField
                      name="firstName"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName || ""}
                    />
                  </Box>
                </FlexBox>

                <FlexBox
                  mb={{ _: "1rem", md: "0" }}
                  width={{ _: "100%", md: "50%" }}
                  alignItems="center"
                >
                  <Box width="20%" textAlign="center" px="1rem">
                    メイ
                  </Box>
                  <Box width="80%">
                    <TextField
                      name="lastName"
                      type="text"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName || ""}
                    />
                  </Box>
                </FlexBox>
              </FlexBox>
            </FlexBox>

            <Divider
              height="1px"
              my="2rem"
              width="100%"
              backgroundColor="gray.500"
            ></Divider>

            <FlexBox
              alignItems="flex-start"
              flexDirection={{ _: "column", md: "row" }}
              mb="1rem"
            >
              <Box
                fontWeight={600}
                mb={{ _: "1rem", md: "0" }}
                width={{ _: "100%", md: "20%" }}
              >
                住所
              </Box>
              <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "60%" }}>
                <Box maxWidth="220px" mb="1rem">
                  <TextField
                    name="yubinbango"
                    placeholder=""
                    fullwidth
                    type="text"
                    onChange={handleYubinbangoChange}
                  />
                </Box>

                {!loading && (
                  <>
                    <TextField
                      name="address"
                      fullwidth
                      disabled
                      mb="1rem"
                      value={
                        (address &&
                          `${address.prefecture}${address.address1}`) ||
                        ""
                      }
                    />
                    <Typography mb="1rem" color="error">
                      {error && error.message}
                    </Typography>

                    <TextField
                      name="building"
                      fullwidth
                      mb="1rem"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.building || ""}
                    />
                    <TextField
                      name="other"
                      fullwidth
                      mb="1rem"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.other || ""}
                    />
                  </>
                )}
              </Box>
            </FlexBox>

            <Divider
              height="1px"
              my="2rem"
              width="100%"
              backgroundColor="gray.500"
            ></Divider>

            <FlexBox
              alignItems="center"
              flexDirection={{ _: "column", md: "row" }}
              mb="1rem"
            >
              <Box
                fontWeight={600}
                mb={{ _: "1rem", md: "0" }}
                width={{ _: "100%", md: "20%" }}
              >
                電話番号
              </Box>
              <Box mb={{ _: "1rem", md: "0" }} width={{ _: "100%", md: "60%" }}>
                <TextField
                  name="phone"
                  fullwidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone || ""}
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
          </FlexBox>
        </form>
      </Box>
    </DashBoardLayout>
  );
};

export default UserShippingAddressPage;
