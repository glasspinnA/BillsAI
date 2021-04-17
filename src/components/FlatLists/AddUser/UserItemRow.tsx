import { Button, useTheme } from "@ui-kitten/components";
import * as React from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import GlobalLayout from "../../../constants/GlobalLayout";
import { IconChooser } from "../../../enum/IconChooser";
import {
  AnimationTypes,
  PerformAnimation,
} from "../../../helpers/LayoutAnimation";
import { CustomIcon } from "../../Icons/CustomIcon";
import CustomTextInput from "../../Inputs/CustomTextInput";
import { ItemRowTextContainer } from "../../Texts/ItemRowTextContainer";

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

  const GetPlaceholderText = (): string => {
    const prefix = props.item.income == undefined ? "Add " : "Edit ";
    return prefix + props.item.name + "'s income";
  };

  return (
    <SafeAreaView
      style={[
        GlobalLayout.flatList.rowContainer,
        GlobalLayout.flatList.rowItemShadow,
        { backgroundColor: theme["background-basic-color-1"] },
      ]}
    >
      <View style={GlobalLayout.flatList.row}>
        <View style={{ flex: 3, paddingVertical: 10 }}>
          <ItemRowTextContainer
            headerText={props.item.name}
            subText={props.item.income?.toString()}
          />
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
            placeholder={GetPlaceholderText()}
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
