import { ProductDTO } from "../DTO/ProductDTO";
import { UserProductDTO } from "../DTO/UserProductDTO";
import { IUserPayFlatList } from "./IUserPayFlatList";

interface BaseIRoute {
  key: string;
  name: string;
  screen: string;
}

export interface IUserExpensesRoute extends BaseIRoute {
  params: {
    userExpenses: IUserPayFlatList[];
  };
}

export interface IScannerProductRoute extends BaseIRoute {
  params: {
    product: ProductDTO[];
  };
}

export interface IEditScannerProductRoute extends BaseIRoute {
  params: {
    product: UserProductDTO[];
  };
}
