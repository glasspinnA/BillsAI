import { Layout, Button, Text } from "@ui-kitten/components";
import * as React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  LayoutAnimation,
} from "react-native";
import GlobalLayout from "../../constants/GlobalLayout";
import { IconChooser } from "../../enum/IconChooser";
import {
  AnimationTypes,
  PerformAnimation,
} from "../../helpers/LayoutAnimation";
import { CustomIcon } from "../CustomIcon";
import CustomTextInput from "../CustomTextInput";

interface UserItemRowProps {
  item: UserDTO;
  OnDeleteItem(id: any): void;
  onIncomeAdded(id: any, text: string): void;
}

const UserItemRow = (props: UserItemRowProps) => {
  const [
    incomeTextInputVisibility,
    setIncomeTextInputVisibility,
  ] = React.useState(false);
  const TextInputRef = React.useRef<TextInput>(null);

  const AddIncome = () => {
    setIncomeTextInputVisibility(!incomeTextInputVisibility);
    TextInputRef.current?.focus();
    PerformAnimation(AnimationTypes.ROW_ITEM_ADD);
  };

  const OnSubmit = (text: string) => {
    props.onIncomeAdded(props.item.id, text);
    setIncomeTextInputVisibility(!incomeTextInputVisibility);
  };

  return (
    <Layout level="1">
      <SafeAreaView style={styles.container}>
        <View style={GlobalLayout.globalStyles.row}>
          <View style={{ flex: 3 }}>
            <Text category="s1">{props.item.name}</Text>
            <Text category="s2">{props.item.income}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={() => AddIncome()}
              appearance="ghost"
              accessoryLeft={() => CustomIcon(IconChooser.MONEY)}
            ></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button
              appearance="ghost"
              status="danger"
              accessoryLeft={() => CustomIcon(IconChooser.REMOVE)}
              onPress={() => props.OnDeleteItem(props.item.id)}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 5,
            alignSelf: "stretch",
          }}
        >
          {incomeTextInputVisibility && (
            <CustomTextInput
              placeholder="Income"
              onSubmit={OnSubmit}
              keyboardType="numeric"
              returnKeyType="done"
              isVisible={incomeTextInputVisibility}
            />
          )}
        </View>
      </SafeAreaView>
    </Layout>
  );
};

export default UserItemRow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
});
