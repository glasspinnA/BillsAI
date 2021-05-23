import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Color } from "../../../constants/Color";
import { IconChooser } from "../../../enum/IconChooser";
import { CustomIcon } from "../../Icons/CustomIcon";
import { Paragraph } from "../../Texts/Paragraph/Paragraph.component";

export interface AppProps {
  onPress: () => void;
}
export const ActionButton: React.FC<AppProps> = (props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
      onPress={props.onPress}
    >
      <View>
        <Paragraph>{props.children}</Paragraph>
      </View>
      <View
        style={{
          backgroundColor: theme[Color.WHITE],
          padding: 10,
          borderRadius: 100,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          elevation: 8,
          marginStart: 10,
        }}
      >
        {CustomIcon(IconChooser.FOOD_CHICKEN)}
      </View>
    </TouchableOpacity>
  );
};
