import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { ScreenContainer } from "../../components/Container/ScreenContainer.component";
import { BaseFlatList } from "../../components/FlatLists/BaseFlatList";
import { ProductItem } from "../../components/FlatLists/ProductList/ProductItem.component";
import CustomTextInput from "../../components/Inputs/CustomTextInput";
import { UserProductDTO } from "../../DTO/UserProductDTO";
import { isDevModeEnabled } from "../../env/configs";
import { GetUserProductTestData } from "../../helpers/testData";
import { IEditScannerProductRoute } from "../../interface/IRoute";
export interface InventoryScreenProps {}

export function InventoryScreen(props: InventoryScreenProps) {
  const route = useRoute<IEditScannerProductRoute>();
  const [userProducts, setUserProducts] = React.useState<UserProductDTO[]>(
    isDevModeEnabled ? GetUserProductTestData() : []
  );
  React.useEffect(() => {
    const product = route.params?.product;
    if (!isDevModeEnabled) setUserProducts(product != undefined ? product : []);
  }, []);

  const OnProductAdded = (text: string) => {
    console.log(text);
  };

  const OnDeletePressed = (productId: number) => {};

  return (
    <ScreenContainer>
      <CustomTextInput
        placeholder="Add product"
        keyboardType="default"
        onSubmit={OnProductAdded}
        enableIcon={true}
      />
      <BaseFlatList
        data={userProducts}
        shouldRefresh={false}
        rowComponent={(item) => (
          <ProductItem item={item} onDeletePressed={OnDeletePressed} />
        )}
        shouldScrollToEnd={true}
        keyExtractor={(item) => item.productId}
      />
    </ScreenContainer>
  );
}
