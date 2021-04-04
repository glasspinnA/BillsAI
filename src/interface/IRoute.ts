import { PayDTO } from "../DTO/PayDTO";
import { IUserPaySectionList } from "./IUserPaySectionList";
export interface IUserExpensesRoute {
  userExpenses: IUserPaySectionList[];
}
