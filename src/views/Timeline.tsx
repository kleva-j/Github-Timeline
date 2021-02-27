import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const Button = styled('button')`
  ${tw`font-mono text-red-400`};
`;

export const Timeline: React.FC = () => {
  return (
    <section className="grid__section min-h-screen bg-primary-bg">
      <Button>Timeline</Button>
    </section>
  );
};
