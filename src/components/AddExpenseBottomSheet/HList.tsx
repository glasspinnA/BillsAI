import * as React from "react";
import { FlatList } from "react-native";
import UserChooserRowItem from "./UserChooserRowItem";

export interface HListProps {
  data: UserDTO[];
  updateData(data: UserDTO[]): void;
}

export function HList(props: HListProps) {
  const [canAnyItemBeSelected, setCanAnyItemBeSelected] = React.useState(true);
  const [refresh, setRefresh] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<any>([]);
  const OnSelectedRowItem = (item: UserDTO, isSelectedState: boolean) => {
    const index = props.data.findIndex((x) => x.id === item.id);
    if (index != -1) {
      props.data[index].isSelected = isSelectedState;
      props.updateData(props.data);
      setRefresh(!refresh);
    }
  };
  return (
    <FlatList
      extraData={refresh}
      horizontal={true}
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <UserChooserRowItem
            onSelected={OnSelectedRowItem}
            setCanAnyItemBeSelected={canAnyItemBeSelected}
            itemThatCanBeSelected={selectedItem}
            user={item}
          />
        );
      }}
    />
  );
}
