import { Text } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";

export interface EmptyListComponentProps {
  title: string;
  text?: string;
}

export function EmptyListComponent(props: EmptyListComponentProps) {
  return (
    <>
      <Text category="h3" style={{ marginVertical: 10 }}>
        {props.title}
      </Text>
      <Text category="h5" style={{ marginVertical: 10 }}>
        {props.text}
      </Text>
    </>
  );
}
