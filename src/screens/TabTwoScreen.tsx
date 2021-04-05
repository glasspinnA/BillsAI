import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { AddUsers, GetUsers } from "../redux/reducer/baseReducer";
import { Store } from "../redux/store/store";
import { UserFlatList } from "../components/AddUserForm/UserFlatList";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  let [data, setData] = React.useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "First Item",
      title: "FI",
      isSelected: true,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Second Item",
      title: "SI",
      isSelected: true,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Third Item",
      title: "TI",
      isSelected: true,
    },
  ] as UserDTO[]);
  const dispatch = useDispatch();

  const StartNextScreen = () => {
    dispatch(AddUsers(data));
    const count = GetUsers(Store.getState());
    navigation.navigate("TabOne");
  };

  const UpdateData = (users: UserDTO[]) => {
    setData(users);
  };

  return (
    <Layout level="1">
      <SafeAreaView>
        <Text category="h3">Hello</Text>
        <UserFlatList data={data} updateData={UpdateData} />
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
