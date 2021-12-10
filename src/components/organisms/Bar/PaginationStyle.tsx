import styled from "styled-components";
import { space } from "styled-system";
import { getTheme } from "utils/utils";

export const StyledPagination = styled.div`
  .pagination {
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    list-style-type: none;
    padding: 0px;

    li {
      cursor: pointer;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        margin: 0px 5px;
        border-radius: 5px;
        outline: none;
        color: ${getTheme("colors.gray.900")};
        background-color: ${getTheme("colors.gray.500")};
        @media only screen and (max-width: 450px) {
          margin: 4px;
        }
      }
      &:not(.active):hover {
        a {
          color: ${getTheme("colors.gray.white")};
          background-color: ${getTheme("colors.gray.900")};
        }
      }
    }
    .active {
      cursor: none;
      a {
        color: ${getTheme("colors.gray.white")};
        background-color: ${getTheme("colors.gray.900")};
      }
    }

    .disabled {
      .control-button {
        cursor: none;
        color: ${getTheme("colors.gray.900")};
        &:hover {
          color: ${getTheme("colors.gray.white")};
          background-color: ${getTheme("colors.gray.900")};
        }
      }
    }
  }

  .control-button {
    height: 32px;
    width: 32px;
    min-width: 32px;
    border-radius: 5px;
    color: ${getTheme("colors.gray.900")};
    background-color: ${getTheme("colors.gray.500")};
    &:hover {
      color: ${getTheme("colors.gray.white")};
      background-color: ${getTheme("colors.gray.900")};
    }
  }

  ${space}
`;
