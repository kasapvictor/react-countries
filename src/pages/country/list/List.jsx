// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { countryModel } from '@entities';

import { Container } from '@shared';
import { CountryFilter } from '@widgets';

// eslint-disable-next-line react/prop-types
// const Country = ({ countryId }) => {
//   const countryById = useSelector((state) => countryModel.selectById(state, countryId));
//
//   return (
//     <p>
//       [{countryById.cca3}] :{countryById.name.common}
//     </p>
//   );
// };

export const List = () => {
  // const dispatch = useDispatch();
  // const countries = useSelector(countryModel.selectIds);

  // useEffect(() => {
  //   dispatch(countryModel.fetchCountries());
  // }, []);

  return (
    <Container>
      <CountryFilter />
      Countries List
      {/* {countries.map((countryId) => ( */}
      {/*  <Country key={countryId} countryId={countryId} /> */}
      {/* ))} */}
    </Container>
  );
};
