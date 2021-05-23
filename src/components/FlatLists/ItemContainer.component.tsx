import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { Color } from "../../constants/Color";
import GlobalLayout from "../../constants/GlobalLayout";

interface ItemContainerProps {}

export const ItemContainer: React.FC<ItemContainerProps> = (props) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[
        GlobalLayout.flatList.rowContainer,
        GlobalLayout.flatList.rowItemShadow,
        { backgroundColor: theme[Color.WHITE] },
      ]}
    >
      <View style={GlobalLayout.flatList.row}>{props.children}</View>
    </SafeAreaView>
  );
};
