import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./home/HomeSlice";
import { createLogger } from "redux-logger"; // Import createLogger

const logger = createLogger(); // Create the logger middleware

const store = configureStore({
 reducer: {
  home: HomeSlice,
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
