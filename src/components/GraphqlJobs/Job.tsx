import { SingleJob_job } from 'graphqL/__generated__/SingleJob';
import { getJobDetails } from 'helper';
import { FC, useState } from 'react';
import { Button } from 'styled';

import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import gfm from 'remark-gfm';

import { MarkerIcon } from './icons/marker';
import { Tag } from './Tag';
import OfficeIcon from './icons/office';
import BuildingIcon from './icons/building';

export const Job: FC<SingleJob_job> = (job) => {
  const { commitment, description, company, title, tags, locationLabel } = getJobDetails(job);
  const [activeStatus, setActiveStatus] = useState(1);

  return (
    <aside className="relative top-0 h-full flex flex-col justify-between">
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
          <h4 className="text-base text-gray-500 font-semibold ml-1">{company.name}</h4>
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

      <div className="flex-1 overflow-y-auto no-scrollbar self-center my-2 mx-2 bg-gray-100 rounded-lg px-4 pb-3">
        <div className="sticky top-0 bg-gray-100 py-2">
          <div className="mx-auto w-min justify-between bg-white rounded-full flex">
            <div className="xl:w-full xl:mx-0 -b pl-2 pr-2 h-12">
              <ul className="flex items-center h-full">
                <li
                  onClick={() => setActiveStatus(1)}
                  className={
                    activeStatus === 1
                      ? 'text-sm text-gray-800 py-2 px-4 bg-gray-200 rounded-full font-bold'
                      : 'text-sm text-gray-400 py-3 px-4 font-bold cursor-pointer'
                  }
                >
                  Description
                </li>
                <li
                  onClick={() => setActiveStatus(2)}
                  className={
                    activeStatus === 2
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

        <ReactMarkdown remarkPlugins={[gfm]}>{description}</ReactMarkdown>
      </div>
      <div className="sticky bottom-0 pt-2 px-2 bg-gray-50 w-full mx-auto">
        <ApplyBtn>Apply</ApplyBtn>
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
