import * as React from 'react';

type Props = {
  item: {
    name: string;
  };
};

export const ListItem: React.FC<Props> = ({ item }: Props) => {
  const { name } = item;
  return (
    <section>
      <h1>{name}</h1>
    </section>
  );
};
