import { ExpenseType } from "../enum/ExpenseType";

export interface ExpenseDTO {
  id: string;
  Name: string;
  Price: number;
  Users: UserDTO[];
  ExpenseType: ExpenseType;
}
