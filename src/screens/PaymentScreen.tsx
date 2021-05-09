import { useRoute } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { CollapsablePresenter } from "../components/FlatLists/CollapsableList/CollapsablePresenter";
import { ScreenHeaderText } from "../components/Texts/ScreenHeader";
import GlobalLayout from "../constants/GlobalLayout";
import { isDevModeEnabled } from "../env/configs";
import { flatlistDummyData } from "../helpers/testData";
import { IUserExpensesRoute } from "../interface/IRoute";
import { IUserPayFlatList } from "../interface/IUserPayFlatList";
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
    <Layout level="2" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScreenHeaderText title="Payment" />
        <CollapsablePresenter item={payment} enableAccordion={true} />
      </SafeAreaView>
    </Layout>
  );
}
