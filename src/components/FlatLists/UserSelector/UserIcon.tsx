import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import { Text } from "@ui-kitten/components";
import * as React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import { IconChooser } from "../../../enum/IconChooser";
import { CustomIcon } from "../../Icons/CustomIcon";
import { Size } from "../../../enum/Size";
import { Color } from "../../../constants/Color";
import { SubHeader } from "../../Texts/Subtitle/SubHeader.component";
import { Paragraph } from "../../Texts/Paragraph/Paragraph.component";

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
          backgroundColor: theme[Color.PRIMARY_500],
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1.5,
          borderColor: theme[Color.BORDER],
          height: props.size == Size.SMALL ? 40 : 50,
          width: props.size == Size.SMALL ? 40 : 50,
        }}
      >
        <SubHeader whiteColor={true}>{props.title}</SubHeader>
        {props.isSelectedState && (
          <View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              borderRadius: 100,
              backgroundColor: theme[Color.WHITE],
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
          <Paragraph style={{ textAlign: "center", flexWrap: "wrap" }}>
            {props.fullname}
          </Paragraph>
        </View>
      )}
    </View>
  );
}
