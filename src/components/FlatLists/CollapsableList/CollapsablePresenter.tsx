import * as React from "react";
import { IUserPayFlatList } from "../../../interface/IUserPayFlatList";
import { IExpensesSectionList } from "../../../interface/IExpensesSectionList";
import { CollapsableView } from "./CollapsableView";
import { BaseFlatList } from "../BaseFlatList";
import { EmptyListComponent } from "../../EmptyList/EmptyList.compnent";
import { ExpenseDTO } from "../../../DTO/ExpenseDTO";

export interface CollapsablePresenterProps {
  item: IUserPayFlatList[] | IExpensesSectionList[];
  enableAccordion: boolean;
  onEditPressed?: (expense: ExpenseDTO) => void;
}

export function CollapsablePresenter(props: CollapsablePresenterProps) {
  const RenderEmptyListComponent = () => {
    return <EmptyListComponent title={"Nothing here"} />;
  };
  return (
    <BaseFlatList
      data={props.item}
      rowComponent={(item) => (
        <CollapsableView
          item={item}
          onItemEditPressed={props.onEditPressed}
          enableAccordion={props.enableAccordion}
        />
      )}
      emptyListComponent={RenderEmptyListComponent}
    />
  );
}
