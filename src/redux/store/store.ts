import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "../reducer/commonReducer";
import expenseReducer from "../reducer/expenseReducer";
import userReducer from "../reducer/userReducer";

export const Store = configureStore({
  reducer: {
    user: userReducer,
    expense: expenseReducer,
    common: commonReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
