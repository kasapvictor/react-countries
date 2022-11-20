import { IoSearch } from 'react-icons/io5';

import { SearchStyled, SearchInner, SearchInput, SearchIcon } from './styled';

export const SearchCountry = () => {
  const handleChange = (e) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  return (
    <SearchStyled>
      <SearchInner>
        <SearchIcon>
          <IoSearch size={16} />
        </SearchIcon>
        <SearchInput type="search" autoComplete="off" onChange={handleChange} placeholder="Search for a country..." />
      </SearchInner>
    </SearchStyled>
  );
};
