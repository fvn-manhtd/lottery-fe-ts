import React from "react";
import ReactPaginate from "react-paginate";
import { SpaceProps } from "styled-system";
import { Button, Icon } from "components/atoms";
import { StyledPagination } from "./PaginationStyle";

export interface PaginationProps extends SpaceProps {
  pageCount: number;
  marginPagesDisplayed?: number;
  pageRangeDisplayed?: number;
  onChange?: (data: { selected: number }) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  marginPagesDisplayed,
  pageRangeDisplayed,
  onChange,
  ...props
}) => {
  const handlePageChange = async (page) => {
    if (onChange) onChange(page.selected);
  };

  return (
    <StyledPagination {...props}>
      <ReactPaginate
        previousLabel={
          <Button
            className="control-button"
            overflow="hidden"
            height="auto"
            padding="6px"
          >
            <Icon defaultcolor="currentColor" variant="small">
              chevron-left
            </Icon>
          </Button>
        }
        nextLabel={
          <Button
            className="control-button"
            overflow="hidden"
            height="auto"
            padding="6px"
          >
            <Icon defaultcolor="currentColor" variant="small">
              chevron-right
            </Icon>
          </Button>
        }
        breakLabel={
          <Icon defaultcolor="currentColor" variant="small">
            triple-dot
          </Icon>
        }
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
        disabledClassName="disabled"
      />
    </StyledPagination>
  );
};
