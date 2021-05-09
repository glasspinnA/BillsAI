import { PayDTO } from "../DTO/PayDTO";

export interface IUserPayFlatList {
  id: string;
  data: PayDTO[];
  totalPay: string;
}
