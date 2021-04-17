import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { ExpenseList } from "../components/FlatLists/Expense/ExpenseList";
import GlobalLayout from "../constants/GlobalLayout";
import { flatlistDummyData } from "../helpers/testData";
export interface TabThreeScreenProps {}

export function TabThreeScreen(props: TabThreeScreenProps) {
  return (
    <Layout level="3" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text category="h3">Payment</Text>
        <ExpenseList data={flatlistDummyData} enableAccordion={true} />
      </SafeAreaView>
    </Layout>
  );
}
