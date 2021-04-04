import { CalculateExpenses } from "./Calculate";
import { ExpenseType } from "./enum/ExpenseType";
import { IExpensesSectionList } from "./interface/IExpensesSectionList";

const data: IExpensesSectionList[] = [
  {
    id: 0,
    sectionTitle: "INCOME_BASED",
    data: [
      {
        Name: "1",
        Price: 100,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.INCOME_BASED,
      },
      {
        Name: "1",
        Price: 50,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.INCOME_BASED,
      },
      {
        Name: "1",
        Price: 100,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.INCOME_BASED,
      },
      {
        Name: "1",
        Price: 3000,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.INCOME_BASED,
      },
      {
        Name: "1",
        Price: 1,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.INCOME_BASED,
      },
    ],
  },
  {
    id: 1,
    sectionTitle: "EVEN_SHARED",
    data: [
      {
        Name: "Tomat",
        Price: 40,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.EVEN_SHARED,
      },
      {
        Name: "Snö",
        Price: 300,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.EVEN_SHARED,
      },
      {
        Name: "Köttbullar",
        Price: 30,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.EVEN_SHARED,
      },
      {
        Name: "Potatis",
        Price: 20,
        Users: [
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "First Item",
            income: 1000,
            title: "JO",
            isSelected: true,
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Second Item",
            income: 2000,
            title: "SI",
            isSelected: true,
          },
        ],
        ExpenseType: ExpenseType.EVEN_SHARED,
      },
    ],
  },
];

test("Calculate_TwoUsers_ShouldReturnTwoUsers", () => {
  expect(CalculateExpenses(data).length).toEqual(2);
});

test("Calculate_", () => {
  const totalSum = CalculateExpenses(data).map((x) =>
    x.data.reduce((cv, pv) => pv.sumToPay + cv, 0).toFixed(0)
  );
  expect(totalSum).toEqual(["1279", "2362"]);
});

test("Calculate_", () => {
  const calculate = CalculateExpenses(data);
  const user_1 = calculate[0].data
    .filter((x) => x.expenseType == ExpenseType.EVEN_SHARED)
    .reduce((cv, pv) => pv.sumToPay + cv, 0);
  const user_2 = calculate[1].data
    .filter((x) => x.expenseType == ExpenseType.EVEN_SHARED)
    .reduce((cv, pv) => pv.sumToPay + cv, 0);
  expect([user_1, user_2]).toEqual([195, 195]);
});
