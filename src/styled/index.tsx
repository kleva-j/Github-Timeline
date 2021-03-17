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

interface TagProps {
  active: boolean;
}

export const LoginBg: any = styled('div')`
  ${tw`absolute top-0 w-full h-full bg-gray-900`}

  background-image: url(${(props: BgProps) => props?.url});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DefaultBg: React.FC = styled('section')`
  ${tw`absolute top-0 w-full h-full bg-gray-900`}
`;

export const JobItem: React.FC = styled('aside')`
  ${tw`flex my-4 bg-white mx-auto max-w-3xl p-4 rounded-md`}

  box-shadow: 0px 1px 2px .5px rgba(0, 0, 0, 0.1);
`;

export const JobItem2: React.FC = styled('aside')`
  ${tw`max-w-3xl mx-auto px-5 sm:px-10 my-4 py-4 sm:py-6 bg-white rounded-lg shadow-md`}
`;

export const TagContainer: React.FC = styled('section')`
  ${tw`mx-auto max-w-3xl flex flex-wrap`}

  justify-content: evenly;
`;

export const Tag: any = styled('button')`
  ${tw`font-sans text-xs rounded px-3 py-1 m-2 select-none`}

  background: ${(props: TagProps) => (props.active ? '#1a202c' : '#edf2f7')};
  color: ${(props) => (props.active ? 'white' : 'black')};

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export const TagSm: any = styled('button')`
  ${tw`font-sans text-xs rounded px-2 py-1 m-1 mr-2 mb-0 ml-0 select-none text-gray-800 bg-gray-400`}

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
