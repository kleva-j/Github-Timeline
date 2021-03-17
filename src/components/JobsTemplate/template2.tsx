import React from 'react';
import PropTypes from 'prop-types';

import { Job } from 'components/SingleJob';

import { JobItem2, TagSm } from 'styled';
import defaultLogo from 'assets/svg/Company_logo.svg';

interface DateTimeFormatOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
}

const options: DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const lang: string = navigator.language || 'en-US';

export const Template2: React.FC<Job> = ({
  id,
  title,
  company,
  created_at,
  url,
  type,
  location,
  company_url,
  company_logo,
}) => {
  const date = new Date(created_at);
  const formatedDate = new Intl.DateTimeFormat(lang, options).format(date);
  return (
    <JobItem2 data-testid={`job-${id}`}>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <span className="font-light text-gray-600">{formatedDate}</span>
        <div className="flex justify-start py-1">
          <TagSm data-testid={`type-${id}`} className="text-gray-700 truncate whitespace-nowrap">
            {type}
          </TagSm>
          <TagSm data-testid={`location-${id}`} className="text-gray-700 truncate whitespace-nowrap">
            {location}
          </TagSm>
        </div>
      </div>
      <div className="mt-2" data-testid={`title-${id}`}>
        <a
          className="text-xl text-gray-700 font-bold hover:text-gray-600"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4">
        <a
          className="text-blue-600 hover:underline whitespace-nowrap order-last sm:order-first mt-2 sm:mt-0"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read more
        </a>
        <div>
          <a className="flex items-center" href={company_url} rel="noopener noreferrer" target="_blank">
            <img
              className="mx-4 w-10 h-10 object-cover hidden sm:block"
              src={company_logo || defaultLogo}
              alt="avatar"
            />
            <h1 className="text-gray-600 font-bold">{company}</h1>
          </a>
        </div>
      </div>
    </JobItem2>
  );
};

Template2.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  company_url: PropTypes.string.isRequired,
  company_logo: PropTypes.string.isRequired,
  how_to_apply: PropTypes.string.isRequired,
};
