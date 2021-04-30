import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { CalculateExpenses } from "../Calculate";
import { RoundedButton } from "../components/Buttons/RoundedButton";
import { CollapsablePresenter } from "../components/FlatLists/CollapsableList/CollapsablePresenter";
import AddForm from "../components/Forms/CreateExpense/Presenter/AddBillPresenter.component";
import GlobalLayout from "../constants/GlobalLayout";
import { IUserExpensesRoute } from "../interface/IRoute";
import { RootState } from "../redux/store/store";

export default function TabOneScreen() {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const expenses = useSelector(
    (state: RootState) => state.baseReducer.expenses
  );
  const navigation = useNavigation();

  const Calculate = () => {
    navigation.navigate("TabThree", {
      screen: "TabThreeScreen",
      params: {
        userExpenses: CalculateExpenses(expenses),
      } as IUserExpensesRoute,
    });
  };

  const OnEditPressed = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <Layout level="3" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>
        <RoundedButton
          title="Calculate"
          onPress={Calculate}
          disabled={expenses.length == 0}
        />
        <CollapsablePresenter
          item={expenses}
          enableAccordion={false}
          onEditPressed={OnEditPressed}
        />
        <AddForm bottomSheetRef={bottomSheetRef} />
      </SafeAreaView>
    </Layout>
  );
}
