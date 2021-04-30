import { UserDTO } from "../DTO/UserDTO";
import { ExpenseType } from "../enum/ExpenseType";
import { isDevModeEnabled } from "../env/configs";
import { IExpensesSectionList } from "../interface/IExpensesSectionList";
import { IUserPayFlatList } from "../interface/IUserPaySectionList";

export const dummyData: IExpensesSectionList[] = [
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

export const flatlistDummyData: IUserPayFlatList[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    totalPay: 100,
    data: [
      {
        expenseType: 1,
        productname: "paj",
        sumToPay: 100,
        userId: "c1b1-46c2-aed5-3ad53abb28ba",
        username: "JonOscna",
      },
      {
        expenseType: 1,
        productname: "kebab",
        sumToPay: 200,
        userId: "c1b1-46c2-aed5-3ad53abb28ba",
        username: "JonOscna",
      },
      {
        expenseType: 1,
        productname: "burger",
        sumToPay: 50,
        userId: "c1b1-46c2-aed5-3ad53abb28ba",
        username: "JonOscna",
      },
    ],
  },
  {
    id: "c1b1-46c2-aed5-3ad53abb28ba",
    totalPay: 200,
    data: [
      {
        expenseType: 1,
        productname: "banan",
        sumToPay: 100,
        userId: "c1b1-46c2-aed5-3ad53abb28ba",
        username: "Jonna",
      },
      {
        expenseType: 1,
        productname: "peach",
        sumToPay: 200,
        userId: "c1b1-46c2-aed5-3ad53abb28ba",
        username: "Jonna",
      },
      {
        expenseType: 1,
        productname: "melon",
        sumToPay: 50,
        userId: "c1b1-46c2-aed5-3ad53abb28ba",
        username: "Jonna",
      },
    ],
  },
];

export const userDummyData = (): UserDTO[] => {
  return isDevModeEnabled
    ? [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          name: "First Item",
          title: "FI",
          isSelected: true,
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          name: "Second Item",
          title: "SI",
          isSelected: true,
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          name: "Third Item",
          title: "TI",
          isSelected: true,
        },
      ]
    : [];
};
