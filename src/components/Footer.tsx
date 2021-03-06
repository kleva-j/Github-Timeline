import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  absolute?: boolean;
}

export const Footer: React.FC<Props> = memo(({ absolute }) => {
  return (
    <>
      <footer
        data-testid="footer"
        className={(absolute ? 'sm:relative md:absolute w-full bottom-0' : 'relative') + ' pb-6 bg-gray-900'}
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()}{' '}
                <Link to="/" className="text-white hover:text-gray-400 text-sm font-semibold py-1" target="_blank">
                  Github Timeline
                </Link>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="http://michaelobasi.com"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Michael Obasi
                  </a>
                </li>
                <li>
                  <a
                    href="http://michaelobasi.com"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://frontendtips.netlify.app/"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kleva-j/Github-Timeline/blob/develop/LICENCE"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});
