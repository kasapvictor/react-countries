import { Container } from '@shared';
import { CountrySelectRegion, CountrySearch } from '@features';

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
