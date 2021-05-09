import { Text, useTheme } from "@ui-kitten/components";
import { Divider } from "@ui-kitten/components";
import * as React from "react";
import { View, TouchableWithoutFeedback, LayoutAnimation } from "react-native";
import GlobalLayout from "../../../constants/GlobalLayout";
import { ExpenseDTO } from "../../../DTO/ExpenseDTO";
import { PayDTO } from "../../../DTO/PayDTO";
import { IconChooser } from "../../../enum/IconChooser";
import {
  GetHeaderTitle,
  IsPayDTO,
  IsUserPayFlatList,
} from "../../../helpers/Common";
import { IExpensesSectionList } from "../../../interface/IExpensesSectionList";
import { IUserPayFlatList } from "../../../interface/IUserPayFlatList";
import { CustomIcon } from "../../Icons/CustomIcon";
import { ItemRowTextContainer } from "../../Texts/ItemRowTextContainer";
import { ExpenseRowItemBody } from "./ExpenseRowItem";
import { PayRowItemHeader } from "./PayRowItem";

export interface CollapsableViewProps {
  item: IUserPayFlatList | IExpensesSectionList;
  enableAccordion: boolean;
  onItemEditPressed?: (expense: ExpenseDTO) => void;
}

export function CollapsableView(props: CollapsableViewProps) {
  const theme = useTheme();

  const [isItemBodyOpen, setItemBodyState] = React.useState(
    props.enableAccordion ? false : true
  );

  const OnItemHeaderPressed = () => {
    setItemBodyState(!isItemBodyOpen);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const GetItemHeader = (): JSX.Element => {
    if (IsUserPayFlatList(props.item)) {
      return PayRowItemHeader(
        props.item.data[0].username,
        props.item.totalPay,
        isItemBodyOpen
      );
    } else {
      return (
        <ItemRowTextContainer
          headerText={GetHeaderTitle(props.item.data[0].ExpenseType)}
        />
      );
    }
  };
  const RenderItemHeader = () => {
    return RenderItemWrapper(GetItemHeader());
  };

  const RenderItemBody = (): JSX.Element => {
    const content: JSX.Element = props.item.data.map(
      (x: ExpenseDTO | PayDTO, index: number) => (
        <RenderItemRow data={x} key={index} />
      )
    );
    return RenderItemWrapper(content);
  };

  const RenderItemWrapper = (content: JSX.Element) => {
    return (
      <View
        style={[
          {
            backgroundColor: theme["background-basic-color-1"],
          },
          GlobalLayout.flatList.rowContainer,
          GlobalLayout.flatList.rowItemShadow,
        ]}
      >
        {content}
      </View>
    );
  };

  const RenderItemRow = (data: { data: PayDTO | ExpenseDTO }) => {
    return (
      <React.Fragment>
        <View
          style={{
            paddingVertical: 10,
            marginHorizontal: 10,
          }}
        >
          {IsPayDTO(data.data)
            ? GetItemBody(data.data.productname, data.data.sumToPay.toFixed(2))
            : GetItemBody(data.data.name, data.data.Price.toString())}

          {!IsPayDTO(data.data) ? (
            <ExpenseRowItemBody
              expense={data.data}
              onEditExpensePressed={props.onItemEditPressed}
            />
          ) : null}
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
      onPress={OnItemHeaderPressed}
      disabled={!props.enableAccordion}
      style={{ paddingVertical: 5 }}
    >
      <View>
        {RenderItemHeader()}
        {isItemBodyOpen ? RenderItemBody() : null}
      </View>
    </TouchableWithoutFeedback>
  );
}
