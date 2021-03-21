import { RadioGroup, Radio, Button } from "@ui-kitten/components";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { ADD_BILL_FORM } from "../../constants/FormNames";
import { HList } from "../HList";

export interface AddBillViewProps {
  data: any;
  onSubmit(data: any): void;
  updateData(data: any): void;
  isAnyItemSelected(data: any): void;
  setSelectedIndex(index: number): void;
  selectedIndex: number;
}

export interface IFormInputs {
  PRODUCT: string;
  PRICE: string;
  USER: string;
  BILL_TYPE: string;
}

export function AddBillView(props: AddBillViewProps) {
  const { control, handleSubmit, trigger, errors } = useForm<IFormInputs>();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
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
      <View style={{ flex: 1 }}>
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
      <View>
        <RadioGroup
          selectedIndex={props.selectedIndex}
          onChange={(index) => props.setSelectedIndex(index)}
        >
          <Radio>Income based</Radio>
          <Radio>50/50 Shared</Radio>
        </RadioGroup>
      </View>
      <View>
        <Button onPress={handleSubmit(props.onSubmit)}>Level up</Button>
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
