import { Brand, ThemeSwitcher } from '@widgets';

import { Container } from '@app/shared';

import { HeaderInner, HeaderStyled } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderInner>
          <Brand />
          <ThemeSwitcher />
        </HeaderInner>
      </Container>
    </HeaderStyled>
  );
};
