import React from 'react';

import { Job } from 'components/SingleJob';

import { JobItem, TagSm } from 'styled';

export const Template1: React.FC<Job> = ({ id, title, company, created_at, url, type, location }) => {
  return (
    <JobItem data-testid={`job-${id}`}>
      <main className="self-stretch w-20 mr-5 border"></main>
      <aside>
        <div className="flex items-center">
          <h4 data-testid="title" className="text-base font-semibold truncate whitespace-nowrap text-gray-800">
            <a href={url} rel="noopener noreferrer" target="_blank">
              {title} {' - '}
            </a>
          </h4>
          <p data-testid="company" className="capitalize text-gray-600 text-sm pl-2 truncate whitespace-nowrap">
            {company}
          </p>
        </div>

        <p data-testid="created_at" className="text-gray-700 text-sm">
          {new Date(created_at).toLocaleDateString('en-GB', { dateStyle: 'short' })}
        </p>

        <div className="flex justify-start py-1">
          <TagSm data-testid="type" className="text-gray-700">
            {type}
          </TagSm>
          <TagSm data-testid="location" className="text-gray-700">
            {location}
          </TagSm>
        </div>
      </aside>
    </JobItem>
  );
};
