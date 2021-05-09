import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExpensesSectionList } from "../../interface/IExpensesSectionList";
import { RootState } from "../store/store";
import { ExpenseDTO } from "../../DTO/ExpenseDTO";
import { UserDTO } from "../../DTO/UserDTO";
import _ from "lodash";
import produce from "immer";
import { ExpenseType } from "../../enum/ExpenseType";
import { WritableDraft } from "immer/dist/internal";

export const baseReducer = createSlice({
  name: "counter",
  initialState: {
    users: [] as UserDTO[],
    expenseTypes: [] as IExpensesSectionList[],
  },
  reducers: {
    AddUsers: (state, action: PayloadAction<UserDTO[]>) => {
      return { ...state, users: action.payload };
    },
    ExpenseToDelete: (state, action: PayloadAction<ExpenseDTO>) => {
      return produce(state, (draftState) => {
        const expenseTypeIndex = GetExpenseTypeIndex(
          draftState.expenseTypes,
          action.payload.ExpenseType
        );
        if (expenseTypeIndex === -1) {
          return draftState;
        } else {
          Delete(draftState, expenseTypeIndex, action.payload.id);
        }
      });
    },
    AddExpenses: (state, action: PayloadAction<ExpenseDTO>) => {
      return produce(state, (draftState) => {
        const expenseTypeIndex = GetExpenseTypeIndex(
          draftState.expenseTypes,
          action.payload.ExpenseType
        );
        Add(draftState, expenseTypeIndex, action.payload);
      });
    },
    UpdateExpense: (state, action: PayloadAction<ExpenseDTO>) => {
      return produce(state, (draftState) => {
        const allExpenses = _.flatMap(draftState.expenseTypes, function (e) {
          return e.data;
        });
        const oldExpense = allExpenses.find((x) => x.id == action.payload.id);
        if (oldExpense == undefined) return { ...state };
        const hasExpenseTypeChanged =
          oldExpense.ExpenseType != action.payload.ExpenseType;
        if (hasExpenseTypeChanged) {
          //Tar bort den gamla expense från expense typen
          const oldExpenseTypeIndex = GetExpenseTypeIndex(
            draftState.expenseTypes,
            oldExpense.ExpenseType
          );
          Delete(draftState, oldExpenseTypeIndex, action.payload.id);
          //Lägger till den expense i den nya expense type
          const newExpenseTypeIndex = GetExpenseTypeIndex(
            draftState.expenseTypes,
            action.payload.ExpenseType
          );
          Add(draftState, newExpenseTypeIndex, action.payload);
        } else {
          const expenseTypeIndex = GetExpenseTypeIndex(
            draftState.expenseTypes,
            action.payload.ExpenseType
          );
          const expenseIndex = draftState.expenseTypes[
            expenseTypeIndex
          ].data.findIndex((e) => (e.id = action.payload.id));
          draftState.expenseTypes[expenseTypeIndex].data[expenseIndex] =
            action.payload;
        }
      });
    },
  },
});

const GetExpenseTypeIndex = (
  expenseTypes: WritableDraft<WritableDraft<IExpensesSectionList>>[],
  expenseTypeToFind: ExpenseType
): number => {
  return expenseTypes.findIndex((e) => e.id === expenseTypeToFind);
};

const Delete = (
  draftState: WritableDraft<
    WritableDraft<{ users: UserDTO[]; expenseTypes: IExpensesSectionList[] }>
  >,
  expenseTypeIndex: number,
  expenseId: string
) => {
  const currentExpenseType = draftState.expenseTypes[expenseTypeIndex];
  if (currentExpenseType.data.length === 1) {
    // Tar bort hela expense typen
    draftState.expenseTypes.splice(expenseTypeIndex, 1);
  } else {
    // Tar bort expense för aktuellt expense type
    const expenseIndex = currentExpenseType.data.findIndex(
      (e) => e.id === expenseId
    );
    draftState.expenseTypes[expenseTypeIndex].data.splice(expenseIndex, 1);
  }
};

const Add = (
  draftState: WritableDraft<
    WritableDraft<{ users: UserDTO[]; expenseTypes: IExpensesSectionList[] }>
  >,
  expenseTypeIndex: number,
  expense: ExpenseDTO
) => {
  if (expenseTypeIndex === -1) {
    const expenseType: IExpensesSectionList = {
      id: expense.ExpenseType,
      sectionTitle: ExpenseType[expense.ExpenseType],
      data: [expense],
    };
    draftState.expenseTypes.push(expenseType);
  } else {
    draftState.expenseTypes[expenseTypeIndex].data.push(expense);
  }
};

export const {
  AddUsers,
  AddExpenses,
  UpdateExpense,
  ExpenseToDelete,
} = baseReducer.actions;

export default baseReducer.reducer;

export const GetUsers = (state: RootState): UserDTO[] =>
  state.baseReducer.users;
