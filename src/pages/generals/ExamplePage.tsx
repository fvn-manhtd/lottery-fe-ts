import {
  Box,
  Button,
  CheckBox,
  Container,
  H1,
  H2,
  H3,
  H4,
  H5,
  Image,
  NavLink,
  Paragraph,
  RadioButton,
  Spinner,
  TextArea,
  TextField,
  Typography,
  SelectBox,
} from "components/atoms";
import { ModalComponent } from "components/molecules";
import {
  Grid,
  Card1,
  Pagination,
  LotteryRankedProduct,
  LotteryProduct,
  Lottery,
  LotteryRankDescription,
  Breadcrumb,
} from "components/organisms";
import { BaseLayout } from "components/templates";
import { colors } from "utils";
import { Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  shipping_name: "",
  shipping_email: "",
};

const checkoutSchema = yup.object().shape({
  shipping_name: yup.string().required("このフィールドを入力してください"),
  shipping_email: yup
    .string()
    .email("invalid email")
    .required("このフィールドを入力してください"),
});

const countryList = [
  { label: "Japan", value: "JP" },
  { label: "Vietnam", value: "VN" },
];

const breadcrumbList = [
  { url: "https://example.com/", description: "Home" },
  { url: "https://example.com/category", description: "Category" },
  {
    url: "https://example.com/product/name",
    description:
      "Long text Long text Long text Long text Long text Long text Long text Long text ",
  },
];

