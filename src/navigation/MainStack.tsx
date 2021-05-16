import { createStackNavigator } from "@react-navigation/stack";
import ExpenseScreen from "../screens/Expenses/ExpenseScreen";
import { PaymentScreen } from "../screens/Expenses/PaymentScreen";
import UserScreen from "../screens/Expenses/UserScreen";
import * as React from "react";
import { SCREEN_NAME } from "../constants/Screens";
export default function MainStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAME.USER_SCREEN}>
      <Stack.Screen
        name={SCREEN_NAME.USER_SCREEN}
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREEN_NAME.EXPENSE_SCREEN}
        component={ExpenseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREEN_NAME.PAYMENT_SCREEN}
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
