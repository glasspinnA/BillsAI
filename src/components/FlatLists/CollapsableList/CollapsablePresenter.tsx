import * as React from "react";
import { LayoutAnimation } from "react-native";
import { IUserPayFlatList } from "../../../interface/IUserPaySectionList";
import { IExpensesSectionList } from "../../../interface/IExpensesSectionList";
import { CollapsableView } from "./CollapsableView";
import { BaseFlatList } from "../BaseFlatList";

export interface CollapsablePresenterProps {
  item: IUserPayFlatList[] | IExpensesSectionList[];
  enableAccordion: boolean;
  onEditPressed?: () => void;
}

export function CollapsablePresenter(props: CollapsablePresenterProps) {
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
    />
  );
}
