import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, FlatList, StyleSheet, Button } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import FlatListItem from "../components/FlatListItem";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const [data, setData] = React.useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      income: "",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      income: "",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      income: "",
    },
  ]);
  const [refresh, setRefresh] = React.useState(false);

  const DeleteItem = (id: any) => {
    const lists = data.filter((x) => x.id != id);
    setData(lists);
    setRefresh(!refresh);
  };

  const StartNextScreen = () => {
    navigation.navigate("TabOne", { data: data });
  };

  const OnSubmit = (text: string) => {
    let x = data;
    x.push({ id: "s", title: text, income: "" });
    setData(x);
    setRefresh(!refresh);
  };

  const OnIncomeAdded = (id: any, income: string) => {
    const index = data.findIndex((x) => x.id === id);
    console.log(index);
    if (index != -1) {
      data[index].income = income;
      setData(data);
    }
    setRefresh(!refresh);
  };

  return (
    <Layout level="1" style={styles.container}>
      <SafeAreaView>
        <Text category="h3">Hello</Text>
        <CustomTextInput placeholder="Hello" onSubmit={OnSubmit} />
        <FlatList
          data={data}
          extraData={refresh}
          renderItem={({ item }) => {
            return (
              <FlatListItem
                item={item}
                OnDeleteItem={DeleteItem}
                onIncomeAdded={OnIncomeAdded}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
        {data.length > 0 && (
          <Button title="Next" onPress={() => StartNextScreen()} />
        )}
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
