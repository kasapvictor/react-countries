import { Routes, Route } from 'react-router-dom';

import { BaseTemplate } from '@templates';

import { CountryList, CountryDetails } from '../country';
import { NotFound } from '../not-found';

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseTemplate />}>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<CountryList />} />
          <Route path="country/:countryId" element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
};
