import { Radio, RadioGroup } from "@ui-kitten/components/ui";
import * as React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AddForm from "../components/AddForm";
import UserChooserRowItem from "../components/UserChooserRowItem";

export default function TabOneScreen() {
  const { control, handleSubmit, formState, register, unregister } = useForm();
  const { append, remove, fields } = useFieldArray({
    control,
    name: "test",
  });
  const onSubmit = (data: any) => console.log(data);
  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  const { errors } = formState;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [data, setData] = React.useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "JÖ",
      income: "",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "OS",
      income: "",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "FA",
      income: "",
    },
    {
      id: "58694a0f-471f-bd96-145571e29d72",
      title: "X",
      income: "",
    },
    {
      id: "3da1-471f-bd96-145571e29d72",
      title: "A",
      income: "",
    },
    {
      id: "58694a0f-3da1-471f-bd96",
      title: "DA",
      income: "",
    },
    {
      id: "58694a0f-3da1-bd96-145571e29d72",
      title: "XA",
      income: "",
    },
  ]);

  const RenderDynamic = () => {
    return (
      <View style={{ backgroundColor: "pink", flex: 1 }}>
        {fields.map((field, index) => (
          <View
            style={{ flex: 1, flexDirection: "row", backgroundColor: "silver" }}
          >
            <View style={{ flex: 2 }}>
              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <View>
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder={field.value}
                    />
                    {errors.test != undefined && errors.test[index] && (
                      <Text>Error</Text>
                    )}
                  </View>
                )}
                name={`test[${index}].product`}
                rules={{ required: true }}
                defaultValue=""
              />
            </View>
            <View style={{ flex: 2 }}>
              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <View>
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder={field.value}
                    />
                    {errors.test != undefined && errors.test[index] && (
                      <Text>Error</Text>
                    )}
                  </View>
                )}
                name={`test[${index}].price`}
                rules={{ required: true }}
                defaultValue=""
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button onPress={() => remove(index)} title="Remove" />
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>{fields.length}</Text>
      </View>
      {/* {RenderDynamic()} */}
      <AddForm />
      <View>
        <Button
          title="Add"
          onPress={() =>
            append({
              produt: "product",
              price: "price",
            })
          }
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  label: {
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "red",
    borderRadius: 4,
  },
  input: {
    backgroundColor: "white",
    borderColor: "blue",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
