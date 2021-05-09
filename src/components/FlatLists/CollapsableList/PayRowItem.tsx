import * as React from "react";
import { View } from "react-native";
import { Chevron } from "../../Icons/Chevron";
import { ItemRowTextContainer } from "../../Texts/ItemRowTextContainer";

export const PayRowItemHeader = (
  name: string,
  payment: string,
  isItemBodyOpen: boolean
) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <ItemRowTextContainer headerText={name} subText={payment} />
      <Chevron shouldToggleRotation={isItemBodyOpen} />
    </View>
  );
};

export const PayRowItemBody = () => {};
