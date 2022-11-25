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

export const selectFilteredIds = createSelector(
  [
    (state) => state.countries.ids,
    (state) => state.countries.entities,
    (state) => state.countries.search,
    (state) => state.countries.region,
  ],
  (ids, entities, searchValue, regionValue) => {
    const filteredIds = ids.reduce((accum, prev) => {
      const country = entities[prev];
      const countryName = country.name.common.toLowerCase();

      if (countryName.includes(searchValue)) {
        if (regionValue && country.region.toLowerCase() === regionValue) {
          accum.push(prev);
        }

        if (!regionValue) {
          accum.push(prev);
        }
      }
      return accum;
    }, []);

    return filteredIds;
  },
);

export const { selectById, selectIds, selectAll } = countryAdapter.getSelectors((state) => {
  return state.countries;
});
