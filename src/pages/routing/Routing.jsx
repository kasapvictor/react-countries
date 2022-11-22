import { Routes, Route, Navigate } from 'react-router-dom';

import { CountryList, CountryDetails } from '../country';
import { BaseTemplate } from '../templates';

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
