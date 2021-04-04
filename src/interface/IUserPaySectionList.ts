import { PayDTO } from "../DTO/PayDTO";

export interface IUserPaySectionList {
  id: string;
  sectionTitle: string;
  data: PayDTO[];
}
