import { configureStore } from '@reduxjs/toolkit';
import { countriesModel } from '@features';

export const store = configureStore({
  reducer: {
    countries: countriesModel.reducer,
  },
});
