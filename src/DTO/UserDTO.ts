// export class UserDTO {
//   Username: string;
//   Income: number;
//   IncomeBasedExpenses: ExpenseDTO[];
//   EvenSharedExpenses: ExpenseDTO[];
//   TotalEvenSharedExpenses: number;
//   TotalIncomeBasedExpenses: number;

//   constructor(
//     Username: string,
//     Income: number,
//     IncomeBasedExpenses: ExpenseDTO[],
//     EvenSharedExpenses: ExpenseDTO[],
//     TotalEvenSharedExpenses: number,
//     TotalIncomeBasedExpenses: number
//   ) {
//     this.Username = Username;
//     this.Income = Income;
//     this.IncomeBasedExpenses = IncomeBasedExpenses;
//     this.EvenSharedExpenses = EvenSharedExpenses;
//     this.TotalEvenSharedExpenses = TotalEvenSharedExpenses;
//     this.TotalIncomeBasedExpenses = TotalIncomeBasedExpenses;
//   }
// }

interface UserDTO {
  Id: string;
  Income: string;
  IsSelected: boolean;
  Title: string;
}
