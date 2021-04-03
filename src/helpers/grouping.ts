import { chain, values } from "lodash";
import { PayDTO } from "../DTO/PayDTO";

export const GroupSumToPayByUserId = (pays: PayDTO[]) => {
  return values(
    chain(pays)
      .groupBy("userId")
      .mapValues((v) => chain(v).flattenDeep().value())
      .value()
  );
};

export const GetTotalSumForUser = () => {};
