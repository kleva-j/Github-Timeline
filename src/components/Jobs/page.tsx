import * as React from 'react';

import { ListItem } from './listitem';

type Props = {
  list: item[];
};

type item = {
  name: string;
};

export const Page: React.FC<Props> = ({ list }: Props) => {
  return (
    <section>
      {list.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </section>
  );
};
