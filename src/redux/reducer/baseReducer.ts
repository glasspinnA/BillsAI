import { createSlice } from "@reduxjs/toolkit";
import { IExpensesSectionList } from "../../interface/IExpensesSectionList";
import { RootState } from "../store/store";
import produce from "immer";

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
      const obj = action.payload as IExpensesSectionList;
      const index = state.expenses.findIndex((x) => x.Id == obj.Id);
      if (index == -1) {
        return { ...state, expenses: [...state.expenses, action.payload] };
      } else {
        return produce(state, (draft) => {
          draft.expenses[index].Data = [
            ...draft.expenses[index].Data,
            action.payload.Data[0],
          ];
        });
      }
    },
  },
});

export const { AddUsers, AddExpenses } = baseReducer.actions;

export default baseReducer.reducer;

export const GetUsers = (state: RootState) => state.baseReducer.users;

export const GetExpenses = (state: RootState) => state.baseReducer.expenses;
