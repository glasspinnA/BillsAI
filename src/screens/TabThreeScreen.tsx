import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { UserExpenseRowItem } from "../components/UserExpenseFlatList/UserExpenseRowItem";
import GlobalLayout from "../constants/GlobalLayout";
import { flatlistDummyData } from "../helpers/testData";
export interface TabThreeScreenProps {}

export function TabThreeScreen(props: TabThreeScreenProps) {
  return (
    <Layout level="3" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text category="h3">Sum to pay</Text>
        <FlatList
          data={flatlistDummyData}
          renderItem={({ item }) => (
            <UserExpenseRowItem item={item} enableAccordion={true} />
          )}
          keyExtractor={(item) => `row-${item.id}`}
        />
      </SafeAreaView>
    </Layout>
  );
}
