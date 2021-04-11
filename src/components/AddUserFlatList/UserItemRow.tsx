import { Layout, Button, Text, useTheme } from "@ui-kitten/components";
import * as React from "react";
import { View, StyleSheet, SafeAreaView, TextInput } from "react-native";
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
  const theme = useTheme();
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
    <SafeAreaView
      style={[
        styles.container,
        GlobalLayout.globalStyles.rowItemShadow,
        { backgroundColor: theme["background-basic-color-1"] },
      ]}
    >
      <View style={GlobalLayout.globalStyles.row}>
        <View style={{ flex: 3, paddingVertical: 7 }}>
          <Text
            category="s1"
            style={{ paddingBottom: 10, color: theme["text-primary-color"] }}
          >
            {props.item.name}
          </Text>
          <Text category="s2" style={{ color: theme["text-basic-color"] }}>
            {props.item.income}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Button
            onPress={() => AddIncome()}
            accessoryLeft={() => CustomIcon(IconChooser.MONEY)}
            appearance="ghost"
          ></Button>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
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
  );
};

export default UserItemRow;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    marginHorizontal: 3,
  },
});
