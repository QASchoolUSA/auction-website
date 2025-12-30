import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import SearchIcon from './SearchIcon';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({
      pathname: `/listings`,
      query: { search },
    });

    setSearch('');
  };

  return (
    <div className="flex-1 flex items-center justify-center lg:ml-6 lg:justify-end">
      <div className="max-w-lg w-full lg:max-w-xs relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <form onSubmit={onSubmit}>
          <SearchIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search"
            name="search"
            placeholder="Search listings"
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
