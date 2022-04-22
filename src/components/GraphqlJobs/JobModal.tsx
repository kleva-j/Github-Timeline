import styled, { keyframes } from 'styled-components';
import { forwardRef, MouseEventHandler } from 'react';
import { useQuery } from '@apollo/client';

import { SingleJob, SingleJobVariables } from 'graphqL/__generated__/SingleJob';
import { LOAD_SINGLE_JOB } from 'graphqL/queries.graphql';

import tw from 'tailwind.macro';

import { ErrorComponent } from './Error';
import { Job } from './Job';

import Cross from './icons/cross';

interface PropsType {
  handleClose: MouseEventHandler;
  companySlug: string;
  jobSlug: string;
}

export const JobModal = forwardRef<HTMLDivElement, PropsType>(({ handleClose, companySlug, jobSlug }, ref) => {
  const { error, loading, data, refetch } = useQuery<SingleJob, SingleJobVariables>(LOAD_SINGLE_JOB, {
    variables: { jobSlug, companySlug },
    notifyOnNetworkStatusChange: true,
  });

  console.log(data);

  return (
    <section className="w-full fixed z-10 right-0 h-full top-0 overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700 bg-gray-900 bg-opacity-50 flex justify-center">
      <Article ref={ref}>
        <Cross size={24} className="self-end cursor-pointer hover:bg-gray-100 p-1 rounded-full" onClick={handleClose} />
        <div className="flex justify-center items-center w-full h-full overflow-y-auto no-scrollbar">
          {loading && <Loader children={<div className="frame" />} />}
          {error && <ErrorComponent refetch={() => refetch()} />}
          {data && <Job {...data.job} />}
        </div>
      </Article>
    </section>
  );
});

const Article = styled('aside')`
  ${tw`w-full max-w-md bg-gray-50 p-3 mx-2 my-4 mt-24 shadow rounded-md flex flex-col`}

  max-height: 45rem;
  padding: 0.75rem;
  background-color: rgb(249 250 251);
`;

const flipAnimation = keyframes`
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
`;

const Loader = styled('div')`
  perspective: 120px;
  margin-top: -2rem;

  .frame {
    width: 4em;
    height: 4em;
    background-color: #c0a294;
    transform: rotate(0);
    animation: ${flipAnimation} 1s infinite;
  }
`;
