import { useTheme } from "@ui-kitten/components";
import * as React from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import GlobalLayout from "../../../constants/GlobalLayout";
import { UserDTO } from "../../../DTO/UserDTO";
import { IconChooser } from "../../../enum/IconChooser";
import {
  AnimationTypes,
  PerformAnimation,
} from "../../../helpers/LayoutAnimation";
import { IconButton } from "../../Buttons/IconButton";
import CustomTextInput from "../../Inputs/CustomTextInput";
import { ItemRowTextContainer } from "../../Texts/ItemRowTextContainer";
import { ItemContainer } from "../ItemContainer.component";

interface UserItemRowProps {
  item: UserDTO;
  OnDeleteItem(userId: string): void;
  onIncomeAdded(userId: string, income: number): void;
}

const UserItemRow = (props: UserItemRowProps) => {
  const theme = useTheme();
  const [
    incomeTextInputVisibility,
    setIncomeTextInputVisibility,
  ] = React.useState(!props.item.income);
  const TextInputRef = React.useRef<TextInput>(null);

  const AddIncome = () => {
    setIncomeTextInputVisibility(!incomeTextInputVisibility);
    TextInputRef.current?.focus();
    PerformAnimation(AnimationTypes.ROW_ITEM_ADD);
  };

  const OnSubmit = (income: string) => {
    props.onIncomeAdded(props.item.id, parseInt(income));
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
          <IconButton onPress={() => AddIncome()} icon={IconChooser.MONEY} />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <IconButton
            onPress={() => props.OnDeleteItem(props.item.id)}
            icon={IconChooser.REMOVE}
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
            shoudFocus={incomeTextInputVisibility}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default UserItemRow;
