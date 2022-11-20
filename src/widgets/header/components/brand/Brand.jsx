import { Text } from '@app/shared';

import { BrandStyled } from './styled';

export const Brand = () => {
  return (
    <BrandStyled href="/">
      <Text tag="p" variant="bold" size="xlarge">
        React Countries
      </Text>
    </BrandStyled>
  );
};
