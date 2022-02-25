import React from "react";
import {
  Footer,
  Header,
  NewsSection,
  RegisterSection,
} from "components/organisms";
import styled from "styled-components";
import { getTheme } from "utils/utils";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import { Box } from "components/atoms";
import { useAppSelector } from "redux/app/hooks";
import { selectIsLogouting } from "redux/features";
import { LoadingBox } from "components/molecules";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayoutStyle = styled.div`
  .header-container {
    box-shadow: ${getTheme("shadows.regular")};
  }
`;

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  const isLogouting = useAppSelector(selectIsLogouting);
  return (
    <BaseLayoutStyle>
      <Header />
      <Box mt={{ _: "60px", md: "80px" }}>
        {children}

        {!isLoggedIn && <RegisterSection />}

        {!Boolean(location.pathname.includes("news")) && <NewsSection />}
      </Box>

      <Footer />

      {isLogouting && <LoadingBox />}
    </BaseLayoutStyle>
  );
};
