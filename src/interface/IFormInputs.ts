import { UserDTO } from "../DTO/UserDTO";
import { ExpenseType } from "../enum/ExpenseType";

export interface IFormInputs {
  PRODUCT: string;
  PRICE: string;
  USER: UserDTO[];
  EXPENSE_TYPE: ExpenseType;
  ID: string;
  AMOUNT: string;
  NAME: string;
  DATE: Date;
}
