import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Color } from "../../constants/Color";
import { IconChooser } from "../../enum/IconChooser";

export const CustomIcon = (icon: IconChooser, color?: string) => {
  const theme = useTheme();
  switch (icon) {
    case IconChooser.MONEY:
      return (
        <Icon
          name="currency-usd"
          color={color == undefined ? theme[Color.TEXT.SUCCESS] : color}
          size={17}
        />
      );
    case IconChooser.REMOVE:
      return (
        <Icon
          name="delete-outline"
          size={17}
          color={theme[Color.TEXT.DANGER]}
        />
      );
    case IconChooser.CHECK:
      return (
        <Icon
          name="check-circle"
          size={17}
          color={color == undefined ? theme[Color.TEXT.SUCCESS] : color}
        />
      );
    case IconChooser.CHECK_NO_BACKGROUND:
      return <Icon name="check" size={17} color={Color.BLACK} />;
    case IconChooser.CHEVRON:
      return (
        <Icon
          name="chevron-up-circle"
          size={23}
          color={theme[Color.PRIMARY_500]}
        />
      );
    case IconChooser.EDIT:
      return <Icon name="pencil" size={17} color={theme[Color.PRIMARY_500]} />;
    case IconChooser.MENU:
      return <Icon name="menu" size={20} color={theme[Color.PRIMARY_500]} />;
    case IconChooser.SEARCH:
      return <Icon name="magnify" size={20} color={theme[Color.PRIMARY_500]} />;
    case IconChooser.INCREASE_PLUS:
      return (
        <Icon
          name="plus-circle-outline"
          size={20}
          color={theme[Color.PRIMARY_500]}
        />
      );
    case IconChooser.DECREASE_MINUS:
      return (
        <Icon
          name="minus-circle-outline"
          size={20}
          color={theme[Color.PRIMARY_500]}
        />
      );
    case IconChooser.SHOPPING_CART:
      return (
        <Icon name="cart-outline" size={20} color={theme[Color.PRIMARY_500]} />
      );
    case IconChooser.FOOD:
      return (
        <Icon name="food-variant" size={20} color={theme[Color.PRIMARY_500]} />
      );
    case IconChooser.FOOD_CHICKEN:
      return (
        <Icon
          name="food-drumstick-outline"
          size={20}
          color={theme[Color.PRIMARY_500]}
        />
      );
    case IconChooser.CALENDAR:
      return (
        <Icon
          name="calendar-range"
          size={20}
          color={color != undefined ? color : theme[Color.PRIMARY_500]}
        />
      );
    case IconChooser.PLUS:
      return <Icon name="plus" size={20} color={theme[Color.WHITE]} />;
  }
};
