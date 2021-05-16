import * as React from "react";
import { View, Text, FlexStyle, StyleProp } from "react-native";

interface RadioGroupProps {
  children: React.ReactNode;
  selectedIndex: number;
  onChange: (index: number) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  const children = React.Children.map(props.children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isSelected: index == props.selectedIndex,
        index: index,
        onSelected: props.onChange,
      });
    }
  });
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  );
};
