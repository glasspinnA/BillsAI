import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { UserDTO } from "../../../DTO/UserDTO";
import { Size } from "../../../enum/Size";
import { UserIcon } from "./UserIcon";
interface UserChooserRowItemProps {
  user: UserDTO;
  onSelected(item: any, isSelectedState: boolean): void;
  isReadOnly: boolean;
}

const UserChooserRowItem = (props: UserChooserRowItemProps) => {
  const [isSelectedState, setSelectedState] = React.useState(
    props.user.isSelected
  );
  const ToggleSelectedState = () => {
    setSelectedState(!isSelectedState);
    props.onSelected(props.user, !isSelectedState);
  };

  const RenderReadOnlyView = () => {
    return (
      <View style={{ marginHorizontal: 1 }}>
        <UserIcon
          title={props.user.title}
          size={props.isReadOnly ? Size.SMALL : Size.MEDIUM}
        />
      </View>
    );
  };

  const RenderTouchableView = () => {
    return (
      <TouchableOpacity
        onPress={ToggleSelectedState}
        style={{
          flex: 1,
          justifyContent: "center",
          paddingVertical: 15,
          paddingRight: 10,
        }}
      >
        <UserIcon
          isSelectedState={isSelectedState}
          fullname={props.user.name}
          title={props.user.title}
          size={props.isReadOnly ? Size.SMALL : Size.MEDIUM}
        />
      </TouchableOpacity>
    );
  };

  const RenderView = () => {
    if (props.isReadOnly) return RenderReadOnlyView();
    else return RenderTouchableView();
  };

  return RenderView();
};

export default UserChooserRowItem;
