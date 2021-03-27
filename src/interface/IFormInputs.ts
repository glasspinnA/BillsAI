import { ExpenseType } from "../enum/ExpenseType";

export interface IFormInputs {
  PRODUCT: string;
  PRICE: string;
  USER: UserDTO[];
  EXPENSE_TYPE: ExpenseType;
}
