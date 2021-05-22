import { BaseDTO } from "./BaseDTO";

export interface ProductDTO extends BaseDTO {
  barcode?: string;
  createdDate?: Date;
  deletedDate?: Date;
}
