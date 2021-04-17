import * as React from "react";
import { BaseFlatList } from "../BaseFlatList";
import { UserExpenseRowItem } from "./UserExpenseRowItem";

export interface ExpenseListProps {
  data: any;
  enableAccordion: boolean;
  onEditPressed?: () => void;
}

export function ExpenseList(props: ExpenseListProps) {
  return (
    <BaseFlatList
      data={props.data}
      rowComponent={(item) => (
        <UserExpenseRowItem
          item={item}
          enableAccordion={props.enableAccordion}
          onEditPressed={props.onEditPressed}
        />
      )}
    />
  );
}
