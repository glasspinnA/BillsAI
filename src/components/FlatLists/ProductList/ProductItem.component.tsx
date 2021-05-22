import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Color } from "../../../constants/Color";
import GlobalLayout from "../../../constants/GlobalLayout";
import { Screen } from "../../../constants/Screens";
import { ProductDTO } from "../../../DTO/ProductDTO";
import { UserProductDTO } from "../../../DTO/UserProductDTO";
import { IconChooser } from "../../../enum/IconChooser";
import { IsUserProductDTO } from "../../../helpers/Common";
import { IconButton } from "../../Buttons/IconButton";
import { Counter } from "../../Counter/Counter.component";

export interface ProductItemProps {
  item: ProductDTO | UserProductDTO;
  onCounterChanged?: (productId: number, amount: number) => void;
}

export function ProductItem(props: ProductItemProps) {
  const theme = useTheme();
  const [count, setCount] = React.useState(1);
  const OnCountChange = (isIncrease: boolean) => {
    if (!IsUserProductDTO(props.item)) return;
    const amount = isIncrease ? count + 1 : count - 1;
    setCount(amount);
    props.onCounterChanged &&
      props.onCounterChanged(props.item.productId, amount);
  };

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
        {props.onCounterChanged && props.item && (
          <Counter count={count} onCountChange={OnCountChange} />
        )}
        <IconButton onPress={() => null} icon={IconChooser.REMOVE} />
      </View>
    </SafeAreaView>
  );
}
