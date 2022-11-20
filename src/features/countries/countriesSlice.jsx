import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { STATUS } from '@shared';
import axios from 'axios';

const API_URL3 = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get(API_URL3);

  // eslint-disable-next-line no-console
  console.log('response', response);

  return response.data;
});

const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.cca3,
  sortComparer: ({ name: { common: commonA } }, { name: { common: commonB } }) => commonA.localeCompare(commonB),
});

const countriesSlice = createSlice({
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

export const selectCountriesFetchStatus = createSelector(
  [(state) => state.countries.statusFetch, (state) => state.countries.errorFetch],
  (statusFetch, errorFetch) => {
    return { statusFetch, errorFetch };
  },
);

export const { selectById: selectCountryById, selectIds: selectCountriesIds } = countriesAdapter.getSelectors((state) => {
  return state.countries;
});

export const countriesReducer = countriesSlice.reducer;
