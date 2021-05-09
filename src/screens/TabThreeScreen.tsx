import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { CollapsablePresenter } from "../components/FlatLists/CollapsableList/CollapsablePresenter";
import { ScreenHeaderText } from "../components/Texts/ScreenHeader";
import GlobalLayout from "../constants/GlobalLayout";
import { flatlistDummyData } from "../helpers/testData";
export interface TabThreeScreenProps {}

export function TabThreeScreen(props: TabThreeScreenProps) {
  return (
    <Layout level="2" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScreenHeaderText title="Payment" />
        <CollapsablePresenter item={flatlistDummyData} enableAccordion={true} />
      </SafeAreaView>
    </Layout>
  );
}
