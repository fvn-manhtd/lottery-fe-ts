import React from "react";
import { Image, NavLink } from "components/atoms";
import { Route as ROUTES } from "utils";

export const Logo: React.FC = () => {
  return (
    <NavLink href={ROUTES.TOP}>
      <Image width="100%" src="/assets/images/logo.png" alt="Online Gacha" />
    </NavLink>
  );
};
