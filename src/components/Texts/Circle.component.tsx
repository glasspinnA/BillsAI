import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Color } from "../../constants/Color";
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
          backgroundColor: theme[Color.PRIMARY_500],
          borderColor: theme[Color.PRIMARY_500],
        },
      ]}
    >
      <Text style={{ color: theme[Color.TEXT.WHITE] }}>{props.text}</Text>
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
