import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, FlatList, StyleSheet, Button } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import FlatListItem from "../components/FlatListItem";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { AddUsers, GetUsers } from "../redux/reducer/baseReducer";
import { Store } from "../redux/store/store";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  let [data, setData] = React.useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "First Item",
      income: "",
      title: "FI",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Second Item",
      income: "",
      title: "SI",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Third Item",
      income: "",
      title: "TI",
    },
  ] as UserDTO[]);
  const [refresh, setRefresh] = React.useState(false);
  const dispatch = useDispatch();

  const DeleteItem = (id: any) => {
    const lists = data.filter((x) => x.id != id);
    setData(lists);
    setRefresh(!refresh);
  };

  const StartNextScreen = () => {
    dispatch(AddUsers(data));
    const count = GetUsers(Store.getState());
    navigation.navigate("TabOne");
  };

  const OnSubmit = (text: string) => {
    setData((oldData) => [
      ...oldData,
      {
        id: uuidv4(),
        name: text,
        title:
          text.length > 2
            ? text.substring(0, 2).toUpperCase()
            : text.toUpperCase(),
      },
    ]);
    setRefresh(!refresh);
  };

  const OnIncomeAdded = (id: any, income: string) => {
    const index = data.findIndex((x) => x.id === id);
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
