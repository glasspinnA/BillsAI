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
import { useSelector } from "react-redux";
import AddForm from "../components/add_bill_form/AddBillPresenter";
import { ExpenseDTO } from "../DTO/ExpenseDTO";
import { GetExpenses } from "../redux/reducer/baseReducer";
import { Store } from "../redux/store/store";
import { RootState } from "../redux/store/store";

export default function TabOneScreen() {
  const { handleSubmit } = useForm();
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const data = useSelector((state: RootState) => state.baseReducer.expenses);

  const onSubmit = (data: any) => console.log(data);

  const check = () => {
    const expenses = GetExpenses(Store.getState());
  };

  const Item = (data: { item: ExpenseDTO }) => {
    return (
      <View>
        <Text>{data.item.Name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.ExpenseType + index}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { sectionTitle } }) => (
          <Text>{sectionTitle}</Text>
        )}
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
