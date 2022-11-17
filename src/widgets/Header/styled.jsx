import styled from '@emotion/styled';

import { SPACE } from '@app/shared';

export const HeaderStyled = styled.header({
  padding: `${SPACE.gutter} 0`,
});

export const HeaderInner = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ThemeSwitcherStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: SPACE.gutter,
});
