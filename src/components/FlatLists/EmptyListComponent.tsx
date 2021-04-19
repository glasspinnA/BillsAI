import { Text } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";

export interface EmptyListComponentProps {
  title: string;
  text?: string;
}

export function EmptyListComponent(props: EmptyListComponentProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text category="h1" style={{ marginVertical: 10 }}>
        {props.title}
      </Text>
      <Text category="h4" style={{ marginVertical: 60 }}>
        {props.text}
      </Text>
    </View>
  );
}
