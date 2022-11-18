import styled from '@emotion/styled';

import { RADII, SPACE, COLOR, FONT_WEIGHT, FONT_SIZE } from '@app/shared';

export const ButtonStyled = styled.button(({ variant }) => ({
  padding: `${SPACE.small} ${SPACE.medium}`,
  borderRadius: RADII.xxsmall,
  transition: 'background-color .2s ease-in-out , color .2s ease-in-out',
  fontWeight: FONT_WEIGHT.medium,
  fontSize: FONT_SIZE.small,
  backgroundColor: COLOR.button[variant].normal.bg,
  color: COLOR.button[variant].normal.text,
  textTransform: 'inherit',

  '&:hover': {
    backgroundColor: COLOR.button[variant].hover.bg,
    color: COLOR.button[variant].hover.text,
  },
}));
