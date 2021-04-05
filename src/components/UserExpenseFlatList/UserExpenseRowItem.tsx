import { Divider } from "@ui-kitten/components/ui/divider/divider.component";
import { Card, Text } from "@ui-kitten/components";

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

export interface UserExpenseRowItemProps {
  item: IUserPayFlatList;
}

export function UserExpenseRowItem(props: UserExpenseRowItemProps) {
  const [isBodyOpen, setBodyState] = React.useState(true);

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

  const Item = (data: { data: PayDTO }) => {
    return (
      <React.Fragment>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text>{data.data.productname}</Text>
          </View>
          <View>
            <Text>{data.data.sumToPay}</Text>
          </View>
        </View>
        <Divider />
      </React.Fragment>
    );
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
        {props.item.data.map((x, index) => (
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
        <View style={{ flex: 1 }}>
          <Text>{props.item.id}</Text>
          <Text>{props.item.totalPay}</Text>
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
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={OnItemHeaderClicked}
        style={{ paddingVertical: 5 }}
      >
        {RenderItemHeader()}
        {isBodyOpen ? RenderItemBody() : null}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
