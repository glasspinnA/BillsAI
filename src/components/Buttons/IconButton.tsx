import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { IconChooser } from "../../enum/IconChooser";
import { CustomIcon } from "../Icons/CustomIcon";

export interface IconButtonProps {
  onPress: () => void;
  icon: IconChooser;
}

export function IconButton(props: IconButtonProps) {
  return (
    <Button
      onPress={props.onPress}
      accessoryLeft={() => CustomIcon(props.icon)}
      appearance="ghost"
    />
  );
}
