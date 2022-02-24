import {
  Box,
  Container,
  FlexBox,
  Paragraph,
  NavLink,
  Spinner,
} from "components/atoms";
import { Breadcrumb, Head, Pagination } from "components/organisms";
import { BaseLayout } from "components/templates";
import { useAppDispatch } from "redux/app/hooks";
import { formatJapanDate, Route as ROUTES } from "utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { push } from "connected-react-router";
import { useState } from "react";
import { useGetNewsListQuery } from "api";

const NewsListPage = () => {
  const [page, setPage] = useState(1);
  const { data: listNews, isLoading, isFetching } = useGetNewsListQuery(page);

  const dispatch = useAppDispatch();

  const breadcrumbList = [
    { url: ROUTES.HOME, description: "ホーム" },
    { url: "", description: "ニュース" },
  ];

  const handleChangePagination = (data) => {
    dispatch(push(`${ROUTES.NEWS_LIST}?page=${data}`));
    setPage(data);
  };

  return (
    <>
      <Head title="ニュース" />
      <BaseLayout>
        <main>
          <Container pt="5px">
            <Breadcrumb my={20} breadcrumbList={breadcrumbList} />

            {listNews === undefined && (isLoading || isFetching) && (
              <Box mb="1rem">
                <Skeleton height="200px"></Skeleton>
              </Box>
            )}

            <Box paddingY={{ _: 3, md: 5 }} paddingX={{ _: 2, md: 40 }}>
              {listNews?.news.map((value) => {
                return (
                  <FlexBox
                    key={value.id}
                    mb={{ _: 3, md: "2rem" }}
                    flexDirection={{ _: "column", md: "inherit" }}
                  >
                    <Paragraph mr={{ _: 0, md: 4 }} minWidth="10rem">
                      {formatJapanDate(value.date)}
                    </Paragraph>
                    {value.external != null && (
                      <a href={value.external} target="_blank">
                        {value.title}
                      </a>
                    )}
                    {value.external == null && (
                      <NavLink href={"/news/" + value.id}>
                        {value.title}
                      </NavLink>
                    )}
                  </FlexBox>
                );
              })}

              {listNews && (isLoading || isFetching) && (
                <Spinner
                  size={30}
                  border="2px solid"
                  borderColor="primary.main"
                  borderTop="2px solid white"
                ></Spinner>
              )}

              {listNews && (
                <Box
                  display="flex"
                  justifyContent="center"
                  width="90%"
                  margin="1rem auto"
                >
                  <Pagination
                    onChange={(data) => handleChangePagination(data)}
                    pageCount={listNews?.pagination.last_page}
                  />
                </Box>
              )}
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};

export default NewsListPage;
