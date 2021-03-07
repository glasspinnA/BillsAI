import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "../reducer/baseReducer";

export const Store = configureStore({
  reducer: {
    baseReducer: baseReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
