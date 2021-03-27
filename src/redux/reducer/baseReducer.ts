import { createSlice } from "@reduxjs/toolkit";
import { IExpensesSectionList } from "../../interface/IExpensesSectionList";
import { RootState } from "../store/store";

export const baseReducer = createSlice({
  name: "counter",
  initialState: {
    users: [] as UserDTO[],
    expenses: [] as IExpensesSectionList[],
  },
  reducers: {
    AddUsers: (state, action) => {
      state.users = action.payload;
    },
    AddExpenses: (state, action) => {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    },
  },
});

export const { AddUsers, AddExpenses } = baseReducer.actions;

export default baseReducer.reducer;

export const GetUsers = (state: RootState) => state.baseReducer.users;

export const GetExpenses = (state: RootState) => state.baseReducer.expenses;
