import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SCREEN_NAME } from "../constants/Screens";
import { EditScannerScreen } from "../screens/Inventory/EditScannerScreen";
import { InventoryScreen } from "../screens/Inventory/InventoryScreen";
import { ScannerScreen } from "../screens/Inventory/ScannerScreen";

const BottomTab = createBottomTabNavigator();
export default function InventoryNavigation() {
  return (
    <BottomTab.Navigator initialRouteName={SCREEN_NAME.INVENTORY_SCREEN}>
      <BottomTab.Screen
        name={SCREEN_NAME.INVENTORY_SCREEN}
        component={InventoryStackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.SCANNER_SCREEN}
        component={ScannerStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={SCREEN_NAME.EDIT_SCANNER_SCREEN}
        component={EditScannerNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const InventoryStack = createStackNavigator();
function InventoryStackNavigation() {
  return (
    <InventoryStack.Navigator>
      <InventoryStack.Screen
        name={SCREEN_NAME.INVENTORY_SCREEN}
        component={InventoryScreen}
        options={{ headerShown: false }}
      />
    </InventoryStack.Navigator>
  );
}

const ScannerStack = createStackNavigator();
function ScannerStackNavigator() {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name={SCREEN_NAME.SCANNER_SCREEN}
        component={ScannerScreen}
        options={{ headerShown: false }}
      />
    </ScannerStack.Navigator>
  );
}

const EditScannerStack = createStackNavigator();
function EditScannerNavigator() {
  return (
    <EditScannerStack.Navigator>
      <EditScannerStack.Screen
        name={SCREEN_NAME.EDIT_SCANNER_SCREEN}
        component={EditScannerScreen}
        options={{ headerShown: false }}
      />
    </EditScannerStack.Navigator>
  );
}
