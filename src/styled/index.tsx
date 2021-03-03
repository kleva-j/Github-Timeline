import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

export const Button: React.FC = styled('button')`
  ${tw`bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs`};

  transition: all 0.15s ease;
`;

interface BgProps {
  url: any;
}

export const LoginBg: any = styled('div')`
  ${tw`absolute top-0 w-full h-full bg-gray-900`}

  background-image: url(${(props: BgProps) => props?.url || ''});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DefaultBg: React.FC = styled('section')`
  ${tw`absolute top-0 w-full h-full bg-gray-900`}
`;
