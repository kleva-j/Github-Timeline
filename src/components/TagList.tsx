import React, { useState } from 'react';
import { Tag, TagContainer } from 'styled';

type tTag = {
  title: string;
  isActive: boolean;
};

const Tags: tTag[] = [
  { title: 'Full Time', isActive: true },
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

export const TagList: React.FC = () => {
  const [state, setState] = useState(Tags);

  const handleClick = (index: number, isActive: boolean) => {
    const newList = [...state];
    newList[index].isActive = !isActive;
    setState(newList);
  };

  return (
    <TagContainer>
      {state.map(({ title, isActive }, index) => (
        <Tag data-testid={`id-${index}`} key={title} active={isActive} onClick={() => handleClick(index, isActive)}>
          {title}
        </Tag>
      ))}
    </TagContainer>
  );
};
