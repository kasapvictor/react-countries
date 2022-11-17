import { Container, Text } from '@app/shared';

import { ThemeSwitcher } from './ThemeSwitcher';
import { BrandStyled, HeaderInner, HeaderStyled } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderInner>
          <BrandStyled href="/">
            <Text tag="p" variant="medium" size="xlarge">
              Countries
            </Text>
          </BrandStyled>
          <ThemeSwitcher />
        </HeaderInner>
      </Container>
    </HeaderStyled>
  );
};
