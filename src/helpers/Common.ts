import { ExpenseDTO } from "../DTO/ExpenseDTO";
import { PayDTO } from "../DTO/PayDTO";
import { ProductDTO } from "../DTO/ProductDTO";
import { UserDTO } from "../DTO/UserDTO";
import { UserProductDTO } from "../DTO/UserProductDTO";
import { ExpenseType } from "../enum/ExpenseType";
import { IExpensesSectionList } from "../interface/IExpensesSectionList";
import { IUserPayFlatList } from "../interface/IUserPayFlatList";

export const IsPayDTO = (data: PayDTO | ExpenseDTO): data is PayDTO => {
  return data && (data as PayDTO).userId !== undefined;
};

export const IsUserPayFlatList = (
  data: IUserPayFlatList | IExpensesSectionList
): data is IUserPayFlatList => {
  return data && (data as IUserPayFlatList).totalPay !== undefined;
};

export const IsUserProductDTO = (
  data: UserProductDTO | ProductDTO
): data is UserProductDTO => {
  return data && (data as UserProductDTO).amount !== undefined;
};

export const GetHeaderTitle = (expenseType: ExpenseType) => {
  switch (expenseType) {
    case ExpenseType.INCOME_BASED:
      return "Income based";
    default:
      return "50/50 Shared";
  }
};
