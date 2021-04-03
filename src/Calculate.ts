import { Dictionary } from "lodash";
import { ExpenseDTO } from "./DTO/ExpenseDTO";
import { PayDTO } from "./DTO/PayDTO";
import { ExpenseType } from "./enum/ExpenseType";
import { GroupSumToPayByUserId } from "./helpers/grouping";
import { RootState } from "./redux/store/store";

export const Calculate = (data: RootState): PayDTO[][] => {
  const expensesByExpenseType = data.baseReducer.expenses;
  let pays: PayDTO[] = [];
  expensesByExpenseType.map((expenseType) => {
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
            productname: expense.Name,
            sumToPay: (user.income != undefined ? user.income : 0) * procental,
            name: expense.Name,
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
            productname: expense.Name,
            sumToPay: priceToPay,
            name: expense.Name,
            userId: user.id,
          } as PayDTO)
      );
    })
    .flat();
};
