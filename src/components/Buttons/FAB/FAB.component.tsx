import * as React from "react";
import { View } from "react-native";
import { IconButton } from "../IconButton";
import { IconChooser } from "../../../enum/IconChooser";

interface AppProps {}

export const FAB: React.FC<AppProps> = (props) => {
  const [showAction, setActionState] = React.useState(false);

  const ToggleActionState = () => {
    setActionState(!showAction);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
        zIndex: -1,
      }}
    >
      {showAction && (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          {props.children}
        </View>
      )}
      <IconButton
        style={{
          flex: 1,
          position: "absolute",
          borderRadius: 100,
          height: 55,
          width: 55,
          right: 0,
          bottom: 10,
        }}
        includeBackground={true}
        icon={IconChooser.PLUS}
        onPress={ToggleActionState}
      />
    </View>
  );
};
