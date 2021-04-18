import { BaseDTO } from "./BaseDTO";

export interface UserDTO extends BaseDTO {
  income?: number;
  isSelected?: boolean;
  title: string;
}
