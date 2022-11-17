import styled from '@emotion/styled';

import { COLOR, SPACE, SHADOW } from '@app/shared';

export const HeaderStyled = styled.header({
  padding: `${SPACE.gutter} 0`,
  boxShadow: SHADOW.default,
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

export const BrandStyled = styled.a({
  textDecoration: 'none',
  color: COLOR.text.default,
});
