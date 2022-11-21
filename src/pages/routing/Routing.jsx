import { Routes, Route } from 'react-router-dom';

import { NotFound } from '../not-found';
import { CountryList, CountryDetails } from '../country';

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
