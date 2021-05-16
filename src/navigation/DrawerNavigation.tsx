import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import { SettingScreen } from "../screens/SettingScreen";
import { SCREEN_NAME } from "../constants/Screens";
import { isDevModeEnabled } from "../env/configs";
import MainStack from "./MainStack";
import InventoryNavigation from "./InventoryNavigation";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={SCREEN_NAME.INVENTORY_SCREEN}>
      <Drawer.Screen
        name={SCREEN_NAME.ROOT_SCREEN}
        component={GetRootStack()}
      />
      <Drawer.Screen
        name={SCREEN_NAME.INVENTORY_SCREEN}
        component={InventoryNavigation}
      />
      <Drawer.Screen
        name={SCREEN_NAME.SETTING_SCREEN}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

const GetRootStack = () => {
  return isDevModeEnabled ? BottomTabNavigator : MainStack;
};
