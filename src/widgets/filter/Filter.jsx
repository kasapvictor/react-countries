import { Container } from '@shared';
import { CountriesSelectRegion, CountriesSearch } from '@features';

import { FilterInner, FilterStyled } from './styled';

export const Filter = () => {
  return (
    <FilterStyled>
      <Container>
        <FilterInner>
          <CountriesSearch />
          <CountriesSelectRegion />
        </FilterInner>
      </Container>
    </FilterStyled>
  );
};
