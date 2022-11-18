import { Container, Text } from '@app/shared';

import { ThemeSwitcher } from './ThemeSwitcher';
import { BrandStyled, HeaderInner, HeaderStyled } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderInner>
          <BrandStyled href="/">
            <Text tag="p" variant="bold" size="xlarge">
              React Countries
            </Text>
          </BrandStyled>
          <ThemeSwitcher />
        </HeaderInner>
      </Container>
    </HeaderStyled>
  );
};
