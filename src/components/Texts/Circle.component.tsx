import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { IconChooser } from "../../enum/IconChooser";
import { CustomIcon } from "../Icons/CustomIcon";

export interface CircleProps {
  text: string;
}

export function Circle(props: CircleProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.circle,
        {
          backgroundColor: theme["color-primary-default"],
          borderColor: theme["color-primary-default"],
        },
      ]}
    >
      <Text style={{ color: theme["text-alternate-color"] }}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
  },
});
