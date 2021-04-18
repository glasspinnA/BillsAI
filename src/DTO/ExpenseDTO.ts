import { ExpenseType } from "../enum/ExpenseType";
import { BaseDTO } from "./BaseDTO";
import { UserDTO } from "./UserDTO";

export interface ExpenseDTO extends BaseDTO {
  id: string;
  Price: number;
  Users: UserDTO[];
  ExpenseType: ExpenseType;
}
