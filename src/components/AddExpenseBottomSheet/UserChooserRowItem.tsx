import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { IconChooser } from "../../enum/IconChooser";
import { CustomIcon } from "../CustomIcon";

interface UserChooserRowItemProps {
  user: UserDTO;
  setCanAnyItemBeSelected: boolean;
  itemThatCanBeSelected: any;
  onSelected(item: any, isSelectedState: boolean): void;
}

const UserChooserRowItem = (props: UserChooserRowItemProps) => {
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
            backgroundColor: isSelectedState ? "green" : "blue",
            height: 50,
            width: 50,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{props.user.title}</Text>
          {isSelectedState && (
            <View
              style={{
                position: "absolute",
                height: 50,
                width: 50,
              }}
            >
              {CustomIcon(IconChooser.CHECK)}
            </View>
          )}
        </View>
        <View>
          <Text>Hello</Text>
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
