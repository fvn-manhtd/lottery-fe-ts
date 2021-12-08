import React from "react";
import { Footer, Header, Menu } from "components/organisms";
import styled from "styled-components";
import { getTheme } from "utils/utils";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";

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
