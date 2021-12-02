import React from "react";
import { Footer, Header, Menu } from "components/organisms";
import styled from "styled-components";
import { getTheme } from "utils/utils";

const BaseLayoutStyle = styled.div`
  .header-container {
    box-shadow: ${getTheme("shadows.regular")};
  }
`;

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <BaseLayoutStyle>
      <Header />

      <Menu />

      {children}

      <Footer />
    </BaseLayoutStyle>
  );
};
