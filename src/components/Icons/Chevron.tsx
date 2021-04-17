import * as React from "react";
import { Animated, Easing, View } from "react-native";
import { IconChooser } from "../../enum/IconChooser";
import { CustomIcon } from "./CustomIcon";

export interface ChevronProps {
  shouldToggleRotation: boolean;
}

export function Chevron(props: ChevronProps) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    RotateChevron();
  });

  const RotateChevron = () => {
    fadeAnim.setValue(props.shouldToggleRotation ? 1 : 0);
    Animated.timing(fadeAnim, {
      toValue: props.shouldToggleRotation ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const RotateData = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "0deg"],
  });

  return (
    <Animated.View
      style={{
        justifyContent: "center",
        transform: [{ rotateZ: RotateData }],
      }}
    >
      {CustomIcon(IconChooser.CHEVRON)}
    </Animated.View>
  );
}
