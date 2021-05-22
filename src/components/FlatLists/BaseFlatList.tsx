import * as React from "react";
import { FlatList } from "react-native";

export interface BaseFlatListProps {
  data: any;
  shouldRefresh?: boolean;
  horizontal?: boolean;
  shouldScrollToEnd?: boolean;
  scrollEnabled?: boolean;
  emptyListComponent?: () => JSX.Element;
  rowComponent: (item: any) => JSX.Element;
  keyExtractor?: (item: any) => string;
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
      keyExtractor={
        props.keyExtractor == null || props.keyExtractor == undefined
          ? (item) => item.id
          : props.keyExtractor
      }
      ListEmptyComponent={props.emptyListComponent}
      onContentSizeChange={ScrollToEnd}
      scrollEnabled={props.scrollEnabled}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
}
