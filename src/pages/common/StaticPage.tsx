import { Box, Container, H3  } from "components/atoms";
import { BaseLayout } from "components/templates";
import "pure-react-carousel/dist/react-carousel.es.css";

type StaticPageProps = {
  title:string;
  contents: any
};

export const StaticPage: React.FC<StaticPageProps> = ({ title, contents }) => {

  return (
    <>
      <BaseLayout>
        <main>
          <Container>
            <Box 
              paddingY={{ _: 3, md: 40 }}
              paddingX={{ _: 2, md: 6 }}>
              <Box
                bg="white"
                shadow={4}
                p={{_:"2rem",md:"3rem"}}>
                  <H3
                    mb={2}
                    textAlign="center">{title}</H3>
                  <>
                    {contents}
                  </>
                </Box>
            </Box>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
};
