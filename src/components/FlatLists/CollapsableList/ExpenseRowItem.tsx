import * as React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { ExpenseDTO } from "../../../DTO/ExpenseDTO";
import { IconChooser } from "../../../enum/IconChooser";
import { ExpenseToDelete } from "../../../redux/reducer/expenseReducer";
import { IconButton } from "../../Buttons/IconButton";
import { HList } from "../UserSelector/HList";

export interface ExpenseRowItemBodyProps {
  expense: ExpenseDTO;
  onEditExpensePressed?: (expense: ExpenseDTO) => void;
}

export const ExpenseRowItemBody = (props: ExpenseRowItemBodyProps) => {
  const dispatch = useDispatch();

  const OnDeleteExpensePressed = (expense: ExpenseDTO) => {
    dispatch(ExpenseToDelete(expense));
  };

  const OnEditExpensePressed = (expense: ExpenseDTO) => {
    if (props.onEditExpensePressed != undefined)
      props.onEditExpensePressed(expense);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <View style={{ flex: 1 }}>
          <HList data={props.expense.Users} isReadOnly={true} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <IconButton
            onPress={() => OnEditExpensePressed(props.expense)}
            icon={IconChooser.EDIT}
          />
          <IconButton
            onPress={() => OnDeleteExpensePressed(props.expense)}
            icon={IconChooser.REMOVE}
          />
        </View>
      </View>
    </View>
  );
};
