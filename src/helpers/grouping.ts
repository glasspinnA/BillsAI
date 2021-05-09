import { chain, values } from "lodash";
import { PayDTO } from "../DTO/PayDTO";
import { IUserPayFlatList } from "../interface/IUserPayFlatList";

export const GroupSumToPayByUserId = (pays: PayDTO[]) => {
  return chain(pays)
    .groupBy("userId")
    .map(
      (data, userId) =>
        ({
          id: userId,
          data: data,
          totalPay: data.reduce((cv, pv) => pv.sumToPay + cv, 0).toFixed(2),
        } as IUserPayFlatList)
    )
    .value();
};

export const GetTotalSumForUser = () => {};
