import systemCss from "@styled-system/css";
import { colorOptions } from "interfaces";
import styled from "styled-components";
import {
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  OpacityProps,
  shadow,
  space,
  SpaceProps,
  variant,
} from "styled-system";

interface ButtonProps {
  size?: "small" | "medium" | "large" | "none";
  color?: colorOptions;
  variant?:
    | "text"
    | "outlined"
    | "contained"
    | "none"
    | "containedSecond"
    | "danger"
    | "outlinedSecond";
  fullwidth?: boolean;
}
export const Button = styled.button<
  ColorProps &
    BackgroundProps &
    BorderProps &
    SpaceProps &
    ButtonProps &
    LayoutProps &
    OpacityProps
>(
  ({ color, fullwidth }) =>
    systemCss({
      display: "flex",
      width: fullwidth ? "100%" : "unset",
      justifyContent: "center",
      alignItems: "center",
      outline: "none",
      border: "none",
      cursor: "pointer",
      padding: "1.5rem",
      fontSize: "1rem",
      fontWeight: 600,
      color: color ? `${color}.main` : "body.text",
      background: "transparent",
      transition: "all 150ms ease-in-out",
      lineHeight: 1,
      "&:focus": {
        boxShadow: 3, //shadows[3]
      },
      "&:disabled": {
        opacity: "0.7",
        // bg: "text.disabled",
        // color: "text.hint",
        // borderColor: "text.disabled",
        // cursor: "unset",
        // "svg path": {
        //   fill: "text.hint",
        // },
        // "svg polyline, svg polygon": {
        //   color: "text.hint",
        // },
      },
    }),
  ({ theme, color }) =>
    variant({
      prop: "variant",
      variants: {
        none: {
          border: "none",
          color: `${color}.second`,
          justifyContent: "flex-start",
          "&:focus": {
            boxShadow: 0, //shadows[0]
          },
        },
        text: {
          border: "none",
          color: `${color}.second`,
          "&:hover": {
            bg: color ? `${color}.light` : "gray.100",
            color: `${color}.text`,
          },
        },
        outlined: {
          color: `${color}.second`,
          border: "1px solid",
          borderColor: color ? `${color}.second` : "text.disabled",

          "&:enabled svg path": {
            fill: color
              ? `${theme.colors[color]?.main} !important`
              : "text.primary",
          },
          "&:enabled svg polyline, svg polygon": {
            color: color
              ? `${theme.colors[color]?.main} !important`
              : "text.primary",
          },
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color]?.[500]}`,
          },
          "&:hover:enabled": {
            bg: color && `${color}.second`,
            borderColor: color && `${color}.second`,
            color: color && `${color}.text`,
            "svg path": {
              fill: color
                ? `${theme.colors[color]?.text} !important`
                : "text.primary",
            },
            "svg polyline, svg polygon": {
              color: color
                ? `${theme.colors[color]?.text} !important`
                : "text.primary",
            },
          },
        },
        contained: {
          color: `${color}.text`,
          bg: `${color}.light`,
          border: "1px solid",
          borderColor: color ? `${color}.light` : "text.disabled",
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color]?.[500]}`,
          },
          "&:enabled svg path": {
            fill: color
              ? `${theme.colors[color]?.text} !important`
              : "text.primary",
          },
          "&:enabled svg polyline, svg polygon": {
            color: color
              ? `${theme.colors[color]?.text} !important`
              : "text.primary",
          },
          "&:hover": {
            opacity: "0.7",
          },
        },
        containedSecond: {
          color: `${color}.text`,
          bg: `${color}.900`,
          border: "1px solid",
          borderColor: color ? `${color}.900` : "text.disabled",
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color]?.[500]}`,
          },
          "&:enabled svg path": {
            fill: color
              ? `${theme.colors[color]?.text} !important`
              : "text.primary",
          },
          "&:enabled svg polyline, svg polygon": {
            color: color
              ? `${theme.colors[color]?.text} !important`
              : "text.primary",
          },
          "&:hover": {
            opacity: "0.7",
          },
        },
        danger: {
          color: `${color}.text`,
          bg: `${color}.dark`,
          border: "1px solid",
          borderColor: color ? `${color}.dark` : "text.disabled",
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color]?.[500]}`,
          },
          "&:enabled svg path": {
            fill: color
              ? `${theme.colors[color]?.text} !important`
              : "text.primary",
          },
          "&:enabled svg polyline, svg polygon": {
            color: color
              ? `${theme.colors[color]?.text} !important`
              : "text.primary",
          },
          "&:hover": {
            opacity: "0.7",
          },
        },
        outlinedSecond: {
          color: `${theme.colors[color]?.[900]}`,
          border: "1px solid",
          padding: "0.6rem",
          fontSize: "0.7rem",
          borderColor: `${theme.colors[color]?.[300]}`,
          background: `${theme.colors[color]?.[400]}`,
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${theme.colors[color]?.[500]}`,
          },
        },
      },
    }),
  variant({
    prop: "size",
    variants: {
      large: {
        height: "60px",
        px: 30,
      },
      medium: {
        height: "48px",
        px: 30,
      },
      small: {
        height: "40px",
        fontSize: 14,
      },
      none: {
        height: "auto",
      },
    },
  }),
  compose(color, layout, space, border, shadow)
);

Button.defaultProps = {
  size: "small",
  borderRadius: 0,
};
