import * as React from "react";
import { LayoutAnimation } from "react-native";
import { IUserPayFlatList } from "../../../interface/IUserPaySectionList";
import { IExpensesSectionList } from "../../../interface/IExpensesSectionList";
import { CollapsableView } from "./CollapsableView";
import { BaseFlatList } from "../BaseFlatList";
import { EmptyListComponent } from "../../EmptyList/EmptyList.compnent";

export interface CollapsablePresenterProps {
  item: IUserPayFlatList[] | IExpensesSectionList[];
  enableAccordion: boolean;
  onEditPressed?: () => void;
}

export function CollapsablePresenter(props: CollapsablePresenterProps) {
  const RenderEmptyListComponent = () => {
    return <EmptyListComponent title={"Noting here"} />;
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
