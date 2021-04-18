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
  const [isItemBodyOpen, setItemBodyState] = React.useState(
    props.enableAccordion ? false : true
  );

  const OnItemHeaderPressed = () => {
    setItemBodyState(!isItemBodyOpen);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <BaseFlatList
      data={props.item}
      rowComponent={(item) => (
        <CollapsableView
          item={item}
          onItemHeaderPressed={OnItemHeaderPressed}
          onItemEditPressed={props.onEditPressed}
          itemBodyState={isItemBodyOpen}
          enableAccordion={props.enableAccordion}
        />
      )}
    />
  );
}
