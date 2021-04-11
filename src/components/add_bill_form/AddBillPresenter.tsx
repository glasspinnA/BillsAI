import BottomSheet from "@gorhom/bottom-sheet";
import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseDTO } from "../../DTO/ExpenseDTO";
import { ExpenseType } from "../../enum/ExpenseType";
import {
  AnimationTypes,
  PerformAnimation,
} from "../../helpers/LayoutAnimation";
import { IExpensesSectionList } from "../../interface/IExpensesSectionList";
import { IFormInputs } from "../../interface/IFormInputs";
import { AddExpenses } from "../../redux/reducer/baseReducer";
import { RootState } from "../../redux/store/store";
import { AddBillView } from "./AddBillView";

interface AddFormPresenterProps {
  bottomSheetRef: any;
}

const AddForm = (props: AddFormPresenterProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.baseReducer.users);

  const UpdateData = (data: UserDTO[]) => {
    // setData(data);
  };

  const IsAnyItemSelected = (users: UserDTO[]) => {
    return users.filter((x) => x.isSelected).length != 0;
  };

  const OnAddExpense = (data: IFormInputs) => {
    const obj = {
      Name: data.PRODUCT,
      Price: parseInt(data.PRICE),
      Users: data.USER.filter((x) => x.isSelected).map((x) => x as UserDTO),
      ExpenseType: data.EXPENSE_TYPE,
    } as ExpenseDTO;

    const d = {
      id: data.EXPENSE_TYPE,
      sectionTitle: ExpenseType[data.EXPENSE_TYPE],
      data: [obj],
    } as IExpensesSectionList;
    dispatch(AddExpenses(d));
    PerformAnimation(AnimationTypes.ROW_ITEM_ADD);
  };

  const snapPoints = React.useMemo(() => [-1, "70%"], []);

  return (
    <BottomSheet ref={props.bottomSheetRef} index={1} snapPoints={snapPoints}>
      <AddBillView
        data={data}
        selectedIndex={selectedIndex}
        setSelectedIndex={(index: number) => setSelectedIndex(index)}
        isAnyItemSelected={IsAnyItemSelected}
        updateData={UpdateData}
        onAddExpense={OnAddExpense}
      />
    </BottomSheet>
  );
};

export default AddForm;
