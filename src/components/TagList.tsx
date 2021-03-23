import React, { memo, useCallback, useState } from 'react';
import { Tag, TagContainer } from 'styled';

type tTag = {
  title: string;
  isActive: boolean;
};

const Tags: tTag[] = [
  { title: 'Full Time', isActive: false },
  { title: 'remote', isActive: false },
  { title: 'HTML', isActive: false },
  { title: 'CSS', isActive: false },
  { title: 'SASS', isActive: false },
  { title: 'JavaScript', isActive: false },
  { title: 'TypeScript', isActive: false },
  { title: 'React', isActive: false },
  { title: 'Angular', isActive: false },
  { title: 'Vue', isActive: false },
  { title: 'Svelte', isActive: false },

  { title: 'Java', isActive: false },
  { title: 'Ruby', isActive: false },
  { title: 'Python', isActive: false },
  { title: 'Nodejs', isActive: false },
  { title: 'Go', isActive: false },
  { title: 'Swift', isActive: false },
  { title: 'C', isActive: false },
  { title: 'C++', isActive: false },
  { title: 'C#', isActive: false },
  { title: 'Scala', isActive: false },
  { title: 'R', isActive: false },

  { title: 'Kotlin', isActive: false },
  { title: 'PHP', isActive: false },
  { title: 'Rust', isActive: false },
  { title: 'Elm', isActive: false },
  { title: 'Objective-C', isActive: false },
  { title: 'LISP', isActive: false },
  { title: 'Perl', isActive: false },
  { title: 'SQL', isActive: false },
  { title: 'Haskel', isActive: false },
  { title: 'Erlang', isActive: false },
  { title: 'Clojure', isActive: false },
];

export const TagList: React.FC<{ setParams: Function }> = memo(({ setParams }) => {
  const [state, setState] = useState(Tags);

  const handleClick = (index: number, isActive: boolean) => {
    const newList = [...state];
    newList[index].isActive = !isActive;
    setState(() => newList);
    handleUpdate();
  };

  const handleUpdate = useCallback(() => {
    const newState = state;
    const params = newState
      .filter((item) => item.isActive)
      .reduce(
        (prev: any, next: tTag) => {
          let { description, location, full_time } = prev;
          if (next.title === 'Full Time') full_time = 'on';
          else if (next.title === 'remote') location = 'remote';
          else description = [...description, next.title];
          return { description, location, full_time };
        },
        { description: [], location: '', full_time: '' },
      );
    setParams({
      description: params.description.join('+') || undefined,
      location: params.location || undefined,
      full_time: params.full_time || undefined,
    });
  }, [state, setParams]);

  return (
    <TagContainer>
      {state.map(({ title, isActive }, index) => (
        <Tag data-testid={`id-${index}`} key={title} active={isActive} onClick={() => handleClick(index, isActive)}>
          {title}
        </Tag>
      ))}
    </TagContainer>
  );
});
