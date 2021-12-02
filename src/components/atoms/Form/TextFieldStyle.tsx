import systemCss from "@styled-system/css";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { color, compose, space, SpaceProps } from "styled-system";
import { TextFieldProps } from "./TextField";

import { colors } from "utils/themeColors";

export const SyledTextField = styled.input<
  InputHTMLAttributes<HTMLInputElement> & TextFieldProps
>(
  (props) =>
    systemCss({
      padding: "8px 12px",
      height: "40px",
      fontSize: "inherit",
      color: "body.text",
      borderRadius: "5px",
      border: "1px solid",
      borderColor: colors.gray[500],
      width: props.fullwidth ? "100%" : "inherit",
      outline: "none",
      fontFamily: "inherit",

      "&:hover": {
        borderColor: colors.gray[500],
      },
      "&:focus": {
        outlineColor: "primary.main",
        borderColor: "primary.main",
        // boxShadow: `1px 1px 8px 4px rgba(${convertHexToRGB(
        //   props.theme.colors.primary.light
        // )}, 0.1)`,
      },
      "&::placeholder": {
        color: colors.gray[300],
      },
    }),
  compose(color)
);

export const TextFieldWrapper = styled.div<TextFieldProps & SpaceProps>(
  (props) =>
    systemCss({
      position: "relative",
      width: props.fullwidth ? "100%" : "inherit",

      label: {
        display: "block",
        marginBottom: "6px",
        fontSize: "0.875rem",
      },

      small: {
        display: "block",
        color: "error.main",
        marginTop: "0.25rem",
        marginLeft: "0.25rem",
      },

      ".end-adornment": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "0.25rem",
      },
    }),
  compose(color, space)
);
