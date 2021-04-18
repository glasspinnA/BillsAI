import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { useDispatch } from "react-redux";
import { ExpenseDTO } from "../../../DTO/ExpenseDTO";
import {
  ExpenseToDelete,
  ExpenseToEdit,
} from "../../../redux/reducer/baseReducer";
import { HList } from "../UserSelector/HList";

export interface ExpenseRowItemBodyProps {
  expense: ExpenseDTO;
  onEditExpensePressed?: () => void;
}

export const ExpenseRowItemBody = (props: ExpenseRowItemBodyProps) => {
  const dispatch = useDispatch();

  const OnDeleteExpensePressed = (expense: ExpenseDTO) => {
    dispatch(ExpenseToDelete(expense));
  };

  const OnEditExpensePressed = (expense: ExpenseDTO) => {
    dispatch(ExpenseToEdit(expense));
    if (props.onEditExpensePressed != undefined) props.onEditExpensePressed();
  };

  return (
    <>
      <Button onPress={() => OnEditExpensePressed(props.expense)}>Edit</Button>
      <Button onPress={() => OnDeleteExpensePressed(props.expense)}>
        Delete
      </Button>
      <HList data={props.expense.Users} isReadOnly={true} />
    </>
  );
};
