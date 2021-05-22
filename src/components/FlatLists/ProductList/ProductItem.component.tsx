import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Color } from "../../../constants/Color";
import GlobalLayout from "../../../constants/GlobalLayout";
import { Counter } from "../../Counter/Counter.component";

export interface ProductItemProps {
  item: any;
}

export function ProductItem(props: ProductItemProps) {
  const theme = useTheme();
  const [count, setCount] = React.useState(1);
  const OnCountChange = (isIncrease: boolean) =>
    setCount(isIncrease ? count + 1 : count - 1);

  return (
    <SafeAreaView
      style={[
        GlobalLayout.flatList.rowContainer,
        GlobalLayout.flatList.rowItemShadow,
        { backgroundColor: theme[Color.WHITE] },
      ]}
    >
      <View style={GlobalLayout.flatList.row}>
        <Text>Hello</Text>
        <Counter count={count} onCountChange={OnCountChange} />
      </View>
    </SafeAreaView>
  );
}
