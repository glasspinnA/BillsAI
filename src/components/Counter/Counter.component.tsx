import * as React from "react";
import { View } from "react-native";
import { IconChooser } from "../../enum/IconChooser";
import { IconButton } from "../Buttons/IconButton";
import { Text } from "@ui-kitten/components/ui/text/text.component";
export interface CounterProps {
  count: number;
  onCountChange: (increase: boolean) => void;
}

export function Counter(props: CounterProps) {
  const OnIncreasePressed = () => props.onCountChange(true);
  const OnDecreasePressed = () => {
    if (props.count > 1) props.onCountChange(false);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <IconButton
        icon={IconChooser.INCREASE_PLUS}
        onPress={OnIncreasePressed}
      />
      <Text>{props.count}</Text>
      <IconButton
        icon={IconChooser.DECREASE_MINUS}
        onPress={OnDecreasePressed}
      />
    </View>
  );
}
