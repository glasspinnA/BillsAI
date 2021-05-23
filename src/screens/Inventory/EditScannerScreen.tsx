import { useNavigation, useRoute } from "@react-navigation/native";
import produce from "immer";
import * as React from "react";
import { RoundedButton } from "../../components/Buttons/RoundedButton";
import { ScreenContainer } from "../../components/Container/ScreenContainer.component";
import { BaseFlatList } from "../../components/FlatLists/BaseFlatList";
import { ProductItem } from "../../components/FlatLists/ProductList/ProductItem.component";
import { SCREEN_NAME } from "../../constants/Screens";
import { ProductDTO } from "../../DTO/ProductDTO";
import { UserProductDTO } from "../../DTO/UserProductDTO";
import { isDevModeEnabled } from "../../env/configs";
import { GetProductTestData } from "../../helpers/testData";
import {
  IEditScannerProductRoute,
  IScannerProductRoute,
} from "../../interface/IRoute";

export interface EditScannerScreenProps {}

export function EditScannerScreen(props: EditScannerScreenProps) {
  const route = useRoute<IScannerProductRoute>();
  const navigation = useNavigation();

  const [userProducts, setUserProducts] = React.useState<UserProductDTO[]>([]);
  React.useEffect(() => {
    const product = route.params?.product;
    if (isDevModeEnabled) setUserProducts(Remap(GetProductTestData()));
    else setUserProducts(Remap(product != undefined ? product : []));
  }, []);

  const Remap = (products: ProductDTO[]): UserProductDTO[] => {
    const userProducts = products.map((product) => {
      return {
        id: 0,
        name: product.name,
        userId: -1,
        productId: product.id,
        amount: 1,
        createdDate: new Date(),
      } as UserProductDTO;
    });
    return userProducts;
  };

  const OnChangeScreen = () => {
    navigation.navigate(SCREEN_NAME.INVENTORY_SCREEN, {
      params: {
        product: userProducts,
      },
    } as IEditScannerProductRoute);
  };

  const OnCounterChanged = (productId: number, amount: number) => {
    setUserProducts(
      produce(userProducts, (draftState) => {
        const index = draftState.findIndex((x) => x.productId == productId);
        if (index == -1) return;
        draftState[index].amount = amount;
      })
    );
  };

  const OnDeletePressed = (productId: number) => {};

  return (
    <ScreenContainer>
      <BaseFlatList
        data={userProducts}
        shouldRefresh={false}
        rowComponent={(item) => (
          <ProductItem
            item={item}
            onCounterChanged={OnCounterChanged}
            onDeletePressed={OnDeletePressed}
          />
        )}
        shouldScrollToEnd={true}
        keyExtractor={(item) => item.productId.toString()}
      />
      <RoundedButton title="Next" onPress={OnChangeScreen} />
    </ScreenContainer>
  );
}
