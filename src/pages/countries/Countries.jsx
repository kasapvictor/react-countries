import { Main } from '@shared';
import { useEffect } from 'react';
import { Filter } from '@widgets/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { countryModel } from '@entities';

// eslint-disable-next-line react/prop-types
const Country = ({ countryId }) => {
  const countryById = useSelector((state) => countryModel.selectById(state, countryId));

  return (
    <p>
      [{countryById.cca3}] :{countryById.name.common}
    </p>
  );
};

export const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(countryModel.selectIds);

  useEffect(() => {
    dispatch(countryModel.fetchCountries());
  }, []);

  return (
    <>
      <Main>
        <Filter />
        {countries.map((countryId) => (
          <Country key={countryId} countryId={countryId} />
        ))}
      </Main>
    </>
  );
};
