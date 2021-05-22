import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { CalculateExpenses } from "../../Calculate";
import { RoundedButton } from "../../components/Buttons/RoundedButton";
import { ScreenContainer } from "../../components/Container/ScreenContainer.component";
import { CollapsablePresenter } from "../../components/FlatLists/CollapsableList/CollapsablePresenter";
import ExpenseForm from "../../components/Forms/CreateExpense/Presenter/AddExpenseFormPresenter.component";
import { ScreenHeaderText } from "../../components/Texts/ScreenHeader";
import GlobalLayout from "../../constants/GlobalLayout";
import { SCREEN_NAME } from "../../constants/Screens";
import { ExpenseDTO } from "../../DTO/ExpenseDTO";
import { IUserExpensesRoute } from "../../interface/IRoute";
import { RootState } from "../../redux/store/store";

export default function ExpenseScreen() {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const expenses = useSelector(
    (state: RootState) => state.expense.expenseTypes
  );
  const [expenseToEdit, setExpenseToEdit] = React.useState<
    ExpenseDTO | undefined
  >(undefined);
  const navigation = useNavigation();
  const Calculate = () => {
    navigation.navigate(SCREEN_NAME.PAYMENT_SCREEN, {
      screen: SCREEN_NAME.PAYMENT_SCREEN,
      name: SCREEN_NAME.PAYMENT_SCREEN,
      key: SCREEN_NAME.PAYMENT_SCREEN,
      params: {
        userExpenses: CalculateExpenses(expenses),
      },
    } as IUserExpensesRoute);
  };
  const OnEditPressed = (expense: ExpenseDTO) => {
    setExpenseToEdit(expense);
    bottomSheetRef.current?.expand();
  };

  const OnClearForm = () => {
    setExpenseToEdit(undefined);
  };

  return (
    <ScreenContainer>
      <ScreenHeaderText title="Expenses" />
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
      <ExpenseForm
        bottomSheetRef={bottomSheetRef}
        expenseToEdit={expenseToEdit}
        onClearForm={OnClearForm}
      />
    </ScreenContainer>
  );
}
