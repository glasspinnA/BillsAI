export interface UserProductDTO {
  id: number;
  name: string;
  userId: number;
  productId: number;
  amount: number;
  createdDate: Date;
  deletedDate?: Date;
}
