import React from "react";
import { Footer, Header, Menu, NewsSection, RegisterSection } from "components/organisms";
import styled from "styled-components";
import { getTheme } from "utils/utils";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import { fakeNewsList as newsList } from "utils/fakeData";  // memo: get data from an higher component such as App.tsx and store them in redux store, and retrieve them here.

type BaseLayoutProps = {
  children: ReactNode;
  isShopPage?: boolean;
};

const BaseLayoutStyle = styled.div`
  .header-container {
    box-shadow: ${getTheme("shadows.regular")};
  }
`;

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children, isShopPage }) => {
  return (
    <BaseLayoutStyle>
      <Header />

      <Menu />

      {children}

      <RegisterSection/>

      <NewsSection news={newsList.news} />

      {
        isShopPage?
        <div>shopのフッター</div>:
        <Footer />
      }

    </BaseLayoutStyle>
  );
};

BaseLayout.defaultProps = {
  isShopPage:false,
}
