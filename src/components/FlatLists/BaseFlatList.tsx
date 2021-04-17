import * as React from "react";
import { FlatList } from "react-native";

export interface BaseFlatListProps {
  data: any;
  shouldRefresh?: boolean;
  horizontal?: boolean;
  shouldScrollToEnd?: boolean;
  emptyListComponent?: () => JSX.Element;
  rowComponent: (item: any) => JSX.Element;
}

export function BaseFlatList(props: BaseFlatListProps) {
  const flatlistRef = React.useRef<FlatList>(null);

  const ScrollToEnd = () => {
    if (props.shouldScrollToEnd) flatlistRef.current?.scrollToEnd();
  };

  return (
    <FlatList
      ref={flatlistRef}
      data={props.data}
      horizontal={props.horizontal}
      extraData={props.shouldRefresh}
      renderItem={({ item }) => {
        return props.rowComponent(item);
      }}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={props.emptyListComponent}
      onContentSizeChange={ScrollToEnd}
    />
  );
}
