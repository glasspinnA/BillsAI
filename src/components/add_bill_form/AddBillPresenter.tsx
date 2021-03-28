import BottomSheet from "@gorhom/bottom-sheet";
import * as React from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseDTO } from "../../DTO/ExpenseDTO";
import { ExpenseType } from "../../enum/ExpenseType";
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

  const OnSubmit = (data: IFormInputs) => {
    const obj = {
      Name: data.PRODUCT,
      Price: parseInt(data.PRICE),
      Users: data.USER.filter((x) => x.isSelected),
      ExpenseType: ExpenseType[data.EXPENSE_TYPE],
    } as ExpenseDTO;

    const d = {
      id: data.EXPENSE_TYPE,
      sectionTitle: ExpenseType[data.EXPENSE_TYPE],
      data: [obj],
    } as IExpensesSectionList;

    dispatch(AddExpenses(d));
  };

  const snapPoints = React.useMemo(() => [-1, "50%"], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={props.bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <AddBillView
        data={data}
        selectedIndex={selectedIndex}
        setSelectedIndex={(index: number) => setSelectedIndex(index)}
        isAnyItemSelected={IsAnyItemSelected}
        updateData={UpdateData}
        onSubmit={OnSubmit}
      />
    </BottomSheet>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  container: {},

  input: {
    backgroundColor: "white",
    borderColor: "blue",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
