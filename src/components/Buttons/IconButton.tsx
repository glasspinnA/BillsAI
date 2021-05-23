import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { StyleProp } from "react-native";
import { ViewStyle } from "react-native";
import { Color } from "../../constants/Color";
import { IconChooser } from "../../enum/IconChooser";
import { CustomIcon } from "../Icons/CustomIcon";

export interface IconButtonProps {
  onPress: () => void;
  icon: IconChooser;
  style?: StyleProp<ViewStyle>;
  includeBackground?: boolean;
}

export function IconButton(props: IconButtonProps) {
  const theme = useTheme();
  return (
    <Button
      style={[
        {
          backgroundColor: props.includeBackground
            ? theme[Color.PRIMARY_500]
            : "transparent",
        },
        props.style,
      ]}
      onPress={props.onPress}
      accessoryLeft={() => CustomIcon(props.icon)}
      appearance="ghost"
    />
  );
}
