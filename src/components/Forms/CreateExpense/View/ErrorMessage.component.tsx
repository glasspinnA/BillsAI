import * as React from "react";
import { Text, useTheme } from "@ui-kitten/components";
export interface ErrorMessageProps {
  error: string;
}
export function ErrorMessage(props: ErrorMessageProps) {
  const theme = useTheme();
  return (
    <Text category="p1" style={{ color: theme["color-danger-600"] }}>
      {props.error}
    </Text>
  );
}
