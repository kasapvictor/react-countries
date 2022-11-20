import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from '@features';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
