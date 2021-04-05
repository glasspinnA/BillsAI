import { RadioGroup, Radio, Button } from "@ui-kitten/components";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { ADD_BILL_FORM } from "../../constants/FormNames";
import { IFormInputs } from "../../interface/IFormInputs";
import { HList } from "../AddExpenseBottomSheet/HList";

export interface AddBillViewProps {
  data: UserDTO[];
  onAddExpense(data: IFormInputs): void;
  updateData(users: UserDTO[]): void;
  isAnyItemSelected(users: UserDTO[]): void;
  setSelectedIndex(index: number): void;
  selectedIndex: number;
}

export function AddBillView(props: AddBillViewProps) {
  const { control, handleSubmit, trigger, errors } = useForm<IFormInputs>();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ height: 60, flexDirection: "row", backgroundColor: "red" }}
      >
        <View style={{ flex: 1 }}>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
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
          {errors.PRODUCT && <Text>firstName is required.</Text>}
        </View>
        <View style={{ flex: 1 }}>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
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
          {errors.PRICE && <Text>Lastname is required.</Text>}
        </View>
      </View>
      <View style={{ height: 100, backgroundColor: "orange" }}>
        <Controller
          control={control}
          render={({ onChange }) => (
            <HList
              data={props.data}
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
          defaultValue=""
        />
        {errors.USER && <Text>ss is required.</Text>}
      </View>
      <View style={{ height: 45, backgroundColor: "cyan" }}>
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
              <Radio>Income based</Radio>
              <Radio>50/50 Shared</Radio>
            </RadioGroup>
          )}
          name={ADD_BILL_FORM.EXPENSE_TYPE}
          defaultValue="0"
        />
      </View>
      <View style={{ flex: 6 }}>
        <Button onPress={handleSubmit(props.onAddExpense)}>Level up</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  input: {
    backgroundColor: "white",
    borderColor: "blue",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
