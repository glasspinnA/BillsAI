import { ExpenseDTO } from "../DTO/ExpenseDTO";
import { PayDTO } from "../DTO/PayDTO";
import { ExpenseType } from "../enum/ExpenseType";

export const IsPayDTO = (data: PayDTO | ExpenseDTO): data is PayDTO => {
  return data && (data as PayDTO).userId !== undefined;
};

export const GetHeaderTitle = (expenseType: ExpenseType) => {
  switch (expenseType) {
    case ExpenseType.INCOME_BASED:
      return "Income based";
    default:
      return "50/50 Shared";
  }
};
