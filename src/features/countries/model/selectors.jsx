import { createSelector } from '@reduxjs/toolkit';

import { countriesAdapter } from './slice';

export const selectFetchStatus = createSelector(
  [(state) => state.countries.statusFetch, (state) => state.countries.errorFetch],
  (statusFetch, errorFetch) => {
    return { statusFetch, errorFetch };
  },
);

export const { selectById, selectIds } = countriesAdapter.getSelectors((state) => {
  return state.countries;
});
