import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { CalculateExpenses } from "../Calculate";
import AddForm from "../components/add_bill_form/AddBillPresenter";
import { UserExpenseRowItem } from "../components/UserExpenseFlatList/UserExpenseRowItem";
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

  return (
    <Layout level="3" style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Button onPress={Calculate} disabled={expenses.length == 0}>
          Calculate
        </Button>
        <FlatList
          data={expenses}
          keyExtractor={(item, index) => (item.id + index).toString()}
          renderItem={({ item }) => (
            <UserExpenseRowItem item={item} enableAccordion={false} />
          )}
        />
        <AddForm bottomSheetRef={bottomSheetRef} />
      </SafeAreaView>
    </Layout>
  );
}
