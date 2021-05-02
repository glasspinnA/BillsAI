import * as React from "react";
import { UserDTO } from "../../../DTO/UserDTO";
import { BaseFlatList } from "../BaseFlatList";
import UserChooserRowItem from "./UserChooserRowItem";
import { Text } from "@ui-kitten/components";

export interface HListProps {
  data: UserDTO[];
  updateData?: (data: UserDTO[]) => void;
  isReadOnly: boolean;
}

export function HList(props: HListProps) {
  const OnSelectedRowItem = (item: UserDTO, isSelectedState: boolean) => {
    const index = props.data.findIndex((x) => x.id === item.id);
    if (index != -1) {
      props.data[index].isSelected = isSelectedState;
      if (props.updateData != undefined) props.updateData(props.data);
    }
  };

  return (
    <>
      <Text category="s1">
        {props.isReadOnly ? "Shared with" : "Share with"}
      </Text>
      <BaseFlatList
        data={props.data}
        rowComponent={(item) => (
          <UserChooserRowItem
            onSelected={OnSelectedRowItem}
            user={item}
            isReadOnly={props.isReadOnly}
          />
        )}
        horizontal={true}
      />
    </>
  );
}
