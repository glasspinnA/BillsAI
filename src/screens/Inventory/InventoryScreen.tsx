import { Layout } from "@ui-kitten/components";
import * as React from "react";
import { Text, SafeAreaView } from "react-native";
import GlobalLayout from "../../constants/GlobalLayout";

export interface InventoryScreenProps {}

export function InventoryScreen(props: InventoryScreenProps) {
  return (
    <Layout level="2" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView>
        <Text>InventoryScreen</Text>
      </SafeAreaView>
    </Layout>
  );
}
