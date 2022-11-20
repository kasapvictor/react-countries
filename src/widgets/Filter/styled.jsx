import styled from '@emotion/styled';
import Select from 'react-select';
import { SPACE, COLOR, RADII, SHADOW, FONT_SIZE } from '@shared';

export const FilterStyled = styled.div({
  paddingBottom: SPACE.gutter,
});

export const FilterInner = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    gap: SPACE.gutter,
  },
});

export const SearchStyled = styled.div({
  width: '100%',

  '@media (min-width: 767px)': {
    maxWidth: 250,
  },
});

export const SearchInner = styled.label({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  padding: SPACE.normal,
  boxShadow: SHADOW.default,
  borderRadius: RADII.xsmall,
  background: COLOR.color3,
  overflow: 'hidden',
  gap: SPACE.small,
});

export const SearchIcon = styled.div({
  left: SPACE.small,
  height: SPACE.normal,
});

export const SearchInput = styled.input({
  width: '100%',
  border: 'none',
  outline: 'none',
  background: 'none',
  color: COLOR.color1,
  fontSize: FONT_SIZE.small,

  '::placeholder': {
    color: COLOR.color1,
  },
});

export const selectStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    color: COLOR.color1,
    padding: SPACE.xsmall,
    fontSize: FONT_SIZE.small,
    boxShadow: SHADOW.default,
    borderRadius: RADII.xsmall,
    backgroundColor: COLOR.color3,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    cursor: 'pointer',

    svg: {
      color: COLOR.color1,
    },
  }),
  clearIndicatorSvg: (provided) => ({
    ...provided,
  }),
  option: (provided, state) => ({
    ...provided,
    margin: 0,
    border: 'none',
    cursor: 'pointer',
    color: COLOR.color1,
    fontSize: FONT_SIZE.small,
    backgroundColor: state.isSelected ? COLOR.color2 : COLOR.color3,

    ':active': {
      ...provided[':active'],
      color: COLOR.color1,
      backgroundColor: state.isFocused ? COLOR.color2 : COLOR.color3,
    },
  }),
  placeholder: (provided) => ({ ...provided, color: COLOR.color1 }),
  singleValue: (provided) => ({ ...provided, color: COLOR.color1 }),
  input: (provided) => ({ ...provided, color: COLOR.color1 }),
  menu: (provided) => ({
    ...provided,
    overflow: 'hidden',
    boxShadow: SHADOW.default,
    borderRadius: RADII.xsmall,
    backgroundColor: COLOR.color3,
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
};

export const SelectStyled = styled(Select)({
  width: '100%',

  '@media (min-width: 767px)': {
    maxWidth: 250,
  },
});
