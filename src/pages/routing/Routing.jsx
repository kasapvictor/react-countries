import { Routes, Route, Navigate } from 'react-router-dom';

import { BaseTemplate } from '@templates';

import { CountryList, CountryDetails } from '../country';

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseTemplate />}>
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="/" element={<CountryList />} />
          <Route path="country/:countryId" element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
};
