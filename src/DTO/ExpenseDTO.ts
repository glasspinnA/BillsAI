import { ExpenseType } from "../enum/ExpenseType";
import { UserDTO } from "./UserDTO";

export interface ExpenseDTO {
  Name: string;
  Price: number;
  Users: UserDTO[] | any;
  ExpenseType: ExpenseType;
}
