import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { usePagination } from 'react-pagination-hook';

interface IProps {
  noOfItems: number;
  setPage: Function;
}

export const Pager: React.FC<IProps> = ({ noOfItems=0, setPage }) => {
  const limit = noOfItems / 10;
  const numberOfPages = noOfItems % 10 ? limit + 1 : limit;
  const { activePage, isFirst, isLast, hasPrevious, hasNext, visiblePieces, goToPage } = usePagination({
    initialPage: 1,
    maxButtons: 2,
    numberOfPages,
  });

  useEffect(() => {
    setPage(activePage);
  }, [activePage, setPage]);

  return (
    <nav aria-label="Page navigation" className="flex justify-center my-10">
      <ul className="inline-flex space-x-2 items-center">
        <li>
          <button
            data-testid="prev-button"
            className={`flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-150 border rounded focus:outline-none hover:bg-gray-100 ${
              isFirst && 'cursor-not-allowed'
            } `}
            onClick={() => {
              hasPrevious && goToPage(activePage - 1);
              !isFirst && window.scrollTo(0, 0);
            }}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
            </svg>
          </button>
        </li>
        {visiblePieces
          .filter((item) => item.type === 'page-number')
          .map(({ pageNumber }: any, index: number) => (
            <li key={index}>
              <button
                data-testid={`pageNumber-${pageNumber}`}
                className={`w-10 h-10 ${
                  pageNumber === activePage
                    ? 'text-white bg-gray-900 border border-r-0 border-gray-600'
                    : 'text-gray-600 hover:bg-gray-100'
                } transition-colors duration-150 rounded focus:outline-none`}
                onClick={() => {
                  goToPage(pageNumber);
                  window.scrollTo(0, 0);
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        <li>
          <button
            data-testid="next-button"
            className={`flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-150 bg-white border rounded focus:outline-none hover:bg-gray-100 ${
              !hasNext && 'cursor-not-allowed'
            } `}
            onClick={() => {
              hasNext && goToPage(activePage + 1);
              !isLast && window.scrollTo(0, 0);
            }}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pager.propTypes = {
  noOfItems: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
