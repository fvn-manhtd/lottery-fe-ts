import { Container } from "components/atoms";
import { BaseLayout } from "components/templates";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <BaseLayout>
      <Container pt={40} pb={40}>
        <div>This is HomePage</div>
        <Link to={"/example"}>Example Page</Link>
      </Container>
    </BaseLayout>
  );
};
