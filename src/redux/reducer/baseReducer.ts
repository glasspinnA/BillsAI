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
    expenseToEdit: {} as ExpenseDTO,
  },
  reducers: {
    ExpenseToEdit: (state, action: PayloadAction<ExpenseDTO>) => {
      return { ...state, expenseToEdit: action.payload };
    },
    ExpenseToDelete: (state, action: PayloadAction<ExpenseDTO>) => {
      return produce(state, (draft) => {
        const indexToDelete = draft.expenses[
          action.payload.ExpenseType
        ].data.findIndex((x) => x.id === action.payload.id);
        if (indexToDelete != -1) {
          draft.expenses[action.payload.ExpenseType].data.splice(
            indexToDelete,
            1
          );
        }
      });
    },
    AddUsers: (state, action: PayloadAction<UserDTO[]>) => {
      return { ...state, users: action.payload };
    },
    AddExpenses: (state, action: PayloadAction<IExpensesSectionList>) => {
      const index = state.expenses.findIndex((x) => x.id == action.payload.id);
      if (index == -1) {
        return { ...state, expenses: [...state.expenses, action.payload] };
      } else {
        const expenseIndex = state.expenses[index].data.findIndex(
          (x) => x.id == action.payload.data[0].id
        );
        if (expenseIndex == -1) {
          return produce(state, (draft) => {
            draft.expenses[index].data = [
              ...draft.expenses[index].data,
              action.payload.data[0],
            ];
          });
        } else {
          return produce(state, (draft) => {
            draft.expenses[index].data[expenseIndex] = action.payload.data[0];
          });
        }
      }
    },
  },
});

export const {
  AddUsers,
  AddExpenses,
  ExpenseToEdit,
  ExpenseToDelete,
} = baseReducer.actions;

export default baseReducer.reducer;

export const GetUsers = (state: RootState): UserDTO[] =>
  state.baseReducer.users;

export const GetExpenses = (state: RootState): IExpensesSectionList[] =>
  state.baseReducer.expenses;
