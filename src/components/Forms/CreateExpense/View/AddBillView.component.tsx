import { RadioGroup, Radio, Input, Text } from "@ui-kitten/components";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { View } from "react-native";
import { ADD_BILL_FORM } from "../../../../constants/FormNames";
import { ExpenseDTO } from "../../../../DTO/ExpenseDTO";
import { IFormInputs } from "../../../../interface/IFormInputs";
import { HList } from "../../../FlatLists/UserSelector/HList";
import { RoundedButton } from "../../../Buttons/RoundedButton";
import { UserDTO } from "../../../../DTO/UserDTO";
import baseStyle from "../../../../constants/style";
import componentStyle from "./AddView.component.style";
import { CustomController } from "./Controller.component";
import { ErrorMessage } from "./ErrorMessage.component";
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
    reset,
  } = useForm<IFormInputs>();
  React.useEffect(() => {
    trigger("USER");
  }, []);

  React.useEffect(() => {
    if (Object.keys(props.prefilledForm).length !== 0) PopulateForm();
  }, [props.prefilledForm]);

  const PopulateForm = () => {
    setValue(ADD_BILL_FORM.PRODUCT, props.prefilledForm.name);
    setValue(
      ADD_BILL_FORM.PRICE,
      props.prefilledForm.Price && props.prefilledForm.Price.toString()
    );
    setValue(ADD_BILL_FORM.USER, props.prefilledForm.Users);
    setValue(ADD_BILL_FORM.ID, props.prefilledForm.id);
  };

  const OnAddPressed = (data: IFormInputs) => {
    console.log(data);
    props.onAddExpense(data);
    reset();
  };

  return (
    <View style={componentStyle.container}>
      <View style={{ flex: 1 }}>
        <Text category="h4">Add expense</Text>
      </View>
      <View style={baseStyle.flexThree}>
        <View style={baseStyle.flexOne}>
          <CustomController
            control={control}
            name={ADD_BILL_FORM.PRODUCT}
            placeholder="Product"
            errorMessage="Name is required."
            error={errors.PRODUCT}
          />
        </View>
        <View style={baseStyle.flexOne}>
          <CustomController
            control={control}
            name={ADD_BILL_FORM.PRICE}
            placeholder="Price"
            errorMessage="Price is required."
            error={errors.PRICE}
          />
        </View>
      </View>
      <View style={baseStyle.flexThree}>
        <Text category="s1">Users involved</Text>
        <View style={baseStyle.flexFour}>
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
                isReadOnly={false}
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
        <View style={baseStyle.flexOne}>
          {errors.USER && <ErrorMessage error="User is required." />}
        </View>
      </View>
      <View style={componentStyle.userRowContainer}>
        <Text category="s1">Expense type</Text>
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
      <View style={baseStyle.flexOne}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Product"
              style={{ display: "none" }}
            />
          )}
          name={ADD_BILL_FORM.ID}
          rules={{ required: false }}
          defaultValue="-1"
        />
      </View>
      <View style={baseStyle.flexOne}>
        <RoundedButton onPress={handleSubmit(OnAddPressed)} title={"Add"} />
      </View>
    </View>
  );
}
