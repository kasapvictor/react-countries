import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { STATUS } from '@shared';

import { fetchCountries } from './thunks';

export const countryAdapter = createEntityAdapter({
  selectId: (country) => country.cca3,
  sortComparer: ({ name: { common: commonA } }, { name: { common: commonB } }) => commonA.localeCompare(commonB),
});

const slice = createSlice({
  name: 'country',
  initialState: countryAdapter.getInitialState({
    statusFetch: STATUS.IDLE_STATUS,
    errorFetch: null,
    search: '',
    region: null,
    filtered: [],
  }),
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload.toLowerCase();
    },
    setRegion: (state, { payload }) => {
      state.region = payload;
    },
  },
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
        countryAdapter.upsertMany(state, payload);
        state.statusFetch = STATUS.SUCCESS_STATUS;
      });
  },
});

export const { setSearch, setRegion } = slice.actions;
export const reducer = slice.reducer;
