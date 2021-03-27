import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconChooser } from "../enum/IconChooser";
import { CustomIcon } from "./CustomIcon";

interface UserChooserRowItemProps {
  item: UserDTO;
  setCanAnyItemBeSelected: boolean;
  itemThatCanBeSelected: any;
  onSelected(item: any, isSelectedState: boolean): void;
}

const UserChooserRowItem = (props: UserChooserRowItemProps) => {
  const [isSelectedState, setSelectedState] = React.useState(false);
  const ToggleSelectedState = () => {
    setSelectedState(!isSelectedState);
    props.onSelected(props.item, !isSelectedState);
  };

  const _Body = () => {
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
          <Text>{props.item.Title}</Text>
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
        {_Body()}
      </TouchableOpacity>
    );
  };

  return RenderView();
};

export default UserChooserRowItem;

const styles = StyleSheet.create({
  container: {},
});
