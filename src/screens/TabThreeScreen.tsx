import { useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { View, Text, SectionList, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { CalculateExpenses } from "../Calculate";
import { PayDTO } from "../DTO/PayDTO";
import { IUserExpensesRoute } from "../interface/IRoute";
import { IUserPaySectionList } from "../interface/IUserPaySectionList";
import { RootState } from "../redux/store/store";

export interface TabThreeScreenProps {}

export function TabThreeScreen(props: TabThreeScreenProps) {
  const route = useRoute().params as IUserExpensesRoute;
  const [userExpenses, setUserExpenses] = React.useState<IUserPaySectionList[]>(
    route?.userExpenses
  );

  const Item = (data: { item: PayDTO }) => {
    return (
      <View>
        <Text>{data.item.productname}</Text>
      </View>
    );
  };

  return (
    <View>
      <SectionList
        sections={userExpenses}
        keyExtractor={(item, index) => item.expenseType + index}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { sectionTitle } }) => (
          <Text>{sectionTitle}</Text>
        )}
      />
    </View>
  );
}
