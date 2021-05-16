import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ExpenseScreen from "../screens/Expenses/ExpenseScreen";
import UserScreen from "../screens/Expenses/UserScreen";
import { PaymentScreen } from "../screens/Expenses/PaymentScreen";
import { SCREEN_NAME } from "../constants/Screens";
import { SettingScreen } from "../screens/SettingScreen";

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={SCREEN_NAME.USER_SCREEN}>
      <BottomTab.Screen
        name={SCREEN_NAME.EXPENSE_SCREEN}
        component={ExpenseScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.USER_SCREEN}
        component={UserScreenNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.PAYMENT_SCREEN}
        component={PaymentScreenNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.SETTING_SCREEN}
        component={SettingStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const ExpenseStack = createStackNavigator();
function ExpenseScreenNavigator() {
  return (
    <ExpenseStack.Navigator>
      <ExpenseStack.Screen
        name={SCREEN_NAME.EXPENSE_SCREEN}
        component={ExpenseScreen}
        options={{ headerShown: false }}
      />
    </ExpenseStack.Navigator>
  );
}

const UserStack = createStackNavigator();
function UserScreenNavigation() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name={SCREEN_NAME.USER_SCREEN}
        component={UserScreen}
        options={{ headerShown: false }}
      />
    </UserStack.Navigator>
  );
}

const PaymentStack = createStackNavigator();
function PaymentScreenNavigation() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
        name={SCREEN_NAME.PAYMENT_SCREEN}
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
    </PaymentStack.Navigator>
  );
}

const SettingStack = createStackNavigator();
function SettingStackNavigation() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name={SCREEN_NAME.SETTING_SCREEN}
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </SettingStack.Navigator>
  );
}