export const ExamplePage = () => {
  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <BaseLayout>
      <Box bg="gray.200">
        <Container pt={40} pb={40}>
          <Breadcrumb mb={20} breadcrumbList={breadcrumbList} />

          <H1
            fontWeight="600"
            fontSize="24px"
            color="gray.800"
            textAlign="left"
          >
            H1 Heading text
          </H1>

          <H2
            fontWeight="600"
            fontSize="20px"
            color="gray.800"
            textAlign="left"
          >
            H2 Heading text
          </H2>

          <H3
            fontWeight="600"
            fontSize="18px"
            color="gray.800"
            textAlign="left"
          >
            H3 Heading text
          </H3>

          <H4
            fontWeight="600"
            fontSize="16px"
            color="gray.800"
            textAlign="left"
          >
            H4 Heading text
          </H4>

          <H4
            fontWeight="600"
            fontSize="14px"
            color="gray.800"
            textAlign="left"
          >
            H4 Heading text
          </H4>

          <H5
            fontWeight="600"
            fontSize="12px"
            color="gray.800"
            textAlign="left"
          >
            H4 Heading text
          </H5>

          <Paragraph mb={10}>
            This is Paragraph text This is Paragraph textThis is Paragraph
            textThis is Paragraph textThis is Paragraph textThis is Paragraph
            textThis is Paragraph textThis is Paragraph textThis is Paragraph
            text
          </Paragraph>

          <Typography mb={10}>
            This is Paragraph text This <br />
            This is Paragraph text This <br />
            This is Paragraph text This <br />
            This is Paragraph text This <br />
            This is Paragraph text This <br />
            This is Paragraph text This <br />
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Card1 mb="2rem" boxShadow="none">
                  <Typography fontWeight="600" mb="1rem">
                    Shipping Address
                  </Typography>

                  <Grid container spacing={7}>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        name="shipping_name"
                        label="Full Name"
                        fullwidth
                        mb="1rem"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.shipping_name || ""}
                        errorText={
                          touched.shipping_name && errors.shipping_name
                        }
                      />
                      <TextField
                        name="shipping_email"
                        label="Email Address"
                        type="email"
                        fullwidth
                        mb="1rem"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.shipping_email || ""}
                        errorText={
                          touched.shipping_email && errors.shipping_email
                        }
                      />

                      <SelectBox
                        mb="1rem"
                        label="Country"
                        placeholder="Select Country"
                        options={countryList}
                        onChange={(e) => {
                          console.log(e);
                        }}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextArea
                        name="comment"
                        placeholder="Write a review here..."
                        fullwidth
                        rows={8}
                        mb={10}
                        border="gray.500"
                      />

                      <CheckBox
                        label="Demo Checkbox"
                        color="secondary"
                        mb="1rem"
                      />

                      <RadioButton
                        name="credit-card"
                        mb="1.5rem"
                        color="secondary"
                        label={
                          <Typography ml="6px" fontWeight="600" fontSize="12px">
                            Demo Radio Button
                          </Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </Card1>
              </form>
            )}
          </Formik>

          <Box
            mb={10}
            p={10}
            background={colors.gradient[100]}
            color="gray.white"
          >
            Gradient Color
          </Box>
          <Box
            mb={10}
            p={10}
            background={colors.gradient[200]}
            color="gray.white"
          >
            Gradient Color
          </Box>
          <Box
            mb={10}
            p={10}
            background={colors.gradient[300]}
            color="gray.white"
          >
            Gradient Color
          </Box>

          <Button mb={10} size="large" variant="contained" color="primary">
            {" "}
            This is Button
          </Button>

          <Button mb={10} size="medium" variant="outlined" color="primary">
            {" "}
            This is Button
          </Button>

          <Button mb={10} size="small" variant="text" color="primary">
            {" "}
            This is Button
          </Button>

          <Box maxWidth="150px" mx="left">
            <Image
              width="100%"
              mb={10}
              src="http://placehold.jp/320x320.png"
              alt="image"
            />
          </Box>

          <Image
            width="100%"
            mb={10}
            src="http://placehold.jp/1200x400.png"
            alt="image"
          />

          {[{ src: "http://placehold.jp/320x320.png", rank: "A賞" }].map(
            (value, index) => {
              return (
                <Box width="20%" mb={4} minWidth={180} key={index}>
                  <LotteryRankedProduct
                    src={value.src}
                    index={index}
                    rank={value.rank}
                  />
                </Box>
              );
            }
          )}

          <Box width="20%" mb={4} minWidth={180}>
            <LotteryProduct
              src="http://placehold.jp/320x320.png"
              title="商品タイトル商品タイトル"
            />
          </Box>

          <Box display="flex" flexWrap="wrap">
            <Box width="30%" mb={4} minWidth={250} mr={3}>
              <Lottery
                src="https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg"
                title="スクラッチのタイトルが入りますスクラッチのタイトルが入ります"
                status={1}
                period="販売終了日　2021年00月00日(金)"
              />
            </Box>
            <Box width="30%" mb={4} minWidth={250} mr={3}>
              <Lottery
                src="https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg"
                title="スクラッチのタイトルが入りますスクラッチのタイトルが入ります"
                status={2}
                period="販売終了日　2021年00月00日(金)"
              />
            </Box>
            <Box width="30%" mb={4} minWidth={250} mr={3}>
              <Lottery
                src="https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg"
                title="スクラッチのタイトルが入りますスクラッチのタイトルが入ります"
                status={3}
                period="販売終了日　2021年00月00日(金)"
              />
            </Box>
            <Box width="30%" mb={4} minWidth={250}>
              <Lottery
                src="https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg"
                title="スクラッチのタイトルが入りますスクラッチのタイトルが入ります"
                status={4}
                period="COMING SOON!"
              />
            </Box>
          </Box>

          <LotteryRankDescription
            title="商品タイトル"
            description="説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります。"
            rank="A賞"
            probability={2}
            products={[
              {
                src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
                title: "商品タイトル商品タイトル",
              },
              {
                src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
                title: "商品タイトル商品タイトル",
              },
              {
                src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
                title: "商品タイトル商品タイトル",
              },
              {
                src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
                title: "商品タイトル商品タイトル",
              },
            ]}
          />

          <ModalComponent
            buttonElement={<div>click me</div>}
            content={<Box width="20%" mr={4} minWidth={180}></Box>}
          ></ModalComponent>

          <Spinner
            size={60}
            border="6px solid"
            borderColor="primary.main"
            borderTop="6px solid white"
          ></Spinner>

          <NavLink
            mb={20}
            color="primary.main"
            href="https://google.com"
            as="Google"
          >
            Google
          </NavLink>

          <Pagination
            pageCount={10}
            onChange={(data) => {
              console.log(data.selected);
            }}
          />
        </Container>
      </Box>
    </BaseLayout>
  );
};
