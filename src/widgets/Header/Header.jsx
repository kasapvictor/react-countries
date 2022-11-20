import { Container, Brand } from '@shared';
import { ThemeSwitcher } from '@features';

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
