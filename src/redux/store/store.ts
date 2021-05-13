import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../reducer/expenseReducer";
import userReducer from "../reducer/userReducer";

export const Store = configureStore({
  reducer: {
    user: userReducer,
    expense: expenseReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
