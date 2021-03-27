import BottomSheet from "@gorhom/bottom-sheet";
import * as React from "react";
import { useForm } from "react-hook-form";
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  SectionList,
  Text,
} from "react-native";
import AddForm from "../components/add_bill_form/AddBillPresenter";
import { GetExpenses } from "../redux/reducer/baseReducer";
import { Store } from "../redux/store/store";

export default function TabOneScreen() {
  const { handleSubmit } = useForm();
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  const onSubmit = (data: any) => console.log(data);

  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  const check = () => {
    console.log("check");
    const expenses = GetExpenses(Store.getState());
    console.log(expenses);
  };

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
      <AddForm bottomSheetRef={bottomSheetRef} />
      <View>
        <Button title="Add" onPress={() => bottomSheetRef.current?.expand()} />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        <Button title="Check" onPress={check} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  label: {
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "red",
    borderRadius: 4,
  },
  input: {
    backgroundColor: "white",
    borderColor: "blue",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
