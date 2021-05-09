import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { AddUsers } from "../redux/reducer/userReducer";
import { UserFlatList } from "../components/FlatLists/AddUser/UserFlatList";
import { RoundedButton } from "../components/Buttons/RoundedButton";
import { View } from "react-native";
import GlobalLayout from "../constants/GlobalLayout";
import { UserDTO } from "../DTO/UserDTO";
import { userDummyData } from "../helpers/testData";
import { UserAmount } from "../components/Texts/UserAmount";
import { ScreenHeaderText } from "../components/Texts/ScreenHeader";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const [data, setData] = React.useState(userDummyData);
  const dispatch = useDispatch();

  const StartNextScreen = () => {
    dispatch(AddUsers(data));
    navigation.navigate("TabOne");
  };

  const OnUserDeleted = (userId: string) => {
    setData(data.filter((user) => user.id != userId));
  };

  const OnUserEdited = (userId: string, income: number) => {
    setData(
      data.map((user) =>
        user.id === userId ? { ...user, income: income } : user
      )
    );
  };

  const OnUserAdded = (user: UserDTO) => {
    setData((oldData) => [...oldData, user]);
  };

  return (
    <Layout level="2" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScreenHeaderText title="Users" />
        <View style={{ flex: 4 }}>
          <UserFlatList
            users={data}
            onUserAdded={OnUserAdded}
            onUserDeleted={OnUserDeleted}
            onUserEdited={OnUserEdited}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {data.length >= 1 ? (
            <>
              {data.length < 2 ? (
                <UserAmount nbrUsers={data.length} limit={2} />
              ) : null}
              <RoundedButton
                disabled={data.length < 2}
                title="Next"
                onPress={StartNextScreen}
              />
            </>
          ) : null}
        </View>
      </SafeAreaView>
    </Layout>
  );
}
