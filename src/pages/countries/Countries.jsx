import { Main } from '@shared';
// import { useEffect } from 'react';
import { Filter } from '@widgets/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { countryModel } from '@entity';

// eslint-disable-next-line react/prop-types
// const Country = ({ countryId }) => {
//   const countryById = useSelector((state) => countriesModel.selectById(state, countryId));
//
//   return (
//     <p>
//       [{countryById.cca3}] :{countryById.name.common}
//     </p>
//   );
// };

export const Countries = () => {
  // const dispatch = useDispatch();
  // const countries = useSelector(countriesModel.selectIds);
  //
  // useEffect(() => {
  //   dispatch(countriesModel.fetchCountries());
  // }, []);

  return (
    <>
      <Main>
        <Filter />
        {/* {countries.map((countryId) => ( */}
        {/*  <Country key={countryId} countryId={countryId} /> */}
        {/* ))} */}
      </Main>
    </>
  );
};
