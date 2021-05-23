import * as React from "react";
import { Text } from "@ui-kitten/components/ui/text/text.component";
import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import { Color } from "../../../constants/Color";
import { StyleProp, TextStyle } from "react-native";
interface AppProps {
  whiteColor?: boolean;
  style?: StyleProp<TextStyle>;
}
export const Paragraph: React.FC<AppProps> = (props) => {
  const theme = useTheme();
  return (
    <Text
      category="p1"
      style={[
        {
          color: theme[props.whiteColor ? Color.TEXT.WHITE : Color.TEXT.BLACK],
        },
        props.style,
      ]}
    >
      {props?.children}
    </Text>
  );
};
