import { Routes, Route } from 'react-router-dom';

import { CountryList, CountryDetails } from '../country';
import { NotFound } from '../not-found';

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path=":countryId" element={<CountryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
