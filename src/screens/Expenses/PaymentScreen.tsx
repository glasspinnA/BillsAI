import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { ScreenContainer } from "../../components/Container/ScreenContainer.component";
import { CollapsablePresenter } from "../../components/FlatLists/CollapsableList/CollapsablePresenter";
import { ScreenHeaderText } from "../../components/Texts/ScreenHeader";
import { isDevModeEnabled } from "../../env/configs";
import { flatlistDummyData } from "../../helpers/testData";
import { IUserExpensesRoute } from "../../interface/IRoute";
import { IUserPayFlatList } from "../../interface/IUserPayFlatList";
export interface PaymentScreenProps {}

export function PaymentScreen(props: PaymentScreenProps) {
  const route = useRoute<IUserExpensesRoute>();
  const [payment, setPayment] = React.useState<IUserPayFlatList[]>(
    isDevModeEnabled ? flatlistDummyData : []
  );
  React.useEffect(() => {
    const payment = route.params?.userExpenses;
    setPayment(payment != undefined ? payment : []);
  }, []);

  return (
    <ScreenContainer>
      <ScreenHeaderText title="Payment" />
      <CollapsablePresenter item={payment} enableAccordion={true} />
    </ScreenContainer>
  );
}
