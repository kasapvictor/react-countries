import { Container } from '@shared';

import { FilterInner, FilterStyled } from './styled';
import { Search } from './Search';
import { Region } from './Region';

export const Filter = () => {
  return (
    <FilterStyled>
      <Container>
        <FilterInner>
          <Search />
          <Region />
        </FilterInner>
      </Container>
    </FilterStyled>
  );
};
