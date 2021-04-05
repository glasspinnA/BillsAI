import { CalculateExpenses } from "./Calculate";
import { ExpenseType } from "./enum/ExpenseType";
import { dummyData } from "./helpers/testData";

test("Calculate_TwoUsers_ShouldReturnTwoUsers", () => {
  expect(CalculateExpenses(dummyData).length).toEqual(2);
});

test("Calculate_", () => {
  const totalSum = CalculateExpenses(dummyData).map((x) =>
    x.data.reduce((cv, pv) => pv.sumToPay + cv, 0).toFixed(0)
  );
  expect(totalSum).toEqual(["1279", "2362"]);
});

test("Calculate_", () => {
  const calculate = CalculateExpenses(dummyData);
  const user_1 = calculate[0].data
    .filter((x) => x.expenseType == ExpenseType.EVEN_SHARED)
    .reduce((cv, pv) => pv.sumToPay + cv, 0);
  const user_2 = calculate[1].data
    .filter((x) => x.expenseType == ExpenseType.EVEN_SHARED)
    .reduce((cv, pv) => pv.sumToPay + cv, 0);
  expect([user_1, user_2]).toEqual([195, 195]);
});
