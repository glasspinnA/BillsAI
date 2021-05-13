import * as React from "react";
import { Text } from "@ui-kitten/components";

export interface ScreenHeaderTextProps {
  title: string;
}

export function ScreenHeaderText(props: ScreenHeaderTextProps) {
  return (
    <Text
      category="h3"
      style={{ paddingTop: 5, paddingBottom: 20, textAlign: "center" }}
    >
      {props.title}
    </Text>
  );
}
