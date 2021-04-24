import { Input } from "@ui-kitten/components";
import * as React from "react";
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from "react-native";
import {
  AnimationTypes,
  PerformAnimation,
} from "../../helpers/LayoutAnimation";

interface TextInputProps {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmit(text: string): void;
  isVisible?: boolean;
  shoudFocus?: boolean;
}

const CustomTextInput = (props: TextInputProps) => {
  const TextInputRef = React.useRef<Input>(null);

  React.useEffect(() => {
    if (props.isVisible) TextInputRef.current?.focus();
  }),
    [props.isVisible];

  React.useEffect(() => {
    TextInputRef.current?.focus();
  }),
    [props.shoudFocus];

  const OnSubmit = (text: string) => {
    if (text.length === 0) return;
    props.onSubmit(text);
    TextInputRef.current?.clear();
    PerformAnimation(AnimationTypes.FLATLIST_ADD_USER);
  };

  return (
    <Input
      style={{ paddingVertical: 5 }}
      placeholder={props.placeholder}
      ref={TextInputRef}
      onSubmitEditing={(event) => OnSubmit(event.nativeEvent.text)}
      keyboardType={props.keyboardType}
      returnKeyType={props.returnKeyType}
    />
  );
};

export default CustomTextInput;
