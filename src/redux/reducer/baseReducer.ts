import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExpensesSectionList } from "../../interface/IExpensesSectionList";
import { RootState } from "../store/store";
import produce from "immer";
import { ExpenseDTO } from "../../DTO/ExpenseDTO";

export const baseReducer = createSlice({
  name: "counter",
  initialState: {
    users: [] as UserDTO[],
    expenses: [] as IExpensesSectionList[],
  },
  reducers: {
    AddUsers: (state, action: PayloadAction<UserDTO[]>) => {
      return { ...state, users: action.payload };
    },
    AddExpenses: (state, action: PayloadAction<IExpensesSectionList>) => {
      const index = state.expenses.findIndex((x) => x.id == action.payload.id);
      if (index == -1) {
        return { ...state, expenses: [...state.expenses, action.payload] };
      } else {
        return produce(state, (draft) => {
          draft.expenses[index].data = [
            ...draft.expenses[index].data,
            action.payload.data[0],
          ];
        });
      }
    },
  },
});

export const { AddUsers, AddExpenses } = baseReducer.actions;

export default baseReducer.reducer;

export const GetUsers = (state: RootState): UserDTO[] =>
  state.baseReducer.users;

export const GetExpenses = (state: RootState): IExpensesSectionList[] =>
  state.baseReducer.expenses;
