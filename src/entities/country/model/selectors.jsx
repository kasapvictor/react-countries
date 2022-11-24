import { createSelector } from '@reduxjs/toolkit';

import { countryAdapter } from './slice';

export const selectFetchStatus = createSelector(
  [(state) => state.countries.statusFetch, (state) => state.countries.errorFetch],
  (statusFetch, errorFetch) => {
    return { statusFetch, errorFetch };
  },
);

export const selectSearchValue = createSelector([(state) => state.countries.search], (value) => {
  return value;
});

export const selectRegionValue = createSelector([(state) => state.countries.region], (value) => {
  return value;
});

export const selectFilteredIds = createSelector([(state) => state.countries.filtered], (filtered) => {
  return filtered;
});

export const { selectById, selectIds } = countryAdapter.getSelectors((state) => {
  return state.countries;
});
