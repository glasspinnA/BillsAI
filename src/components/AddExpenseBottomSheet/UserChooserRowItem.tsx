import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { IconChooser } from "../../enum/IconChooser";
import { CustomIcon } from "../CustomIcon";
import { Text, useTheme } from "@ui-kitten/components";
interface UserChooserRowItemProps {
  user: UserDTO;
  setCanAnyItemBeSelected: boolean;
  itemThatCanBeSelected: any;
  onSelected(item: any, isSelectedState: boolean): void;
}

const UserChooserRowItem = (props: UserChooserRowItemProps) => {
  const theme = useTheme();
  const [isSelectedState, setSelectedState] = React.useState(
    props.user.isSelected
  );
  const ToggleSelectedState = () => {
    setSelectedState(!isSelectedState);
    props.onSelected(props.user, !isSelectedState);
  };

  const UserChooserBody = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: theme["color-primary-500"],
            height: 50,
            width: 50,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1.5,
            borderColor: theme["color-primary-active-border"],
          }}
        >
          <Text category="s1" style={{ color: theme["text-alternate-color"] }}>
            {props.user.title}
          </Text>
          {isSelectedState && (
            <View
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                borderRadius: 100,
                backgroundColor: theme["background-basic-color-1"],
              }}
            >
              {CustomIcon(IconChooser.CHECK)}
            </View>
          )}
        </View>
        <View style={{ alignItems: "center", marginTop: 3 }}>
          <Text>{props.user.name}</Text>
        </View>
      </View>
    );
  };

  const RenderView = () => {
    return (
      <TouchableOpacity
        onPress={ToggleSelectedState}
        style={{
          flex: 1,
          justifyContent: "center",
          marginHorizontal: 10,
        }}
      >
        {UserChooserBody()}
      </TouchableOpacity>
    );
  };

  return RenderView();
};

export default UserChooserRowItem;
