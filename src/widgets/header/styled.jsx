import { SPACE, SHADOW } from '@app/shared';
import styled from '@emotion/styled';

export const HeaderStyled = styled.header({
  padding: `${SPACE.gutter} 0`,
  boxShadow: SHADOW.default,
});

export const HeaderInner = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
