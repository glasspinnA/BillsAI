import { Input } from "@ui-kitten/components/ui/input/input.component";
import * as React from "react";
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from "react-native";
import { IconChooser } from "../../enum/IconChooser";
import {
  AnimationTypes,
  PerformAnimation,
} from "../../helpers/LayoutAnimation";
import { CustomIcon } from "../Icons/CustomIcon";

interface TextInputProps {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  shoudFocus?: boolean;
  enableIcon?: boolean;
  value?: string;
  onSubmit?: (text: string) => void;
  onChangeText?: (value: string) => void;
}

const CustomTextInput = (props: TextInputProps) => {
  const TextInputRef = React.useRef<Input>(null);

  React.useEffect(() => {
    if (props.shoudFocus) TextInputRef.current?.focus();
  }),
    [props.shoudFocus];

  const OnSubmit = (text: string) => {
    if (text.length === 0 || props.onSubmit == undefined) return;
    props.onSubmit(text);
    TextInputRef.current?.clear();
    PerformAnimation(AnimationTypes.FLATLIST_ADD_USER);
  };

  const RenderIcon = () => {
    return props.enableIcon ? CustomIcon(IconChooser.SEARCH) : <></>;
  };

  return (
    <Input
      style={{ paddingVertical: 5 }}
      placeholder={props.placeholder}
      ref={TextInputRef}
      onSubmitEditing={(event) => OnSubmit(event.nativeEvent.text)}
      keyboardType={
        props.keyboardType == undefined ? "number-pad" : props.keyboardType
      }
      returnKeyType={"done"}
      value={props.value}
      onChangeText={(value) => props.onChangeText && props.onChangeText(value)}
      accessoryLeft={RenderIcon}
    />
  );
};

export default CustomTextInput;
