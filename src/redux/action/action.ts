import { UserDTO } from "../../DTO/UserDTO";
import { IExpensesSectionList } from "../../interface/IExpensesSectionList";
import ActionTypes from "./../types/actionTypes";

export const AddUsers = (users: UserDTO[]) => ({
  type: ActionTypes.ADD_USERS,
  payload: users,
});

export const AddExpenses = (expenses: IExpensesSectionList) => ({
  type: ActionTypes.ADD_EXPENSES,
  payload: expenses,
});
