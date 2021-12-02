import React, { HTMLAttributes } from "react";
import styled from "styled-components";

import { colors } from "utils/themeColors";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  color?: string;
  htmlFor?: string;
}

const StyledLabel = styled.label<LabelProps>`
  color: ${({ color }) => color || colors.gray[900]};
  cursor: pointer;
  user-select: none;
`;

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};
