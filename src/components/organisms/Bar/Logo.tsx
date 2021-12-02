import React from "react";
import { Image, NavLink } from "components/atoms";

export const Logo: React.FC = () => {
  return (
    <NavLink href="/">
      <Image width="100%" src="/assets/images/logo.png" alt="Online Gacha" />
    </NavLink>
  );
};
