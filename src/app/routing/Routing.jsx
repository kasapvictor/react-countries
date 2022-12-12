import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Container, Text } from '@shared';

const CountryList = lazy(() => import('@pages/country/list'));
const CountryDetails = lazy(() => import('@pages/country/details'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <Container>
                <Text tag="code">Loading List ...</Text>
              </Container>
            }>
            <CountryList />
          </Suspense>
        }
      />
      <Route
        path="/:countryId"
        element={
          <Suspense
            fallback={
              <Container>
                <Text tag="code">Loading Details ...</Text>
              </Container>
            }>
            <CountryDetails />
          </Suspense>
        }
      />
    </Routes>
  );
};
