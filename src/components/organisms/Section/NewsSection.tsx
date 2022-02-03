import { useGetNewsListQuery } from "api";
import {
  Box,
  Container,
  FlexBox,
  H5,
  NavLink,
  Paragraph,
  Typography,
} from "components/atoms";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatJapanDate } from "utils";

export const NewsSection = () => {
  const { data: listNews, isLoading, isFetching } = useGetNewsListQuery(1);

  return (
    <section>
      <Container bg="gray.900" color="white" isAlwaysFullWidth={true}>
        <Container p={{ _: 0, md: 40 }} paddingY={{ _: 4, md: 40 }}>
          <FlexBox
            mb={{ _: 3, md: 4 }}
            alignItems="center"
            flexDirection={{ _: "column", md: "inherit" }}
          >
            <Typography
              as="h1"
              fontSize={{ _: "2rem", md: "4rem" }}
              lineHeight={1}
              m={0}
            >
              News
            </Typography>
            <H5 mt={{ _: 0, md: 2 }} ml={{ _: 0, md: 4 }}>
              お知らせ
            </H5>
          </FlexBox>
          {listNews === undefined && (isLoading || isFetching) && (
            <Box mb="1rem">
              <Skeleton height="200px"></Skeleton>
            </Box>
          )}

          {listNews?.news.map((value) => {
            return (
              <FlexBox
                key={value.id}
                mb={{ _: 3, md: "2rem" }}
                flexDirection={{ _: "column", md: "inherit" }}
              >
                <Paragraph mr={{ _: 0, md: 5 }} minWidth="10rem">
                  {formatJapanDate(value.date)}
                </Paragraph>
                {value.external != null && (
                  <Box color="gray.white">
                    <a
                      className="news-link"
                      href={value.external}
                      target="_blank"
                    >
                      {value.title}
                    </a>
                  </Box>
                )}
                {value.external == null && (
                  <NavLink color="white" href={"/news/" + value.id}>
                    {value.title}
                  </NavLink>
                )}
              </FlexBox>
            );
          })}
          <Box textAlign="right">
            <NavLink href="/news-list" color="white">
              一覧を見る
            </NavLink>
          </Box>
        </Container>
      </Container>
    </section>
  );
};
