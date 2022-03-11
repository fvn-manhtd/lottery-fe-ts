import React, { ButtonHTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { colorOptions } from "../../../interfaces";
import StyledIcon from "./IconStyle";

export interface IconProps {
  size?: string;
  children: string;
  transform?: string;
  variant?: "small" | "medium" | "large";
  color?: colorOptions;
  defaultcolor?: "currentColor" | "auto" | "none";
}

export const Icon: React.FC<
  IconProps & SpaceProps & ButtonHTMLAttributes<IconProps>
> = ({ children, ...props }: IconProps) => {
  return (
    <StyledIcon
      src={`${process.env.REACT_APP_MALL_IMAGE_ASSET_PATH}assets/images/icons/${children}.svg`}
      fallback={() => <span>{children?.trim()}</span>}
      {...props}
    />
  );
};

Icon.defaultProps = {
  variant: "medium",
  defaultcolor: "currentColor",
};
