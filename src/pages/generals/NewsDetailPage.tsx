import { Box, Container, Paragraph, H3, Button } from "components/atoms";
import { BaseLayout } from "components/templates";
import { useParams } from "react-router-dom";
import { formatJapanDate, Route as ROUTES } from "utils";
import { Breadcrumb, Head } from "components/organisms";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppDispatch } from "redux/app/hooks";
import { push } from "connected-react-router";
import { useGetNewsByIdQuery } from "api";

export type NewsParams = {
  id: string;
  title: string;
};

const NewsDetailPage = () => {
  const { id, title } = useParams<NewsParams>();
  const dispatch = useAppDispatch();

  const {
    data: newsItem,
    isLoading,
    isFetching,
    isError,
  } = useGetNewsByIdQuery(Number(id));

  if (isError) {
    dispatch(push(ROUTES.ERROR));
  }

  const breadcrumbList = [
    { url: ROUTES.HOME, description: "ホーム" },
    { url: ROUTES.NEWS_LIST, description: "ニュース" },
    { url: "", description: title },
  ];

  return (
    <>
      <Head title={title} />

      <BaseLayout>
        <main>
          <Container pt="5px">
            <Breadcrumb my={20} breadcrumbList={breadcrumbList} />

            {newsItem === undefined && (isLoading || isFetching) && (
              <Box paddingY={{ _: 3, md: 5 }} paddingX={{ _: 2, md: 40 }}>
                <Skeleton height="200px"></Skeleton>
              </Box>
            )}

            {newsItem && (
              <Box paddingY={{ _: 3, md: 5 }} paddingX={{ _: 2, md: 40 }}>
                <H3 mb={2}>{newsItem.title}</H3>
                <Paragraph mb={2} textAlign="right">
                  {formatJapanDate(newsItem.date)}
                </Paragraph>
                <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
              </Box>
            )}

            <Button
              variant="outlined"
              color="primary"
              mt="0.5rem"
              mb="4rem"
              mx="auto"
              px="3rem"
              onClick={() => dispatch(push(ROUTES.NEWS_LIST))}
              borderRadius="4rem"
            >
              一覧へ戻る
            </Button>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};

export default NewsDetailPage;
