import { Main } from '@shared';
import { useEffect } from 'react';
import { Filter } from '@widgets';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, selectCountriesIds, selectCountryById } from '@features';

// eslint-disable-next-line react/prop-types
const Country = ({ countryId }) => {
  const countryById = useSelector((state) => selectCountryById(state, countryId));

  return (
    <p>
      [{countryById.cca3}] :{countryById.name.common}
    </p>
  );
};

export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountriesIds);

  useEffect(() => {
    dispatch(fetchCountries());
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
