import { Layout } from "@ui-kitten/components";
import * as React from "react";
import { Text, SafeAreaView } from "react-native";
import CustomTextInput from "../../components/Inputs/CustomTextInput";
import GlobalLayout from "../../constants/GlobalLayout";
import { Screen } from "../../constants/Screens";
import { ProductList } from "./../../components/FlatLists/ProductList/ProductList.component";
export interface InventoryScreenProps {}

export function InventoryScreen(props: InventoryScreenProps) {
  const OnProductAdded = (text: string) => {
    console.log(text);
  };

  return (
    <Layout level="2" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView>
        <CustomTextInput
          placeholder="Add product"
          keyboardType="default"
          onSubmit={OnProductAdded}
          enableIcon={true}
        />
        <ProductList screen={Screen.INVENTORY_SCREEN} />
      </SafeAreaView>
    </Layout>
  );
}
