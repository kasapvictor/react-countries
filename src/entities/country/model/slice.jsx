import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { STATUS } from '@shared';

import { fetchCountries } from './actions';

export const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.cca3,
  sortComparer: ({ name: { common: commonA } }, { name: { common: commonB } }) => commonA.localeCompare(commonB),
});

const slice = createSlice({
  name: 'countries',
  initialState: countriesAdapter.getInitialState({
    errorFetch: null,
    statusFetch: STATUS.IDLE_STATUS,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.statusFetch = STATUS.LOADING_STATUS;
        state.errorFetch = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.errorFetch = action.error.message;
        state.statusFetch = STATUS.FAILED_STATUS;
      })
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        countriesAdapter.upsertMany(state, payload);
        state.statusFetch = STATUS.SUCCESS_STATUS;
      });
  },
});

export const reducer = slice.reducer;
