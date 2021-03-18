import React from 'react';

export const Pager: React.FC = () => {
  return (
    <nav aria-label="Page navigation" className="flex justify-center my-10">
      <ul className="inline-flex space-x-2 items-center">
        <li>
          <button className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-150 border rounded focus:outline-none hover:bg-gray-100">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
            </svg>
          </button>
        </li>
        <li>
          <button className="w-10 h-10 text-white transition-colors duration-150 bg-gray-900 border border-r-0 border-gray-600 rounded focus:outline-none">
            1
          </button>
        </li>
        <li>
          <button className="w-10 h-10 text-gray-600 transition-colors duration-150 rounded focus:outline-none hover:bg-gray-100">
            2
          </button>
        </li>
        <li>
          <button className="w-10 h-10 text-gray-600 transition-colors duration-150 rounded focus:outline-none hover:bg-gray-200">
            3
          </button>
        </li>
        <li>
          <button className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-150 bg-white border rounded focus:outline-none hover:bg-gray-100">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
