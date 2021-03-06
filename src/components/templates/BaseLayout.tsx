import React from "react";
import { Footer, Header, Menu, NewsSection, RegisterSection } from "components/organisms";
import styled from "styled-components";
import { getTheme } from "utils/utils";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import { fakeNewsList as newsList } from "utils/fakeData";  

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayoutStyle = styled.div`
  .header-container {
    box-shadow: ${getTheme("shadows.regular")};
  }
`;

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <BaseLayoutStyle>
      <Header />

      <Menu />

      {children}

      <RegisterSection/>

      <NewsSection news={newsList.news} />

      <Footer />

    </BaseLayoutStyle>
  );
};

