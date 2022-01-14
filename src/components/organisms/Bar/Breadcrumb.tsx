import { NavLink } from "components/atoms";
import React from "react";
import { SpaceProps } from "styled-system";
import { BreadcrumbStyle } from "./BreadcrumbStyle";

export interface BreadcrumbListProps {
  description: string;
  url: string;
}

export interface BreadcrumbProps extends SpaceProps {
  breadcrumbList: BreadcrumbListProps[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  breadcrumbList,
  ...props
}) => {
  return (
    <BreadcrumbStyle
      {...props}
      itemScope={true}
      itemType="http://schema.org/BreadcrumbList"
    >
      {breadcrumbList.map((breadcrumb: BreadcrumbListProps, i: number) => (
        <li
          key={i}
          itemProp="itemListElement"
          itemScope={true}
          itemType="http://schema.org/ListItem"
        >
          <NavLink
            href={breadcrumb.url}
            itemScope={true}
            itemType="http://schema.org/Thing"
            itemProp="item"
            itemID={breadcrumb.url}
          >
            <span itemProp="name">{breadcrumb.description}</span>
          </NavLink>
          <meta itemProp="position" content={i.toString()} />
        </li>
      ))}
    </BreadcrumbStyle>
  );
};
