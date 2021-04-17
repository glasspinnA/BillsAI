import {
  RadioGroup,
  Radio,
  Button,
  Input,
  Text,
  useTheme,
} from "@ui-kitten/components";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { ADD_BILL_FORM } from "../../constants/FormNames";
import { ExpenseDTO } from "../../DTO/ExpenseDTO";
import { IFormInputs } from "../../interface/IFormInputs";
import { HList } from "../AddExpenseBottomSheet/HList";
import { RoundedButton } from "../RoundedButton";

export interface AddBillViewProps {
  users: UserDTO[];
  onAddExpense(data: IFormInputs): void;
  updateData(users: UserDTO[]): void;
  isAnyItemSelected(users: UserDTO[]): boolean;
  setSelectedIndex(index: number): void;
  selectedIndex: number;
  prefilledForm: ExpenseDTO;
}

export function AddBillView(props: AddBillViewProps) {
  const {
    control,
    handleSubmit,
    trigger,
    errors,
    setValue,
  } = useForm<IFormInputs>();
  const theme = useTheme();
  React.useEffect(() => {
    trigger("USER");
  }, []);

  React.useEffect(() => {
    if (Object.keys(props.prefilledForm).length !== 0) PopulateForm();
  }, [props.prefilledForm]);

  const PopulateForm = () => {
    setValue(ADD_BILL_FORM.PRODUCT, props.prefilledForm.Name);
    setValue(
      ADD_BILL_FORM.PRICE,
      props.prefilledForm.Price && props.prefilledForm.Price.toString()
    );
    setValue(ADD_BILL_FORM.USER, props.prefilledForm.Users);
    setValue(ADD_BILL_FORM.ID, props.prefilledForm.id);
  };

  const RenderErrorMessage = (error: string) => {
    return (
      <Text category="p1" style={{ color: theme["color-danger-600"] }}>
        {error}
      </Text>
    );
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <View style={{ flex: 1 }}>
        <Text category="h4">Hello</Text>
      </View>
      <View
        style={{
          flex: 3,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Product"
              />
            )}
            name={ADD_BILL_FORM.PRODUCT}
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.PRODUCT && RenderErrorMessage("Name is required.")}
        </View>
        <View style={{ flex: 1 }}>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Price"
              />
            )}
            name={ADD_BILL_FORM.PRICE}
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.PRICE && RenderErrorMessage("Price is required.")}
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 4 }}>
          <Controller
            control={control}
            render={({ onChange, value }) => (
              <HList
                data={value}
                updateData={(v) => {
                  onChange(v);
                  trigger("USER");
                  props.updateData(v);
                }}
              />
            )}
            name={ADD_BILL_FORM.USER}
            rules={{
              required: true,
              validate: props.isAnyItemSelected,
            }}
            defaultValue={props.users}
          />
        </View>
        <View style={{ flex: 1 }}>
          {errors.USER && RenderErrorMessage("User is required.")}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Controller
          control={control}
          render={({ onChange }) => (
            <RadioGroup
              style={{ flexDirection: "row" }}
              selectedIndex={props.selectedIndex}
              onChange={(index) => {
                onChange(index);
                props.setSelectedIndex(index);
              }}
            >
              <Radio>50/50 Shared</Radio>
              <Radio
                disabled={props.users.every((x) => x.income === undefined)}
              >
                Income based
              </Radio>
            </RadioGroup>
          )}
          name={ADD_BILL_FORM.EXPENSE_TYPE}
          defaultValue="0"
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          // display: "none",
        }}
      >
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Product"
            />
          )}
          name={ADD_BILL_FORM.ID}
          rules={{ required: false }}
          defaultValue="-1"
        />
      </View>
      <View style={{ flex: 1, paddingVertical: 10 }}>
        <RoundedButton
          onPress={handleSubmit(props.onAddExpense)}
          title={"Add"}
        />
      </View>
    </View>
  );
}
