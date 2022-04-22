import { FC, useRef, useEffect, useCallback, MouseEventHandler, MouseEvent, useState } from 'react';
import { v5 as uuidNameSpace, v4 as getNS } from 'uuid';
import { AllJobs } from 'graphqL/__generated__/AllJobs';
import { LOAD_JOBS } from 'graphqL/queries.graphql';
import { useQuery } from '@apollo/client';
import { UseModal } from 'hooks/useModal';
import { Button } from 'styled';

import { SkeletonLoader } from './SkeletonLoader';
import { FilterIcon } from './icons/filter';
import { ErrorComponent } from './Error';
import { JobModal } from './JobModal';
import { Card } from './Card';

import useOnClickOutside from 'hooks/useOnClickOutside';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const GenerateNameSpace: string = getNS();

const config = {
  notifyOnNetworkStatusChange: true,
  context: {
    requestTrackerId: uuidNameSpace('JOBS', GenerateNameSpace),
  },
};

interface IState {
  jobSlug: string;
  companySlug: string;
}

export const GetAllJobs: FC = () => {
  const { loading, error, data, refetch } = useQuery<AllJobs>(LOAD_JOBS, config);

  const { toggle, isVisible } = UseModal();
  
  const modalRef = useRef<HTMLDivElement>(null);
  
  const closeModal = useCallback((): void => toggle(false), [toggle]);
  
  const [state, setState] = useState<IState>({ companySlug: '', jobSlug: '' });

  const handleClick: MouseEventHandler = (event: MouseEvent<HTMLElement>): void => {
    const dataSet = event.currentTarget?.dataset;
    if (dataSet) {
      setState(() => ({
        jobSlug: dataSet.jobslug || '',
        companySlug: dataSet.companyslug || '',
      }));
    }
    toggle();
  };

  useOnClickOutside(modalRef, closeModal);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  return (
    <div className="max-w-screen-lg m-auto">
      <div className="flex flex-col justify-between md:items-center mt-20 md:mt-36 mb-10 md:flex-row">
        <Heading>Find the job that you <br /> really love</Heading>
        <FilterBtn>
          Filter
          <FilterIcon style={{ marginLeft: 8 }} />
        </FilterBtn>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {loading && <>{SkeletonLoader({ count: 6 })}</>}
        {(data?.jobs ?? []).map((item) => (
          <Card {...item} key={item.id} handleClick={handleClick} />
        ))}
        {error && <ErrorComponent refetch={() => refetch()} />}
      </div>
      {isVisible && (
        <JobModal handleClose={closeModal} ref={modalRef} companySlug={state.companySlug} jobSlug={state.jobSlug} />
      )}
    </div>
  );
};

const Heading = styled('h1')`
  ${tw`text-4xl font-bold text-gray-800`}

  font-family: Lato, sans-serif;
`;

const FilterBtn = styled(Button)`
  ${tw`text-gray-700 cursor-pointer`}
`;
