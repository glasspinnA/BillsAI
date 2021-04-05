import { chain, values } from "lodash";
import { PayDTO } from "../DTO/PayDTO";
import { IUserPaySectionList } from "../interface/IUserPaySectionList";

export const GroupSumToPayByUserId = (pays: PayDTO[]) => {
  return chain(pays)
    .groupBy("userId")
    .map(
      (data, userId) =>
        ({
          id: userId,
          data: data,
          sectionTitle: data[0].username,
          totalPay: data.reduce((cv, pv) => pv.sumToPay + cv, 0).toFixed(0),
        } as IUserPaySectionList)
    )
    .value();
};

export const GetTotalSumForUser = () => {};
