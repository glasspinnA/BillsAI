import { Divider } from "@ui-kitten/components/ui/divider/divider.component";
import { Text } from "@ui-kitten/components";
import * as React from "react";
import { useRef } from "react";
import {
  View,
  Animated,
  Easing,
  LayoutAnimation,
  SafeAreaView,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { PayDTO } from "../../DTO/PayDTO";
import { IconChooser } from "../../enum/IconChooser";
import { IUserPayFlatList } from "../../interface/IUserPaySectionList";
import { CustomIcon } from "../CustomIcon";
import { IExpensesSectionList } from "../../interface/IExpensesSectionList";
import { ExpenseDTO } from "../../DTO/ExpenseDTO";

export interface UserExpenseRowItemProps {
  item: IUserPayFlatList | IExpensesSectionList;
  enableAccordion: boolean;
}

export function UserExpenseRowItem(props: UserExpenseRowItemProps) {
  const [isBodyOpen, setBodyState] = React.useState(
    props.enableAccordion ? false : true
  );

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const Rotate = () => {
    fadeAnim.setValue(isBodyOpen ? 1 : 0);
    Animated.timing(fadeAnim, {
      toValue: isBodyOpen ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const rotateData = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "0deg"],
  });

  const IsPayDTOObject = (data: PayDTO | ExpenseDTO): data is PayDTO => {
    return (data as PayDTO).userId !== undefined;
  };

  const Item = (data: { data: PayDTO | ExpenseDTO }) => {
    return (
      <React.Fragment>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            marginHorizontal: 10,
          }}
        >
          {GetItemBody(data.data)}
        </View>
        <Divider />
      </React.Fragment>
    );
  };

  const GetItemBody = (data: PayDTO | ExpenseDTO) => {
    if (IsPayDTOObject(data)) {
      return (
        <View style={{ flex: 1 }}>
          <Text>{data.sumToPay}</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Text>{data.Name}</Text>
        </View>
      );
    }
  };

  const GetItemHeader = (data: PayDTO | ExpenseDTO) => {
    if (IsPayDTOObject(data)) {
      return (
        <View>
          <View style={{ flex: 1 }}>
            <Text>{data.sumToPay}</Text>
            <Text>{data.userId}</Text>
          </View>
          <Animated.View
            style={{
              justifyContent: "center",
              transform: [{ rotateZ: rotateData }],
            }}
          >
            {CustomIcon(IconChooser.CHEVRON)}
          </Animated.View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={{ flex: 1 }}>
            <Text>{props.item.id}</Text>
          </View>
        </View>
      );
    }
  };

  const RenderItemBody = () => {
    return (
      <View
        style={{
          marginTop: 5,
          borderRadius: 5,
          backgroundColor: "orange",
          borderWidth: 1,
          marginHorizontal: 10,
        }}
      >
        {props.item.data.map((x: ExpenseDTO | PayDTO, index: number) => (
          <Item data={x} key={index}></Item>
        ))}
      </View>
    );
  };

  const OnItemHeaderClicked = () => {
    Rotate();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setBodyState(!isBodyOpen);
  };

  const RenderItemHeader = () => {
    return (
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          flexDirection: "row",
          marginHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
          borderWidth: 1,
        }}
      >
        {GetItemHeader(props.item.data[0])}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={OnItemHeaderClicked}
        disabled={!props.enableAccordion}
        style={{ paddingVertical: 5 }}
      >
        {RenderItemHeader()}
        {isBodyOpen ? RenderItemBody() : null}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
