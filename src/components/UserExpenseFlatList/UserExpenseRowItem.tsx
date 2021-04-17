import { Divider } from "@ui-kitten/components/ui/divider/divider.component";
import { Button, Text, useTheme } from "@ui-kitten/components";
import * as React from "react";
import { View, LayoutAnimation, TouchableWithoutFeedback } from "react-native";
import { PayDTO } from "../../DTO/PayDTO";
import { IconChooser } from "../../enum/IconChooser";
import { IUserPayFlatList } from "../../interface/IUserPaySectionList";
import { CustomIcon } from "../CustomIcon";
import { IExpensesSectionList } from "../../interface/IExpensesSectionList";
import { ExpenseDTO } from "../../DTO/ExpenseDTO";
import GlobalLayout from "../../constants/GlobalLayout";
import { ExpenseType } from "../../enum/ExpenseType";
import { ItemRowTextContainer } from "../ItemRowTextContainer";
import { Chevron } from "../Chevron";
import { ExpenseToEdit } from "../../redux/reducer/baseReducer";
import { useDispatch } from "react-redux";
import { ExpenseToDelete } from "../../redux/reducer/baseReducer";

export interface UserExpenseRowItemProps {
  item: IUserPayFlatList | IExpensesSectionList;
  enableAccordion: boolean;
  onEditPressed: () => void;
}

export function UserExpenseRowItem(props: UserExpenseRowItemProps) {
  const theme = useTheme();
  const [isBodyOpen, setBodyState] = React.useState(
    props.enableAccordion ? false : true
  );
  const dispatch = useDispatch();

  const IsPayDTOObject = (data: PayDTO | ExpenseDTO): data is PayDTO => {
    return data && (data as PayDTO).userId !== undefined;
  };

  const OnItemHeaderClicked = () => {
    setBodyState(!isBodyOpen);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const OnDeleteExpensePressed = (expense: ExpenseDTO) => {
    dispatch(ExpenseToDelete(expense));
  };

  const _EditExpense = (expense: ExpenseDTO) => {
    dispatch(ExpenseToEdit(expense));
    props.onEditPressed();
  };

  const RenderItemHeader = () => {
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
        {GetItemHeader(props.item.data[0])}
      </View>
    );
  };

  const GetItemHeader = (item: PayDTO | ExpenseDTO) => {
    if (IsPayDTOObject(item)) {
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <ItemRowTextContainer
            headerText={item.username}
            subText={item.sumToPay.toString()}
          />
          <Chevron shouldToggleRotation={isBodyOpen} />
        </View>
      );
    } else {
      return (
        <ItemRowTextContainer headerText={GetHeaderTitle(item.ExpenseType)} />
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
            backgroundColor: theme["background-basic-color-1"],
          },
          GlobalLayout.flatList.rowContainer,
          GlobalLayout.flatList.rowItemShadow,
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

          {!IsPayDTOObject(data.data) ? (
            <>
              <Button onPress={() => _EditExpense(data.data as ExpenseDTO)}>
                Edit
              </Button>
              <Button
                onPress={() => OnDeleteExpensePressed(data.data as ExpenseDTO)}
              >
                Delete
              </Button>
            </>
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
      onPress={OnItemHeaderClicked}
      disabled={!props.enableAccordion}
      style={{ paddingVertical: 5 }}
    >
      <View>
        {RenderItemHeader()}
        {isBodyOpen ? RenderItemBody() : null}
      </View>
    </TouchableWithoutFeedback>
  );
}
