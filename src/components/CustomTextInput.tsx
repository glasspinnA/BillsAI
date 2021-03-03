import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

interface TextInputProps {
  placeholder: string;
  onSubmit(text: string): void;
}

const CustomTextInput = (props: TextInputProps) => {
  const TextInputRef = React.useRef<TextInput>(null);

  const OnSubmit = (text: string) => {
    if (text.length === 0) return;
    props.onSubmit(text);
    TextInputRef.current?.clear();
  };

  return (
    <TextInput
      placeholder={props.placeholder}
      ref={TextInputRef}
      onSubmitEditing={(event) => OnSubmit(event.nativeEvent.text)}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {},
});
