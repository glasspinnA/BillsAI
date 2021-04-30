import { createStackNavigator } from "@react-navigation/stack";
import TabOneScreen from "../screens/TabOneScreen";
import { TabThreeScreen } from "../screens/TabThreeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import * as React from "react";

export default function MainStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="TabTwo">
      <Stack.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
