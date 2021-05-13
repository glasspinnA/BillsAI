import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import DrawerNavigator from "./DrawerNavigation";
import LinkingConfiguration from "./LinkingConfiguration";
export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
