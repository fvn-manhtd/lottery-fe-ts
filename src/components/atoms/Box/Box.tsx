import styled, { CSSProperties } from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type BoxProps = {
  shadow?: number;
  cursor?: string;
  transition?: string;
  transform?: string;
  style?: CSSProperties;
};

export const Box = styled.div<
  BoxProps &
    LayoutProps &
    ColorProps &
    PositionProps &
    SpaceProps &
    FlexProps &
    BorderProps &
    FlexboxProps &
    TypographyProps &
    BackgroundProps
>(
  ({ shadow, cursor, transition, transform, theme }) => ({
    boxShadow: theme.shadows[shadow],
    cursor,
    transition,
    transform,
  }),
  compose(
    layout,
    space,
    color,
    position,
    flexbox,
    flex,
    border,
    typography,
    background
  )
);

Box.defaultProps = {
  shadow: 0,
  cursor: "unset",
};
