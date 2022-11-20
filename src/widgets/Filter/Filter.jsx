import { Container } from '@shared';
import { SelectRegion, SearchCountry } from '@features';

import { FilterInner, FilterStyled } from './styled';

export const Filter = () => {
  return (
    <FilterStyled>
      <Container>
        <FilterInner>
          <SearchCountry />
          <SelectRegion />
        </FilterInner>
      </Container>
    </FilterStyled>
  );
};
