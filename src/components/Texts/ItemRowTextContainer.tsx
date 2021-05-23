import * as React from "react";
import { View } from "react-native";
import { SubHeader } from "./Subtitle/SubHeader.component";
import { SubParagraph } from "./Subtitle/SubParagraph.component";

export interface ItemRowTextContainerProps {
  headerText: string;
  subText?: string;
}

export function ItemRowTextContainer(props: ItemRowTextContainerProps) {
  return (
    <View style={{ flex: 1 }}>
      <SubHeader>{props.headerText}</SubHeader>
      {props.subText && <SubParagraph> {props.subText}</SubParagraph>}
    </View>
  );
}
