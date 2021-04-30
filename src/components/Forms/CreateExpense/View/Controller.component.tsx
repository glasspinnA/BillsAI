import * as React from "react";
import { Controller, Control, FieldError } from "react-hook-form";
import { ADD_BILL_FORM } from "../../../../constants/FormNames";
import { IFormInputs } from "../../../../interface/IFormInputs";
import CustomTextInput from "../../../Inputs/CustomTextInput";
import { ErrorMessage } from "./ErrorMessage.component";
export interface CustomControllerProps {
  placeholder: string;
  errorMessage: string;
  name: string;
  control: Control<IFormInputs>;
  error?: FieldError;
}

export function CustomController(props: CustomControllerProps) {
  return (
    <>
      <Controller
        control={props.control}
        render={({ onChange, value }) => (
          <CustomTextInput
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder={props.placeholder}
            keyboardType={
              props.name == ADD_BILL_FORM.PRODUCT ? "default" : undefined
            }
          />
        )}
        name={props.name}
        rules={{ required: true }}
        defaultValue=""
      />
      {props.error && <ErrorMessage error={props.errorMessage} />}
    </>
  );
}
