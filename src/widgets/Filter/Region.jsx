import { SelectStyled, selectStyles } from './styled';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const Region = () => {
  const handleSelect = (option) => {
    // eslint-disable-next-line no-console
    console.log('option', option);
  };

  return (
    <SelectStyled
      // value={region}
      isClearable
      options={options}
      isSearchable={false}
      styles={selectStyles}
      onChange={handleSelect}
      placeholder="Filter by Region"
    />
  );
};
