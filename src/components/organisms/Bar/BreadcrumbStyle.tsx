import styled from "styled-components";
import { space } from "styled-system";
import { getTheme } from "utils/utils";

export const BreadcrumbStyle = styled.ol`
  margin: 0px;
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  li {
    cursor: pointer;
    display: inline-flex;
    margin-right: 5px;
    &:first-child {
      a {
        &:before {
          content: "";
          width: 18px;
          height: 18px;
          background: url("../assets/images/icons/home1.svg") center center
            no-repeat;
          background-size: cover;

          display: inline-block;
          margin-right: 5px;
        }
      }
    }

    &:last-child {
      a {
        &:after {
          content: none;
        }
      }
    }

    a {
      display: flex;
      align-items: center;
      &:after {
        content: "";
        width: 12px;
        height: 12px;
        background: url("../assets/images/icons/chevron-right.svg") center
          center no-repeat;
        background-size: cover;

        display: inline-block;
        margin-left: 5px;
      }
      &:hover {
        color: ${getTheme("colors.primary.main")};
      }
    }
  }
  ${space}
`;
