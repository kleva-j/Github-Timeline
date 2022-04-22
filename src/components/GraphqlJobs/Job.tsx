import { SingleJob_job } from 'graphqL/__generated__/SingleJob';
import { getJobDetails } from 'helper';
import { FC, useState } from 'react';
import { Button } from 'styled';

import rehypeSanitize from 'rehype-sanitize';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import rehypeRaw from 'rehype-raw';
import tw from 'tailwind.macro';
import gfm from 'remark-gfm';

import { BuildingIcon } from './icons/building';
import { MarkerIcon } from './icons/marker';
import { OfficeIcon } from './icons/office';
import { Tag } from './Tag';

enum tabs {
  description = "description",
  company = "company",
}

export const Job: FC<SingleJob_job> = (job) => {
  const { commitment, description, company, title, tags, locationLabel, applyUrl } = getJobDetails(job);
  const [activeTab, setActiveTab] = useState<tabs>(tabs.description);

  return (
    <aside className="relative top-0 h-full flex flex-col justify-between w-full">
      <div className="flex flex-col justify-between items-center">
        <div className="h-28 w-28 my-4 bg-gray-100 rounded-md border flex justify-center items-center">
          <img
            src={company?.logoUrl || 'https://via.placeholder.com/150'}
            className="h-16 w-16 rounded-full object-cover"
            alt="Company logo"
            loading="lazy"
          />
        </div>
        <Title>{title}</Title>

        <div className="flex justify-between items-center">
          <OfficeIcon />
          <h4 className="text-base text-gray-900 font-semibold ml-1">{company.name}</h4>
        </div>

        <div className="flex justify-between my-2">
          <div className="flex items-center">
            <BuildingIcon className="mr-0.5" />
            <div className="text-xs text-gray-600 mr-2">{commitment.title}</div>
          </div>

          <div className="flex items-center">
            <MarkerIcon className="mr-0.5" />
            <div className="flex justify-between items-center mr-auto text-xs text-gray-600">{locationLabel}</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {(tags || []).slice(0, 3).map((tag) => (
            <Tag className="m-2" children={tag.name} />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar self-center my-2 bg-gray-100 rounded-lg px-4 pb-3 w-full border">
        <div className="sticky top-0 bg-gray-100 py-2">
          <div className="mx-auto w-min justify-between bg-white rounded-full flex">
            <div className="xl:w-full xl:mx-0 -b pl-2 pr-2 h-12">
              <ul className="flex items-center h-full">
                <li
                  onClick={() => setActiveTab(tabs.description)}
                  className={
                    activeTab === tabs.description
                      ? 'text-sm text-gray-800 py-2 px-4 bg-gray-200 rounded-full font-bold'
                      : 'text-sm text-gray-400 py-3 px-4 font-bold cursor-pointer'
                  }
                >
                  Description
                </li>
                <li
                  onClick={() => setActiveTab(tabs.company)}
                  className={
                    activeTab === tabs.company
                      ? 'text-sm text-gray-800 py-2 px-4 bg-gray-200 rounded-full font-bold'
                      : 'text-sm text-gray-400 py-3 px-4 font-bold cursor-pointer'
                  }
                >
                  Company
                </li>
              </ul>
            </div>
          </div>
        </div>

        { activeTab === tabs.description && (
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            remarkPlugins={[gfm]}
            components={{
              li: ({ children, ...props }) => (<li {...props} className="mt-4 mb-2 text-sm text-gray-600">{children}</li>),
              p:  ({ children, ...props }) => ( <p {...props} className="mt-4 mb-2 text-sm text-gray-600">{children}</p>),
              h1: ({ children, ...props }) => (<h1 {...props} className="mt-5 mb-1 text-gray-800">{children}</h1>),
              h2: ({ children, ...props }) => (<h2 {...props} className="mt-5 mb-1 text-gray-900">{children}</h2>),
              h3: ({ children, ...props }) => (<h3 {...props} className="mt-5 mb-1 text-gray-900">{children}</h3>),
              h4: ({ children, ...props }) => (<h4 {...props} className="mt-5 mb-1 text-gray-900">{children}</h4>),
              h5: ({ children, ...props }) => (<h5 {...props} className="mt-5 mb-1 text-gray-900">{children}</h5>),
              h6: ({ children, ...props }) => (<h6 {...props} className="mt-5 mb-1 text-gray-900">{children}</h6>),
              ul: ({ children, ...props }) => (<ul {...props} className="list-disc list-inside">{children}</ul>),
            }}
          >
            {description}
          </ReactMarkdown>
        )}

        {activeTab === tabs.company && (
          <div className="w-full">
            <h3 className="mt-5 mb-1 text-gray-800 font-bold">Company Details</h3>
            <p className="mt-4 mb-2 text-sm text-gray-600">
              Website URL: <a href={company.websiteUrl} target="_blank" rel="noreferrer noopener" className="text-blue-500">{company.websiteUrl}</a>
            </p>
          </div>
        )}

      </div>
      <div className="sticky bottom-0 pt-2 bg-gray-50 w-full mx-auto">
        <ApplyBtn onClick={() => window.open(applyUrl, "_blank", "noreferrer, noopener")}>Apply</ApplyBtn>
      </div>
    </aside>
  );
};

const ApplyBtn = styled(Button)`
  ${tw`shadow-none py-3 text-base w-full text-center flex justify-center cursor-pointer rounded-lg`}

  background-color: #e7f7ec;
  border: 1px solid #76ba8c;
  color: #76ba8c;
  margin: 0;

  &:hover {
    background-color: #bcf2cd;
    color: #398451;
  }
`;

const Title = styled('h3')`
  ${tw`text-lg font-semibold mt-2 mb-1`}

  color: #424b5c;
`;
