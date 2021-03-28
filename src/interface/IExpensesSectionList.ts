import { ExpenseDTO } from "../DTO/ExpenseDTO";
import { ExpenseType } from "../enum/ExpenseType";

export interface IExpensesSectionList {
  Id: ExpenseType;
  Data: ExpenseDTO[];
}

interface TestObject {}
