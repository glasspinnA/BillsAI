import { PayDTO } from "../DTO/PayDTO";
import { IUserPayFlatList } from "./IUserPayFlatList";
export interface IUserExpensesRoute {
  key: string;
  name: string;
  screen: string;
  params: {
    userExpenses: IUserPayFlatList[];
  };
}
