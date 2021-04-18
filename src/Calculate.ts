import { ExpenseDTO } from "./DTO/ExpenseDTO";
import { PayDTO } from "./DTO/PayDTO";
import { ExpenseType } from "./enum/ExpenseType";
import { GroupSumToPayByUserId } from "./helpers/grouping";
import { IExpensesSectionList } from "./interface/IExpensesSectionList";

export const CalculateExpenses = (data: IExpensesSectionList[]) => {
  let pays: PayDTO[] = [];
  data.map((expenseType) => {
    if (expenseType.id == ExpenseType.EVEN_SHARED) {
      pays = pays.concat(CalculateEvenSharedExpenses(expenseType.data));
    } else {
      pays = pays.concat(CalculateIncomeBased(expenseType.data));
    }
  });
  return GroupSumToPayByUserId(pays);
};

const CalculateIncomeBased = (expenses: ExpenseDTO[]): PayDTO[] => {
  return expenses
    .map((expense) => {
      const totalIncome = expense.Users.reduce(
        (pv, cv) => pv + (cv.income != undefined ? cv.income : 0),
        0
      );
      const procental = expense.Price / totalIncome;

      return expense.Users.map(
        (user) =>
          ({
            username: user.name,
            expenseType: expense.ExpenseType,
            productname: expense.name,
            sumToPay: (user.income != undefined ? user.income : 0) * procental,
            name: expense.name,
            userId: user.id,
          } as PayDTO)
      );
    })
    .flat();
};

const CalculateEvenSharedExpenses = (expenses: ExpenseDTO[]): PayDTO[] => {
  return expenses
    .map((expense) => {
      const priceToPay = expense.Price / expense.Users.length;
      return expense.Users.map(
        (user) =>
          ({
            username: user.name,
            expenseType: expense.ExpenseType,
            productname: expense.name,
            sumToPay: priceToPay,
            name: expense.name,
            userId: user.id,
          } as PayDTO)
      );
    })
    .flat();
};
