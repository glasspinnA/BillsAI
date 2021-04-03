import { ExpenseType } from "../enum/ExpenseType";

export interface PayDTO {
  username: string;
  sumToPay: number;
  productname: string;
  expenseType: ExpenseType;
  userId: string;
}
