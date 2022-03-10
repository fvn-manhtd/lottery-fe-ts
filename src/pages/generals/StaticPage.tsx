import { useGetStaticPageQuery } from "api";
import { Box, Container, H3 } from "components/atoms";
import { Breadcrumb, Head } from "components/organisms";
import { BaseLayout } from "components/templates";
import { push } from "connected-react-router";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "redux/app/hooks";
import { Route as ROUTES } from "utils";

type StaticPageParams = {
  name: string;
};

const StaticPage = () => {
  const { name } = useParams<StaticPageParams>();

  const {
    data: staticData,
    isFetching,
    isLoading,
    isError,
  } = useGetStaticPageQuery(name);
  const dispatch = useAppDispatch();

  if (isError) {
    dispatch(push(ROUTES.ERROR));
  }

  const breadcrumbList = [
    { url: ROUTES.HOME, description: "ホーム" },
    {
      url: "",
      description:
        staticData && staticData?.label == name
          ? staticData.title
          : "STATIC PAGE",
    },
  ];

  return (
    <>
      <Head
        title={
          staticData && staticData?.label == name
            ? staticData.title
            : "STATIC PAGE"
        }
      />
      <BaseLayout>
        <main>
          <Container pt="5px">
            <Breadcrumb my={20} breadcrumbList={breadcrumbList} />

            {(isLoading || isFetching || staticData == undefined) && (
              <>
                <Box
                  pt={{ _: 3, md: 40 }}
                  pb={{ _: 3, md: 80 }}
                  paddingX={{ _: 2, md: 6 }}
                >
                  <Skeleton height="200px"></Skeleton>
                </Box>
              </>
            )}
            {(!isLoading || !isFetching) && staticData?.label == name && (
              <Box
                pt={{ _: 3, md: 40 }}
                pb={{ _: 3, md: 80 }}
                paddingX={{ _: 2, md: 6 }}
              >
                <Box bg="white" shadow={4} p={{ _: "2rem", md: "3rem" }}>
                  <H3 mb={2} textAlign="center">
                    {staticData?.title}
                  </H3>

                  <div dangerouslySetInnerHTML={{ __html: staticData?.note }} />
                </Box>
              </Box>
            )}
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};

export default StaticPage;
