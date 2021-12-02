import React, { AnchorHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { ColorProps, SpaceProps } from "styled-system";
import StyledNavLink from "./NavLinkStyle";

export interface NavLinkProps extends SpaceProps, ColorProps {
  href: string;
  as?: string;
  style?: CSSProperties;
  className?: string;
  variant?: "hover";
}

export const NavLink: React.FC<
  NavLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ href, as, children, style, className, variant, ...props }) => {
  return (
    <StyledNavLink
      className={className}
      href={href}
      style={style}
      variant={variant}
      {...props}
    >
      {children}
    </StyledNavLink>
  );
};
