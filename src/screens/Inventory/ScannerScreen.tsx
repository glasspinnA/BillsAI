import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, Text } from "react-native";
import { BarcodeScanner } from "../../components/BarcodeScanner/BarcodeScanner.component";
import { RoundedButton } from "../../components/Buttons/RoundedButton";
import { ScreenContainer } from "../../components/Container/ScreenContainer.component";
import { CustomIcon } from "../../components/Icons/CustomIcon";
import { Circle } from "../../components/Texts/Circle.component";
import { Paragraph } from "../../components/Texts/Paragraph/Paragraph.component";
import { SCREEN_NAME } from "../../constants/Screens";
import { ProductDTO } from "../../DTO/ProductDTO";
import { IconChooser } from "../../enum/IconChooser";
import { IScannerProductRoute } from "../../interface/IRoute";

export interface ScannerScreenProps {}

export function ScannerScreen(props: ScannerScreenProps) {
  const [scannedProducts, setScannedProducts] = React.useState<ProductDTO[]>(
    []
  );
  const navigation = useNavigation();
  const OnChangeScreen = () => {
    console.log(scannedProducts);
    navigation.navigate(SCREEN_NAME.EDIT_SCANNER_SCREEN, {
      params: {
        product: scannedProducts,
      },
    } as IScannerProductRoute);
  };

  const OnBarcodeScanned = (type: any, data: any) => {
    const product = {} as ProductDTO;
    setScannedProducts([...scannedProducts, product]);
  };

  return (
    <ScreenContainer>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <BarcodeScanner onBarcodeScanned={OnBarcodeScanned} />
        <>
          <Paragraph
            whiteColor={true}
            style={{
              alignSelf: "center",
              marginBottom: 10,
            }}
          >
            {CustomIcon(IconChooser.FOOD_CHICKEN)} x 1
          </Paragraph>
          <RoundedButton title="Next" onPress={OnChangeScreen} />
        </>
      </View>
    </ScreenContainer>
  );
}
