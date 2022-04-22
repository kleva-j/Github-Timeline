import { SingleJob_job } from 'graphqL/__generated__/SingleJob';
import { useRef, FC, MouseEvent } from 'react';
import { getJobDetails } from 'helper';

import { MarkerIcon } from './icons/marker';
import { Tag } from './Tag';

import styled from 'styled-components';
import tw from 'tailwind.macro';

type propType = SingleJob_job & { handleClick: (event: MouseEvent<HTMLElement>) => void };

export const Card: FC<propType> = ({ handleClick, ...rest}) => {
  const { slug, company, description, type, timeDiff, title, locationLabel } = getJobDetails(rest);

  const imageRef = useRef(new Image());

  return (
    <CardContainer onClick={handleClick} data-companyslug={company.slug} data-jobslug={slug}>
      <div className="flex justify-between items-center">
        <MarkerIcon />
        <div className="flex justify-between items-center mr-auto text-sm ml-1 text-gray-600">{locationLabel}</div>
        <Tag type={type}>{type}</Tag>
      </div>

      <div className="mb-auto">
        <Title>{title}</Title>
        <div className="line-clamp-1 text-sm">{description.slice(0, 100)}...</div>
      </div>

      <div className="flex mt-4">
        <div className="h-9 w-9 rounded-full bg-gray-300 mr-2 overflow-hidden">
          <img
            src={company?.logoUrl || 'https://via.placeholder.com/150'}
            className="h-full w-full object-cover"
            alt="Company logo"
            ref={imageRef}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-sm text-zinc-100 font-semibold">{company?.name}</span>
          <span className="text-xs text-gray-500">{timeDiff} ago.</span>
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled('section')`
  ${tw`bg-white max-h-72 rounded shadow p-5 overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-md`}

  font-family: 'Source Sans Pro', sans-serif;
`;

const Title = styled('h2')`
  ${tw`text-lg font-bold mt-4 mb-3`}

  font-family: Lato, sans-serif;
`;
