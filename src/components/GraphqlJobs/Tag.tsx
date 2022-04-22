import tw from 'tailwind.macro';
import styled from 'styled-components';

interface Props {
  type: string;
}

const commitments = {
  remote: {
    bg: '#e0e5ff',
    color: '#627adb',
  },
  'full-time': {
    bg: '#e7f7ec',
    color: '#76ba8c',
  },
  'part-time': {
    bg: '##fff4e1',
    color: '#f0c681',
  },
};

export const Tag: any = styled('span')`
  ${tw`font-sans text-xs rounded px-3 py-1 select-none capitalize`}

  background: ${(props: Props) => commitments[props.type]?.bg || '#e0e5ff'};
  color: ${(props) => commitments[props.type]?.color || '#627adb'};

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
