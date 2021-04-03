import { Calculate } from "./Calculate";
import { RootState } from "./redux/store/store";
import { ExpenseType } from "./enum/ExpenseType";

const data: RootState = {
  baseReducer: {
    users: [
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
    expenses: [
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
    ],
  },
};

test("Calculate_TwoUsers_ShouldReturnTwoUsers", () => {
  expect(Calculate(data).length).toEqual(2);
});

test("Calculate_", () => {
  const totalSum = Calculate(data).map((x) =>
    x.reduce((cv, pv) => pv.sumToPay + cv, 0).toFixed(0)
  );
  expect(totalSum).toEqual(["1279", "2362"]);
});

test("Calculate_EvenSharedIncome_ShouldReturn195ForEachUser", () => {
  const calculate = Calculate(data);
  const user_1 = calculate[0]
    .filter((x) => x.expenseType == ExpenseType.EVEN_SHARED)
    .reduce((cv, pv) => pv.sumToPay + cv, 0);
  const user_2 = calculate[1]
    .filter((x) => x.expenseType == ExpenseType.EVEN_SHARED)
    .reduce((cv, pv) => pv.sumToPay + cv, 0);
  expect([user_1, user_2]).toEqual([195, 195]);
});
