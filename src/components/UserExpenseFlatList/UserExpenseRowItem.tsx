import { Divider } from "@ui-kitten/components/ui/divider/divider.component";
import { Text, useTheme } from "@ui-kitten/components";
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
import GlobalLayout from "../../constants/GlobalLayout";
import { ExpenseType } from "../../enum/ExpenseType";

export interface UserExpenseRowItemProps {
  item: IUserPayFlatList | IExpensesSectionList;
  enableAccordion: boolean;
}

export function UserExpenseRowItem(props: UserExpenseRowItemProps) {
  const theme = useTheme();
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

  const OnItemHeaderClicked = () => {
    Rotate();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setBodyState(!isBodyOpen);
  };

  const RenderItemHeader = () => {
    return (
      <View
        style={[
          {
            backgroundColor: theme["background-basic-color-1"],
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 10,
          },
          GlobalLayout.globalStyles.row,
          GlobalLayout.globalStyles.rowItemShadow,
        ]}
      >
        {GetItemHeader(props.item.data[0])}
      </View>
    );
  };

  const GetItemHeader = (item: PayDTO | ExpenseDTO) => {
    if (IsPayDTOObject(item)) {
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text category="s1" style={{ color: theme["text-basic-color"] }}>
              {item.username}
            </Text>
            <Text>{item.sumToPay}</Text>
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
            <Text category="s1" style={{ color: theme["text-basic-color"] }}>
              {GetHeaderTitle(item.ExpenseType)}
            </Text>
          </View>
        </View>
      );
    }
  };

  const GetHeaderTitle = (expenseType: ExpenseType) => {
    switch (expenseType) {
      case ExpenseType.INCOME_BASED:
        return "Income based";
      default:
        return "50/50 Shared";
    }
  };

  const RenderItemBody = () => {
    return (
      <View
        style={[
          {
            marginTop: 10,
            borderRadius: 10,
            marginHorizontal: 10,
            backgroundColor: theme["background-basic-color-1"],
          },
          GlobalLayout.globalStyles.rowItemShadow,
        ]}
      >
        {props.item.data.map((x: ExpenseDTO | PayDTO, index: number) => (
          <Item data={x} key={index}></Item>
        ))}
      </View>
    );
  };

  const Item = (data: { data: PayDTO | ExpenseDTO }) => {
    return (
      <React.Fragment>
        <View
          style={{
            paddingVertical: 10,
            marginHorizontal: 10,
          }}
        >
          {IsPayDTOObject(data.data)
            ? GetItemBody(data.data.productname, data.data.sumToPay.toString())
            : GetItemBody(data.data.Name, data.data.Price.toString())}
        </View>
        <Divider />
      </React.Fragment>
    );
  };

  const GetItemBody = (name: string, price: string) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Text category="s1">{name}</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: theme["color-success-500"],
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}
          >
            {CustomIcon(IconChooser.MONEY, theme["text-alternate-color"])}
            <Text
              category="p1"
              style={{ color: theme["text-alternate-color"] }}
            >
              {price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={OnItemHeaderClicked}
      disabled={!props.enableAccordion}
      style={{ paddingVertical: 5 }}
    >
      {RenderItemHeader()}
      {isBodyOpen ? RenderItemBody() : null}
    </TouchableWithoutFeedback>
  );
}
