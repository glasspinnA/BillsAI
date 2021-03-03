import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface FlatListItemProps {
  item: any;
  OnDeleteItem(id: any): void;
}

const FlatListItem = (props: FlatListItemProps) => {
  const [
    incomeTextInputVisibility,
    setIncomeTextInputVisibility,
  ] = React.useState(false);

  const AddIncome = () => {
    setIncomeTextInputVisibility(!incomeTextInputVisibility);
  };

  return (
    <View>
      <Text style={styles.title}>{props.item.title}</Text>
      <Button title="Delete" onPress={() => props.OnDeleteItem(item.id)} />
      <Button title="$" onPress={() => AddIncome()} />
      {incomeTextInputVisibility && <TextInput placeholder="Income" />}
    </View>
  );
};

export default FlatListItem;

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
});
