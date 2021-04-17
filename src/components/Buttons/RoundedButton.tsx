import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";

export interface RoundedButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function RoundedButton(props: RoundedButtonProps) {
  return (
    <Button
      disabled={props.disabled}
      style={{ borderRadius: 20 }}
      onPress={props.onPress}
    >
      {props.title}
    </Button>
  );
}
