/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';

import Bars from 'assets/svg/Bars.svg';

interface Props {
  transparent?: boolean;
  navState?: boolean;
}

export const Navbar: React.FC<Props> = ({ transparent, navState = false }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(navState);
  return (
    <nav
      data-testid="navbar"
      className={
        (transparent ? 'top-0 absolute z-50 w-full' : 'relative bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className={
              (transparent ? 'text-white' : 'text-gray-800') +
              ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase'
            }
            to="/"
          >
            Github Timeline
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className={(transparent ? 'text-white' : 'text-gray-800') + ' fas fa-bars'}>
              <img src={Bars} alt="burger-nav" />
            </i>
          </button>
        </div>
        <div
          data-testid="list"
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <Link
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                to="/jobs"
              >
                <i
                  className={
                    (transparent ? 'lg:text-gray-300 text-gray-500' : 'text-gray-500') +
                    ' far fa-file-alt text-lg leading-lg mr-2'
                  }
                />{' '}
                Jobs
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <Link
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                to="#twitter"
              >
                <i
                  className={
                    (transparent ? 'lg:text-gray-300 text-gray-500' : 'text-gray-500') +
                    ' fab fa-twitter text-lg leading-lg '
                  }
                />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </Link>
            </li>

            <li className="flex items-center">
              <Link
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                to="#github-stars"
              >
                <i
                  className={
                    (transparent ? 'lg:text-gray-300 text-gray-500' : 'text-gray-500') +
                    ' fab fa-github text-lg leading-lg '
                  }
                />
                <span className="lg:hidden inline-block ml-2">Star</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
