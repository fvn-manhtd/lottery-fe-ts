import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteMetaSetting } from "utils";

interface HeadProps {
  title: string;
}

export const Head: React.FC<HeadProps> = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <Helmet
        defer={false}
        title={
          location.pathname == "/"
            ? title
            : title + " | " + siteMetaSetting.title
        }
        meta={[{ name: "description", content: siteMetaSetting.description }]}
      />
    </>
  );
};
