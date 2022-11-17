import styled from '@emotion/styled';

import { SPACE } from '@app/shared';

const centerStyles = (center) => {
  switch (true) {
    case center:
      return {
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
      };
    default:
  }
};

export const ContainerStyled = styled.div(({ center }) => ({
  ...centerStyles(center),
  width: '100%',
  maxWidth: 1240,
  margin: '0 auto',
  padding: SPACE.medium,
}));
