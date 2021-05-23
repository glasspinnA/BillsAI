import * as React from "react";
import { View } from "react-native";
import { Color } from "../../constants/Color";
import { IconChooser } from "../../enum/IconChooser";
import { CustomIcon } from "../Icons/CustomIcon";
import { SubHeader } from "./Subtitle/SubHeader.component";
import { SubParagraph } from "./Subtitle/SubParagraph.component";

export interface ItemRowTextContainerProps {
  headerText: string;
  subText?: string;
  subIcon?: IconChooser;
}

export function ItemRowTextContainer(props: ItemRowTextContainerProps) {
  return (
    <View style={{ flex: 1 }}>
      <SubHeader>{props.headerText}</SubHeader>
      <View style={{ flexDirection: "row", marginTop: 4 }}>
        {props.subIcon && CustomIcon(props.subIcon, Color.BLACK)}
        {props.subText && <SubParagraph>{props.subText}</SubParagraph>}
      </View>
    </View>
  );
}
