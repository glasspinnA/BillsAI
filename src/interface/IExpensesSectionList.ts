import { ExpenseDTO } from "../DTO/ExpenseDTO";

export interface IExpensesSectionList {
  IncomeBased?: ExpenseDTO[];
  EvenShared?: ExpenseDTO[];
}
