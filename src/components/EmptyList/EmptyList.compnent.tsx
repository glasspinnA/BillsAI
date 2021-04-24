import { Text } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";
import { RoundedButton } from "../Buttons/RoundedButton";
import styles from "./EmptyList.component.style";

export interface EmptyListComponentProps {
  title: string;
  text?: string;
  onPress?: () => void;
}

export function EmptyListComponent(props: EmptyListComponentProps) {
  const RenderButton = () => (
    <RoundedButton
      title={props.text as string}
      onPress={props.onPress as () => void}
      size={"large"}
    />
  );

  const RenderSubTitle = () => <Text category="h4">{props.text}</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.verticalSpace}>
        <Text category="h1">{props.title}</Text>
      </View>
      <View style={styles.verticalSpace}>
        {props.onPress && props.text ? RenderButton() : RenderSubTitle()}
      </View>
    </View>
  );
}
