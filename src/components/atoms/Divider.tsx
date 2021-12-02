import styled from "styled-components";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { getTheme } from "utils/utils";

export const Divider = styled.div<SpaceProps & LayoutProps & ColorProps>`
  height: 1px;
  background-color: ${getTheme("colors.gray.200")};
  ${color}
  ${space}
  ${layout}
`;
