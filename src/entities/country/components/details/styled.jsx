import styled from '@emotion/styled';

import { RADII, SHADOW, SPACE } from '@shared';

export const DetailsContainer = styled.div({
  // gridTemplateColumns: 'minmax(400px, 600px) 1fr'
  paddingBottom: SPACE.gutter,
});

export const DetailsImage = styled.img({
  height: 'auto',
  width: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  borderRadius: RADII.xsmall,
  boxShadow: SHADOW.default,
});

export const DetailsContent = styled.div({
  paddingLeft: SPACE.large,

  '@media (max-width: 991px)': {
    paddingLeft: 0,
  },
});

export const DetailsContentHeader = styled.div({
  paddingBottom: SPACE.xsmall,
  position: 'relative',
});

export const DetailsContentCoatOfArms = styled.div({
  position: 'absolute',
  top: -100,
  right: 0,

  '@media (max-width: 479px)': {
    position: 'static',
  },
});

export const DetailsCoatOfArmsImg = styled.img({
  width: 80,
});

export const DetailsContentBody = styled.div({
  display: 'grid',
  gap: SPACE.xxsmall,
  gridTemplateColumns: '1fr 1fr',

  '@media (max-width: 479px)': {
    gridTemplateColumns: '1fr',
  },
});

export const DetailsContentRow = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  // alignItems: 'flex-end',
  gap: SPACE.xxsmall,
  paddingBottom: SPACE.xxsmall,
});
