import * as React from "react";
import { Text } from "@ui-kitten/components";
import { View } from "react-native";
import { CustomIcon } from "../Icons/CustomIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconChooser } from "../../enum/IconChooser";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export interface ScreenHeaderTextProps {
  title: string;
}

export function ScreenHeaderText(props: ScreenHeaderTextProps) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        {CustomIcon(IconChooser.MENU)}
      </TouchableOpacity>
      <Text
        category="h3"
        style={{ paddingTop: 5, paddingBottom: 20, textAlign: "center" }}
      >
        {props.title}
      </Text>
    </View>
  );
}
