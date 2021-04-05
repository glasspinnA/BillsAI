import { Input } from "@ui-kitten/components";
import * as React from "react";
import {
  KeyboardTypeOptions,
  LayoutAnimation,
  ReturnKeyTypeOptions,
  TextInput,
} from "react-native";
import { AnimationTypes, PerformAnimation } from "../helpers/LayoutAnimation";

interface TextInputProps {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmit(text: string): void;
  isVisible?: boolean;
}

const CustomTextInput = (props: TextInputProps) => {
  const TextInputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    if (props.isVisible) TextInputRef.current?.focus();
  });

  const OnSubmit = (text: string) => {
    if (text.length === 0) return;
    props.onSubmit(text);
    TextInputRef.current?.clear();
    PerformAnimation(AnimationTypes.FLATLIST_ADD_USER);
  };

  return (
    <Input
      placeholder={props.placeholder}
      ref={TextInputRef}
      onSubmitEditing={(event) => OnSubmit(event.nativeEvent.text)}
      keyboardType={props.keyboardType}
      returnKeyType={props.returnKeyType}
    />
  );
};

export default CustomTextInput;
