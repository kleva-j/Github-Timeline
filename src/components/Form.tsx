import React, { memo, KeyboardEvent } from 'react';

interface IProps {
  setParam: Function;
}

export const SearchForms: React.FC<IProps> = memo(({ setParam }) => {
  const handleEnterKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.code === 'Enter') {
      const { value, name } = event.currentTarget;
      const trimmedValue = value.trim() || undefined;
      setParam({ [name]: trimmedValue });
    }
  };

  return (
    <form className="flex flex-col sm:flex-row max-w-3xl mx-auto">
      <aside className="flex-1 my-2 md:mx-2 md:ml-0">
        <label htmlFor="desc" className="text-sm font-semibold">
          Job Description
        </label>
        <input
          id="desc"
          type="text"
          name="description"
          data-testid="desc"
          aria-label="description-input"
          placeholder="Filter by title, benefits, companies, expertise"
          className="w-full py-2 px-4 border rounded bg-white"
          onKeyPress={handleEnterKeyDown}
        />
      </aside>

      <aside className="flex-1 my-2 sm:mx-2 md:mr-0">
        <label htmlFor="location" className="text-sm font-semibold">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          data-testid="loc"
          aria-label="location-input"
          placeholder="Filter by city, state, zip code or country"
          className="w-full py-2 px-4 border rounded bg-white"
          onKeyPress={handleEnterKeyDown}
        />
      </aside>
    </form>
  );
});
