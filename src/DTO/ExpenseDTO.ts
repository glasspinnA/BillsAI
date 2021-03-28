import { ExpenseType } from "../enum/ExpenseType";

export interface ExpenseDTO {
  Name: string;
  Price: number;
  Users: UserDTO[] | any;
  ExpenseType: string;
}
