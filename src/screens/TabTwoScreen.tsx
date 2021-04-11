import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { AddUsers } from "../redux/reducer/baseReducer";
import { UserFlatList } from "../components/AddUserFlatList/UserFlatList";
import { RoundedButton } from "../components/RoundedButton";
import { View } from "react-native";
import GlobalLayout from "../constants/GlobalLayout";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const [data, setData] = React.useState([
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
    navigation.navigate("TabOne");
  };

  const UpdateData = (users: UserDTO[]) => {
    setData(users);
  };

  return (
    <Layout level="3" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 4 }}>
          <UserFlatList data={data} updateData={UpdateData} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <RoundedButton
            disabled={data.length < 2}
            title={"Next"}
            onPress={StartNextScreen}
          />
        </View>
      </SafeAreaView>
    </Layout>
  );
}
