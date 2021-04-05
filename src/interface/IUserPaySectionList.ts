import { PayDTO } from "../DTO/PayDTO";

export interface IUserPaySectionList {
  id: string;
  sectionTitle: string;
  data: PayDTO[];
  totalPay: string;
}

export interface IUserPayFlatList {
  id: string;
  data: PayDTO[];
  totalPay: number;
}
