import { Container } from '@shared';
import { ThemeSwitcher } from '@features';

import { Brand } from './ui';
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
