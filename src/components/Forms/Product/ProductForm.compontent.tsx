import * as React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { PRODUCT_FORM } from "../../../constants/FormNames";
import { IFormInputs } from "../../../interface/IFormInputs";
import { RoundedButton } from "../../Buttons/RoundedButton";
import { Counter } from "../../Counter/Counter.component";
import { CustomController } from "../CreateExpense/View/Controller.component";

export interface ProductFormProps {
  clearForm: boolean;
}

export function ProductForm(props: ProductFormProps) {
  const { control, handleSubmit, errors, setValue } = useForm<IFormInputs>();
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    if (props.clearForm) ClearForm();
  }, [props.clearForm]);

  const OnCounterChanged = (increase: boolean) => {
    setCount(increase ? count + 1 : count - 1);
  };

  const ClearForm = () => {
    setValue(PRODUCT_FORM.NAME, "");
    setCount(1);
  };

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    ClearForm();
  };

  return (
    <View style={{ flex: 1, padding: 5, justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <CustomController
            control={control}
            name={PRODUCT_FORM.NAME}
            placeholder="Name"
            errorMessage="Name is required."
            error={errors.NAME}
          />
        </View>
        <Counter count={count} onCountChange={OnCounterChanged} />
      </View>
      <RoundedButton title={"Next"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
