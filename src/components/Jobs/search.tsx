import * as React from 'react';

type Props = {};

export const SearchBar: React.FC<Props> = () => {
  const [desc, setDesc] = React.useState('');
  const [location] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setDesc(event.target.value);

  return (
    <section>
      <input type="search" value={desc} name="description" id="desc" onChange={handleChange} />
      <input type="search" value={location} name="location" id="loc" onChange={handleChange} />
      <input type="checkbox" name="roletype" id="roletype" />
    </section>
  );
};
