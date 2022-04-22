import { Button } from 'styled';
import { FC } from 'react';

import styled from 'styled-components';

import ErrorSvg from './icons/error';

export const ErrorComponent: FC<{ refetch: () => void }> = ({ refetch }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <ErrorSvg />
      <p className="text-sm text-gray-500 p-2 mb-4">You aren't connected to a working internet connection</p>
      <RetryButton onClick={refetch}>Retry</RetryButton>
    </div>
  );
};

const RetryButton = styled(Button)`
  color: #dc9878;
  border-color: #dc9878;
`;

