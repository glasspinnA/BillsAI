import { ExpenseDTO } from "../DTO/ExpenseDTO";
import { ExpenseType } from "../enum/ExpenseType";

export interface IExpensesSectionList {
  id: ExpenseType;
  sectionTitle: string;
  data: ExpenseDTO[];
}
