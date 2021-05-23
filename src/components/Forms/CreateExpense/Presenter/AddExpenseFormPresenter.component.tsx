import BottomSheet from "@gorhom/bottom-sheet";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseDTO } from "../../../../DTO/ExpenseDTO";
import {
  AnimationTypes,
  PerformAnimation,
} from "../../../../helpers/LayoutAnimation";
import { IFormInputs } from "../../../../interface/IFormInputs";
import {
  AddExpenses,
  UpdateExpense,
} from "../../../../redux/reducer/expenseReducer";
import { RootState } from "../../../../redux/store/store";
import { AddExpenseForm } from "../View/AddExpenseFormView.component";
import { v4 as uuidv4 } from "uuid";
import { UserDTO } from "../../../../DTO/UserDTO";
import { BottomSheetContainer } from "../../../BottomSheet/BottomSheet.component";

interface AddFormPresenterProps {
  bottomSheetRef: any;
  expenseToEdit?: ExpenseDTO;
  onClearForm: () => void;
}

const ExpenseForm = (props: AddFormPresenterProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.user.users);
  const [shouldClearForm, setFormState] = React.useState(false);

  const UpdateData = (data: UserDTO[]) => {
    // setData(data);
  };

  const IsAnyItemSelected = (users: UserDTO[]) => {
    return users.filter((x) => x.isSelected).length != 0;
  };

  const OnExpenseSubmitted = (data: IFormInputs) => {
    const expense = {
      id: data.ID === "-1" ? uuidv4() : data.ID,
      name: data.PRODUCT,
      Price: parseInt(data.PRICE),
      Users: data.USER.filter((x) => x.isSelected),
      ExpenseType: data.EXPENSE_TYPE,
    } as ExpenseDTO;
    if (data.ID === "-1") {
      AddExpense(expense);
    } else {
      _UpdateExpense(expense);
    }
    PerformAnimation(AnimationTypes.ROW_ITEM_ADD);
  };

  const AddExpense = (expense: ExpenseDTO) => {
    dispatch(AddExpenses(expense));
  };

  const _UpdateExpense = (expense: ExpenseDTO) => {
    dispatch(UpdateExpense(expense));
  };

  const OnAnimate = (fromIndex: number, toIndex: number) => {
    const shouldClearForm = fromIndex == 1 && toIndex == 0;
    setFormState(shouldClearForm);
    if (props.expenseToEdit && shouldClearForm) props.onClearForm();
  };

  return (
    <BottomSheetContainer
      bottomSheetRef={props.bottomSheetRef}
      onAnimate={OnAnimate}
    >
      <AddExpenseForm
        users={data}
        selectedIndex={selectedIndex}
        setSelectedIndex={(index: number) => setSelectedIndex(index)}
        isAnyItemSelected={IsAnyItemSelected}
        updateData={UpdateData}
        onAddExpense={OnExpenseSubmitted}
        prefilledForm={props.expenseToEdit}
        clearForm={shouldClearForm}
      />
    </BottomSheetContainer>
  );
};

export default ExpenseForm;
