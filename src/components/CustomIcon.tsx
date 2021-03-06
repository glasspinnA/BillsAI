import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconChooser } from "../enum/IconChooser";

export const CustomIcon = (icon: IconChooser) => {
  switch (icon) {
    case IconChooser.MONEY:
      return <Icon name="currency-usd" />;
    case IconChooser.REMOVE:
      return <Icon name="delete-outline" />;
  }
};
