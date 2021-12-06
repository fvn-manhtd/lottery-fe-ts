import systemCss from "@styled-system/css";
import styled from "styled-components";
import {
  typography,
  TypographyProps,
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  variant,
  layout,
  LayoutProps,
  BordersProps,
} from "styled-system";

interface StyledNavLinkProps {
  isCurrentRoute?: boolean;
  className?: string;
  [key: string]: unknown;
  variant?: "hover" | "button";
}

const StyledNavLink = styled.a<
  StyledNavLinkProps &
    SpaceProps &
    ColorProps &
    LayoutProps &
    TypographyProps &
    BordersProps
>(
  ({ isCurrentRoute, theme }) =>
    systemCss({
      position: "relative",
      color: isCurrentRoute ? theme.colors.primary.main : "auto",
      transition: "all 150ms ease-in-out",
      display: "block",
      "&:hover": {
        color: `${theme.colors.primary.main} !important`,
      },
      "& svg path": {
        fill: isCurrentRoute ? theme.colors.primary.main : "auto",
      },
      "& svg polyline, svg polygon": {
        color: isCurrentRoute ? theme.colors.primary.main : "auto",
      },
    }),

  ({ theme }) =>
    variant({
      prop: "variant",
      variants: {
        hover: {
          "&:hover": {
            color: `${theme.colors.gray.white} !important`,
            backgroundColor: `${theme.colors.primary.main} !important`,
          },
        },
        button: {
          width: "100%",
          borderRadius: "5px",
          "&:hover": {
            color: `${theme.colors.gray.white} !important`,
            backgroundColor: `${theme.colors.primary.main} !important`,
          },
        },
      },
    }),

  compose(space, color, typography, layout)
);

export default StyledNavLink;
