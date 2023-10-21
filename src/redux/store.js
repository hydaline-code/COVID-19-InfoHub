import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import HomeSlice from './home/HomeSlice';

const logger = createLogger(); // Create the logger middleware

const store = configureStore({
  reducer: {
    home: HomeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
