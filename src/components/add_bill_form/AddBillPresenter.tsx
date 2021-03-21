import * as React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { AddBillView } from "./AddBillView";

interface AddFormPresenterProps {}

const AddForm = (props: AddFormPresenterProps) => {
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

  const UpdateData = (data) => {
    setData(data);
  };

  const IsAnyItemSelected = (v) => {
    return v.filter((x) => x.isSelected).length != 0;
  };

  const OnSubmit = (data) => console.log("Submit");

  return (
    <AddBillView
      data={data}
      selectedIndex={selectedIndex}
      setSelectedIndex={(index: number) => setSelectedIndex(index)}
      isAnyItemSelected={IsAnyItemSelected}
      updateData={UpdateData}
      onSubmit={OnSubmit}
    />
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
