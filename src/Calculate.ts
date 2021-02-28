import { UserDTO } from "./DTO/UserDTO";

export const Calculate = (users: UserDTO[]): ResultDTO => {
  let result = {} as ResultDTO;
  if (users.some((x) => x.TotalEvenSharedExpenses > 0))
    result.SumToPayEvenShared = CalculateEvenSharedExpenses(users);
  if (users.some((x) => x.TotalIncomeBasedExpenses > 0)) {
    result.SumToPayIncomeBased = CalculateIncomeBasedExpenses(users);
  }
  return result;
};

export const CalculateIncomeBasedExpenses = (users: UserDTO[]): PayDTO[] => {
  const totalIncome = users.reduce((pv, cv) => pv + cv.Income, 0);
  const totalIncomeBasedExpenses = users.reduce(
    (pv, cv) => pv + cv.TotalIncomeBasedExpenses,
    0
  );

  const procental = totalIncomeBasedExpenses / totalIncome;

  return users.map(
    (x) =>
      ({
        Username: x.Username,
        SumToPay: (x.Income * procental).toFixed(2),
      } as PayDTO)
  );
};

export const CalculateEvenSharedExpenses = (users: UserDTO[]): PayDTO[] => {
  const totalSumToPay = users.reduce(
    (pv, cv) => pv + cv.TotalEvenSharedExpenses,
    0
  );

  const sum = totalSumToPay / users.length;

  return users.map(
    (x) =>
      ({
        Username: x.Username,
        SumToPay: (sum - x.TotalEvenSharedExpenses).toFixed(2),
      } as PayDTO)
  );
};
