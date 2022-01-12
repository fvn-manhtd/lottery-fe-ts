import React, { AnchorHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { ColorProps, SpaceProps, TypographyProps } from "styled-system";
import StyledNavLink from "./NavLinkStyle";

export interface NavLinkProps extends SpaceProps, ColorProps, TypographyProps {
  href: string;
  as?: string;
  style?: CSSProperties;
  className?: string;
  variant?: "hover" | "button";
}

export const NavLink: React.FC<
  NavLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ href, as, children, style, className, variant, ...props }) => {
  return (
    <StyledNavLink
      className={className}
      to={href}
      style={style}
      variant={variant}
      {...props}
    >
      {children}
    </StyledNavLink>
  );
};
