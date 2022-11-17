import { Title } from '@app/shared/ui';
import { Container } from '@app/shared';

import { ThemeSwitcher } from './ThemeSwitcher';
import { HeaderInner, HeaderStyled } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderInner>
          <Title>Countries</Title>
          <ThemeSwitcher />
        </HeaderInner>
      </Container>
    </HeaderStyled>
  );
};
