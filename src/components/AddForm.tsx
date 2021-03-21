import { RadioGroup, Radio, Button } from "@ui-kitten/components";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { HList } from "./HList";

interface AddFormProps {}

const AddForm = (props: AddFormProps) => {
  const { control, handleSubmit, trigger, errors } = useForm();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [data, setData] = React.useState([
    {
      id: "c1b1-46c2-aed5-3ad53abb28ba",
      title: "JÖ",
      income: "",
      isSelected: false,
    },
    {
      id: "3ac68afc-48d3-a4f8-fbd91aa97f63",
      title: "OS",
      income: "",
      isSelected: false,
    },
    {
      id: "58694a0f-3da1-4171f-bd96-145571e29d72",
      title: "FA",
      income: "",
      isSelected: false,
    },
    {
      id: "584694a0f-471f-bd96-145571e29d72",
      title: "X",
      income: "",
      isSelected: false,
    },
    {
      id: "3d5a1-471f-bd96-145571e29d72",
      title: "A",
      income: "",
      isSelected: false,
    },
    {
      id: "586954a0f-3da1-471f-bd96",
      title: "DA",
      income: "",
      isSelected: false,
    },
    {
      id: "586954a0f-3da1-bd96-145571e29d72",
      title: "XA",
      income: "",
      isSelected: false,
    },
  ]);

  const updateData = (data) => {
    setData(data);
    trigger("items");
  };

  const IsAllItemsUnselected = (v) => {
    return v.filter((x) => x.isSelected).length === 0;
  };

  const onSubmit = (data) => console.log("Submit");

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
            name="firstName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.firstName && <Text>firstName is required.</Text>}
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
            name="lastName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.lastName && <Text>Lastname is required.</Text>}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <HList
              data={data}
              updateData={(v) => {
                onChange(v);
                updateData(v);
              }}
            />
          )}
          name="items"
          rules={{
            required: true,
            validate: IsAllItemsUnselected,
          }}
          defaultValue=""
        />
        {errors.items && <Text>ss is required.</Text>}
      </View>
      <View>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={(index) => setSelectedIndex(index)}
        >
          <Radio>Income based</Radio>
          <Radio>50/50 Shared</Radio>
        </RadioGroup>
      </View>
      <View>
        <Button onPress={handleSubmit(onSubmit)}>Level up</Button>
      </View>
    </View>
  );
};

export default AddForm;

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
