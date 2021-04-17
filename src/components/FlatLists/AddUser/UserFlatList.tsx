import * as React from "react";
import { View, Text, FlatList, LayoutAnimation } from "react-native";
import CustomTextInput from "../../Inputs/CustomTextInput";
import UserItemRow from "./UserItemRow";
import { v4 as uuidv4 } from "uuid";
import {
  AnimationTypes,
  PerformAnimation,
} from "../../../helpers/LayoutAnimation";
import { EmptyListComponent } from "../EmptyListComponent";

export interface UserFlatListProps {
  data: UserDTO[];
  updateData(data: UserDTO[]): void;
}

export function UserFlatList(props: UserFlatListProps) {
  const [refresh, setRefresh] = React.useState(false);
  const flatlistRef = React.useRef<FlatList>(null);
  const DeleteItem = (id: any) => {
    const lists = props.data.filter((x) => x.id != id);
    props.updateData(lists);
    setRefresh(!refresh);
    PerformAnimation(LayoutAnimation.Presets.easeInEaseOut);
  };

  const OnSubmit = (text: string) => {
    const t: UserDTO[] = [
      ...props.data,
      {
        id: uuidv4(),
        name: text,
        title:
          text.length > 2
            ? text.substring(0, 2).toUpperCase()
            : text.toUpperCase(),
        isSelected: true,
      },
    ];

    props.updateData(t);
  };

  const OnIncomeAdded = (id: any, income: string) => {
    const index = props.data.findIndex((x) => x.id === id);
    if (index != -1) {
      props.data[index].income = income;
      props.updateData(props.data);
    }
    setRefresh(!refresh);
  };

  const RenderEmptyListComponent = () => {
    return <EmptyListComponent title={"Noting here"} text={"Add a user"} />;
  };

  return (
    <>
      <CustomTextInput
        placeholder="Add two or more users"
        onSubmit={OnSubmit}
      />
      <FlatList
        ref={flatlistRef}
        data={props.data}
        extraData={refresh}
        renderItem={({ item }) => {
          return (
            <UserItemRow
              item={item}
              OnDeleteItem={DeleteItem}
              onIncomeAdded={OnIncomeAdded}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={RenderEmptyListComponent}
        onContentSizeChange={() => flatlistRef.current?.scrollToEnd()}
      />
    </>
  );
}
