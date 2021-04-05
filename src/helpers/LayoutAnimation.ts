import { LayoutAnimation, LayoutAnimationConfig } from "react-native";

export const PerformAnimation = (animation: LayoutAnimationConfig) => {
  LayoutAnimation.configureNext(animation);
};

export const AnimationTypes = {
  FLATLIST_ADD_USER: {
    duration: 550,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.7,
    },
  } as LayoutAnimationConfig,
  ROW_ITEM_ADD: LayoutAnimation.Presets.easeInEaseOut,
};
