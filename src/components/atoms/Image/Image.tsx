import styled from "styled-components";
import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

type ImageProps = {
  objectFit?: string;
};

export const Image = styled.img<
  ImageProps & SpaceProps & BorderProps & LayoutProps
>`
  ${space}
  ${border}
  ${layout}
  object-fit:${(props) => props.objectFit};
`;

Image.defaultProps = {
  display: "block",
};
