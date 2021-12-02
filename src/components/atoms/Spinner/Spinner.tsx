import styled, { css, keyframes } from "styled-components";
import systemCss from "@styled-system/css";

import { layout, LayoutProps, border, BorderProps } from 'styled-system'

const rotate = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

export const Spinner = styled.div<BorderProps & LayoutProps>(
  systemCss({
    borderRadius: "50%",
    transitionProperty: "transform",
  }),
  css`
    animation: ${rotate} 1.2s infinite linear;
    ${border}
    ${layout}
  `,
);
