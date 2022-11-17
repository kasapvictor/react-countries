import styled from '@emotion/styled';

import { RADII, SPACE, COLOR, FONT_WEIGHT, FONT_SIZE } from '@app/shared';

const buttonTextColor = (variant) => {
  switch (variant) {
    case 'warning':
      return `${COLOR.text.dark}`;

    case 'alert':
      return `${COLOR.text.light}`;

    default:
      return COLOR.text.light;
  }
};

export const ButtonStyled = styled.button(({ variant }) => ({
  padding: `${SPACE.small} ${SPACE.medium}`,
  borderRadius: RADII.xxsmall,
  backgroundColor: COLOR[variant].default,
  transition: 'background-color .2s ease-in-out',
  color: buttonTextColor(variant),
  fontWeight: FONT_WEIGHT.medium,
  fontSize: FONT_SIZE.small,

  '&:hover': {
    backgroundColor: COLOR[variant].hover,
  },
}));
