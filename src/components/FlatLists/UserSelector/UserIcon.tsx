import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import { Text } from "@ui-kitten/components";
import * as React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import { IconChooser } from "../../../enum/IconChooser";
import { CustomIcon } from "../../Icons/CustomIcon";
import { Size } from "../../../enum/Size";

export interface UserIconProps {
  title: string;
  fullname?: string;
  isSelectedState?: boolean;
  size: Size;
}

export function UserIcon(props: UserIconProps) {
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: theme["color-primary-500"],
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1.5,
          borderColor: theme["color-primary-active-border"],
          height: props.size == Size.SMALL ? 40 : 50,
          width: props.size == Size.SMALL ? 40 : 50,
        }}
      >
        <Text category="s1" style={{ color: theme["text-alternate-color"] }}>
          {props.title}
        </Text>
        {props.isSelectedState && (
          <View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              borderRadius: 100,
              backgroundColor: theme["background-basic-color-1"],
            }}
          >
            {CustomIcon(IconChooser.CHECK)}
          </View>
        )}
      </View>
      {props.fullname && (
        <View
          style={{
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <Text style={{ textAlign: "center", flexWrap: "wrap" }}>
            {props.fullname}
          </Text>
        </View>
      )}
    </View>
  );
}
