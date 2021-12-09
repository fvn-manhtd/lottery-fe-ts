import styled from "styled-components";
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps
} from "styled-system";
import { layoutConstant } from "utils/constants";

type ContainerProps = {
  isSPFullWidth?:boolean;
  isAlwaysFullWidth?:boolean;
};

export const Container = styled.div<
  LayoutProps & ColorProps & PositionProps & SpaceProps & FlexboxProps & ContainerProps
>`
  max-width: ${props=>props.isAlwaysFullWidth?"unset":layoutConstant.containerWidth};
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 1199px) {
    margin-left:${props=>props.isSPFullWidth || props.isAlwaysFullWidth? "unset": "1rem"};
    margin-right:${props=>props.isSPFullWidth|| props.isAlwaysFullWidth ? "unset": "1rem"};
  }

  ${color}
  ${position}
  ${flexbox}
  ${layout}
  ${space}
`;

