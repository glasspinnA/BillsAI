import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconChooser } from "../enum/IconChooser";

export const CustomIcon = (icon: IconChooser) => {
  const theme = useTheme();
  switch (icon) {
    case IconChooser.MONEY:
      return (
        <Icon
          name="currency-usd"
          color={theme["text-success-color"]}
          size={17}
        />
      );
    case IconChooser.REMOVE:
      return (
        <Icon
          name="delete-outline"
          size={17}
          color={theme["text-danger-color"]}
        />
      );
    case IconChooser.CHECK:
      return <Icon name="check-circle" />;
    case IconChooser.CHEVRON:
      return <Icon name="chevron-up-circle" size={20} />;
  }
};
