import { CountrySelectRegion, CountrySearch } from '@features';
import { Container } from '@shared';

import { FilterInner, FilterStyled } from './styled';

export const CountryFilter = () => {
  return (
    <FilterStyled>
      <Container>
        <FilterInner>
          <CountrySearch />
          <CountrySelectRegion />
        </FilterInner>
      </Container>
    </FilterStyled>
  );
};
