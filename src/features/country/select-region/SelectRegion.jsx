import { useDispatch, useSelector } from 'react-redux';

import { countryModel } from '@entities';

import { SelectStyled, selectStyles } from './styled';

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const useSelectRegion = () => {
  const dispatch = useDispatch();
  const regionValue = useSelector(countryModel.selectRegionValue);

  const handleSelect = (option) => {
    const newValue = option?.value || null;
    dispatch(countryModel.setRegion(newValue));
  };

  const optionIndex = options.findIndex((option) => option.value === regionValue);

  return { handleSelect, optionIndex };
};

export const SelectRegion = () => {
  const { handleSelect, optionIndex } = useSelectRegion();

  return (
    <SelectStyled
      defaultValue={options[optionIndex]}
      isClearable
      options={options}
      isSearchable={false}
      styles={selectStyles}
      onChange={handleSelect}
      placeholder="Filter by Region"
    />
  );
};
