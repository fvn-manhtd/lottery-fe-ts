import styled from "styled-components";
import { getTheme, theme } from "utils";

interface MobileMenuStyleProps {
  position?: "left" | "right" | "top";
  open: boolean;
  width?: number;
  scroll?: boolean;
}

export const MobileMenuStyle = styled.div<MobileMenuStyleProps>`
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 990;

  background: rgba(0, 0, 0, 0.53);

  @media only screen and (min-width: ${theme.breakpoints.lg}) {
    top: 0;
  }

  @keyframes slide {
    from {
      ${({ position }) => position}: -${(props) => props.width}px;
    }
    to {
      ${({ position }) => position}: 0;
    }
  }

  .mobile-menu-content {
    position: absolute;
    background-color: ${getTheme("colors.body.paper")};
    ${({ position }) => position}: 0;
    width: 100%;
    max-width: 100%;
    overflow: ${({ scroll }) => (scroll ? "auto" : "hidden")};
    animation: slide 250ms linear;
  }

  & ~ .cursor-pointer {
    cursor: pointer;
  }
`;
