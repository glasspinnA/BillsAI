import { Layout } from "@ui-kitten/components";
import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserExpenseRowItem } from "../components/UserExpenseFlatList/UserExpenseRowItem";
import { flatlistDummyData } from "../helpers/testData";
export interface TabThreeScreenProps {}

export function TabThreeScreen(props: TabThreeScreenProps) {
  return (
    <Layout level="3" style={{ flex: 1, paddingHorizontal: 10 }}>
      <SafeAreaView>
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
