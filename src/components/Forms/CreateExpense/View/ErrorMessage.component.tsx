import * as React from "react";
import { Text, useTheme } from "@ui-kitten/components";
import { Color } from "../../../../constants/Color";
export interface ErrorMessageProps {
  error: string;
}
export function ErrorMessage(props: ErrorMessageProps) {
  const theme = useTheme();
  return (
    <Text category="p1" style={{ color: theme[Color.TEXT.DANGER] }}>
      {props.error}
    </Text>
  );
}
