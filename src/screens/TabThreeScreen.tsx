import { useRoute } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import * as React from "react";
import { View, Text, SectionList } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserExpenseRowItem } from "../components/UserExpenseFlatList/UserExpenseRowItem";
import { PayDTO } from "../DTO/PayDTO";
import { flatlistDummyData } from "../helpers/testData";
import { IUserExpensesRoute } from "../interface/IRoute";
import {
  IUserPayFlatList,
  IUserPaySectionList,
} from "../interface/IUserPaySectionList";

export interface TabThreeScreenProps {}

export function TabThreeScreen(props: TabThreeScreenProps) {
  const route = useRoute().params as IUserExpensesRoute;
  const [userExpenses, setUserExpenses] = React.useState<IUserPaySectionList[]>(
    route?.userExpenses
  );

  return (
    <React.Fragment>
      <Layout level="1">
        <SafeAreaView>
          <FlatList
            data={flatlistDummyData}
            renderItem={({ item }) => <UserExpenseRowItem item={item} />}
            keyExtractor={(item) => `row-${item.id}`}
          />
        </SafeAreaView>
      </Layout>
    </React.Fragment>
  );
}
