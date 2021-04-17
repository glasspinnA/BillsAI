import * as React from "react";
import { View } from "react-native";
import { Text, useTheme } from "@ui-kitten/components";

export interface ItemRowTextContainerProps {
  headerText: string;
  subText?: string;
}

export function ItemRowTextContainer(props: ItemRowTextContainerProps) {
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Text category="s1" style={{ color: theme["text-primary-color"] }}>
        {props.headerText}
      </Text>
      {props.subText != undefined ? (
        <Text category="s2" style={{ color: theme["text-basic-color"] }}>
          {props.subText}
        </Text>
      ) : null}
    </View>
  );
}
