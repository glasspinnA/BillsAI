import * as React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { IconChooser } from "../../../enum/IconChooser";
import { CustomIcon } from "../../Icons/CustomIcon";

export interface RadioButtonProps {
  isSelected?: boolean;
  color?: string;
  index: number;
  onSelected?: (index: number) => void;
}

export function RadioButton(props: RadioButtonProps) {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.onSelected && props.onSelected(props.index)}
    >
      <View
        style={{
          alignSelf: "center",
          backgroundColor: props.color == undefined ? "red" : props.color,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          width: 50,
        }}
      >
        {props.isSelected && CustomIcon(IconChooser.CHECK_NO_BACKGROUND)}
      </View>
    </TouchableWithoutFeedback>
  );
}
