import {
  Calculate,
  CalculateEvenSharedExpenses,
  CalculateIncomeBasedExpenses,
} from "./Calculate";
import { UserDTO } from "./DTO/UserDTO";

test("Calculate Even Shared Expenses", () => {
  const users = [
    {
      Username: "A",
      EvenSharedExpenses: [{ Price: 1000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 1000,
    } as UserDTO,
    {
      Username: "B",
      EvenSharedExpenses: [{ Price: 2000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 2000,
    } as UserDTO,
    {
      Username: "C",
      EvenSharedExpenses: [{ Price: 5000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 5000,
    } as UserDTO,
  ] as UserDTO[];

  expect(CalculateEvenSharedExpenses(users)).toEqual([
    { Username: "A", SumToPay: "1666.67" } as PayDTO,
    { Username: "B", SumToPay: "666.67" } as PayDTO,
    { Username: "C", SumToPay: "-2333.33" } as PayDTO,
  ] as PayDTO[]);
});

test("Calculate Income Based Expenses", () => {
  const users = [
    {
      Username: "A",
      Income: 10000,
      IncomeBasedExpenses: [{ Price: 1000 }] as ExpenseDTO[],
      TotalIncomeBasedExpenses: 1000,
    } as UserDTO,
    {
      Username: "B",
      Income: 20000,
      IncomeBasedExpenses: [{ Price: 2000 }] as ExpenseDTO[],
      TotalIncomeBasedExpenses: 2000,
    } as UserDTO,
  ] as UserDTO[];

  expect(CalculateIncomeBasedExpenses(users)).toEqual([
    { Username: "A", SumToPay: "1000.00" } as PayDTO,
    { Username: "B", SumToPay: "2000.00" } as PayDTO,
  ] as PayDTO[]);
});

test("Calculate", () => {
  const users = [
    {
      Username: "A",
      Income: 10000,
      IncomeBasedExpenses: [{ Price: 1000 }] as ExpenseDTO[],
      TotalIncomeBasedExpenses: 1000,
      EvenSharedExpenses: [{ Price: 1000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 1000,
    } as UserDTO,
    {
      Username: "B",
      Income: 20000,
      IncomeBasedExpenses: [{ Price: 2000 }] as ExpenseDTO[],
      TotalIncomeBasedExpenses: 2000,
      EvenSharedExpenses: [{ Price: 2000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 2000,
    } as UserDTO,
    {
      Username: "C",
      Income: 0,
      IncomeBasedExpenses: [{ Price: 0 }] as ExpenseDTO[],
      TotalIncomeBasedExpenses: 0,
      EvenSharedExpenses: [{ Price: 5000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 5000,
    } as UserDTO,
  ] as UserDTO[];

  expect(Calculate(users)).toEqual({
    SumToPayEvenShared: [
      { Username: "A", SumToPay: "1666.67" } as PayDTO,
      { Username: "B", SumToPay: "666.67" } as PayDTO,
      { Username: "C", SumToPay: "-2333.33" } as PayDTO,
    ] as PayDTO[],
    SumToPayIncomeBased: [
      { Username: "A", SumToPay: "1000.00" } as PayDTO,
      { Username: "B", SumToPay: "2000.00" } as PayDTO,
      { Username: "C", SumToPay: "0.00" } as PayDTO,
    ],
  } as ResultDTO);
});

test("", () => {
  const users = [
    {
      Username: "A",
      EvenSharedExpenses: [{ Price: 1000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 1000,
    } as UserDTO,
    {
      Username: "B",
      EvenSharedExpenses: [{ Price: 2000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 2000,
    } as UserDTO,
    {
      Username: "C",
      EvenSharedExpenses: [{ Price: 5000 }] as ExpenseDTO[],
      TotalEvenSharedExpenses: 5000,
    } as UserDTO,
  ] as UserDTO[];

  const result = {
    SumToPayEvenShared: [
      { Username: "A", SumToPay: "1666.67" } as PayDTO,
      { Username: "B", SumToPay: "666.67" } as PayDTO,
      { Username: "C", SumToPay: "-2333.33" } as PayDTO,
    ],
  } as ResultDTO;

  expect(Calculate(users)).toEqual(result);
});
