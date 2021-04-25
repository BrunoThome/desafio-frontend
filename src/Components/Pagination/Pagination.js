import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setPage } from '../../redux/core/slices/filters';
import ReactPaginate from 'react-paginate';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;

  & .pagination {
    display: flex;

    & .page,
    & .breakButton,
    & .previousButton,
    & .nextButton {
      height: 40px;
      width: 40px;
      display: flex;
      outline: none;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      border: 1px solid #333;
      font-family: var(--type-first);
      cursor: pointer;
      box-sizing: border-box;
      transition: 0.1s;

      &:hover,
      &:focus {
        background-color: #333;
        color: #fff;
      }
    }

    & .previous.disabled .previousButton,
    & .next.disabled .nextButton {
      border: 1px solid #eee;
      color: #333;
      background: #ccc;
      cursor: default;
      &:hover {
        color: #333;
      }
    }

    & .page.active {
      background-color: #333;
      color: #fff;
    }
  }
`;

const Pagination = () => {
  const { filters, movies } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = React.useState(1);
  React.useEffect(() => {
    setTotalPages(Math.ceil(movies.data.total / filters._limit));
    window.scrollTo(0, 0);
  }, [filters, movies]);

  return (
    <StyledPagination>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed="3"
        marginPagesDisplayed="1"
        previousLabel={<BsArrowLeftShort />}
        nextLabel={<BsArrowRightShort />}
        breakLabel="..."
        breakLinkClassName="breakButton"
        initialPage={filters._page - 1}
        onPageChange={(data) => {
          dispatch(setPage(Number(data.selected) + 1));
        }}
        containerClassName="pagination"
        pageLinkClassName="page"
        activeLinkClassName="active"
        previousLinkClassName="previousButton"
        nextLinkClassName="nextButton"
        disabledClassName="disabled"
      />
    </StyledPagination>
  );
};

export default Pagination;
