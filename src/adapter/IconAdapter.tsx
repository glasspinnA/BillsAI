import * as React from "react";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export const MaterialCommunityIconsPack = {
  name: "MaterialCommunityIcons",
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(name);
      },
    }
  );
}

const IconProvider = (name: string) => ({
  toReactElement: (props: any) => MaterialCommunityIcon({ name, ...props }),
});

function MaterialCommunityIcon({ name, style }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return <Icon name={name} size={height} color={tintColor} style={iconStyle} />;
}
