import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { BottomSheetContainer } from "../../components/BottomSheet/BottomSheet.component";
import { ActionButton } from "../../components/Buttons/FAB/ActionButton.component";
import { FAB } from "../../components/Buttons/FAB/FAB.component";
import { ScreenContainer } from "../../components/Container/ScreenContainer.component";
import { BaseFlatList } from "../../components/FlatLists/BaseFlatList";
import { ProductItem } from "../../components/FlatLists/ProductList/ProductItem.component";
import { ProductForm } from "../../components/Forms/Product/ProductForm.compontent";
import CustomTextInput from "../../components/Inputs/CustomTextInput";
import { SCREEN_NAME } from "../../constants/Screens";
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
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  const OnDeletePressed = (productId: number) => {
    null;
  };

  const [shouldClearForm, setClearState] = React.useState(false);
  const OnAnimate = (fromIndex: number, toIndex: number) => {
    setClearState(fromIndex == 1 && toIndex == 0);
  };
  const navigation = useNavigation();
  const OnStartScanner = () => {
    navigation.navigate(SCREEN_NAME.SCANNER_SCREEN);
  };

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
      <BottomSheetContainer
        bottomSheetRef={bottomSheetRef}
        hideHandler={true}
        onAnimate={OnAnimate}
      >
        <ProductForm clearForm={shouldClearForm} />
      </BottomSheetContainer>
      <FAB>
        <ActionButton onPress={OnStartScanner}>Scan</ActionButton>
        <ActionButton onPress={() => bottomSheetRef.current?.expand()}>
          Manual
        </ActionButton>
      </FAB>
    </ScreenContainer>
  );
}
