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
import { Link } from "react-router-dom";

interface StyledNavLinkProps {
  isCurrentRoute?: boolean;
  className?: string;
  [key: string]: unknown;
  variant?: "hover" | "button";
}

const StyledNavLink = styled(Link)<
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
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),

  ({ theme }) =>
    variant({
      prop: "variant",
      variants: {
        hover: {
          textAlign: "center",
          "&:hover": {
            color: `${theme.colors.gray.white} !important`,
            backgroundColor: `${theme.colors.primary.main} !important`,
          },
        },
        button: {
          width: "100%",
          borderRadius: "30px",
          textAlign: "center",
          padding: "12px 16px",
          border: "1px solid",
          bg: `${theme.colors.primary.light}`,
          color: `${theme.colors.primary.text}`,
          borderColor: `${theme.colors.primary.light}`,
          "&:hover": {
            color: `${theme.colors.primary.light} !important`,
            bg: "transparent",
          },
        },
        hover_button: {
          "&:hover": {
            opacity: 0.7,
          },
        },
        register_button: {
          width: "100%",
          textAlign: "center",
          borderRadius: "5px",
          padding: "12px 16px",
          border: "1px solid",
          bg: `${theme.colors.primary.light}`,
          color: `${theme.colors.primary.text}`,
          "&:hover": {
            color: `${theme.colors.primary.light} !important`,
            bg: "transparent",
          },
        },
      },
    }),

  compose(space, color, typography, layout)
);

export default StyledNavLink;
