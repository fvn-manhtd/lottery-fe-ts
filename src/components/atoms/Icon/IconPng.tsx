import React, { ButtonHTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { Image } from "components/atoms";

export interface IconPngProps {
  size?: string;
  children: string;
  transform?: string;
}

export const IconPng: React.FC<
  IconPngProps & SpaceProps & ButtonHTMLAttributes<IconPngProps>
> = ({ children }: IconPngProps) => {
  return (
    <>
      <Image
        width="100%"
        src={`${process.env.REACT_APP_MALL_IMAGE_ASSET_PATH}/assets/images/icons/${children}.png`}
        alt="Icon"
      />
    </>
  );
};
