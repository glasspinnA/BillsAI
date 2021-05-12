import { ApplicationProvider } from "@ui-kitten/components";
import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Theme } from "./src/enum/Theme";
import Navigation from "./src/navigation";
import { GetSelectedTheme } from "./src/redux/reducer/commonReducer";
import * as eva from "@eva-design/eva";
import { useSelector, useStore } from "react-redux";
import { default as theme } from "./src/themes/custom-theme.json";
import { default as theme_1 } from "./src/themes/custom-theme-jonna.json";
import { RootState } from "./src/redux/store/store";

export interface AppContainerProps {}

export function AppContainer(props: AppContainerProps) {
  const isDarkMode = useSelector((state: RootState) => state.common.isDarkMode);
  const SelectedTheme = useSelector((state: RootState) => state.common.theme);
  const GetCustomTheme = () => {
    return { ...GetThemeMode(), ...GetTheme() };
  };

  const GetThemeMode = () => {
    return isDarkMode ? eva.dark : eva.light;
  };

  const GetTheme = () => {
    switch (SelectedTheme) {
      case Theme.Light:
        return theme;
      case Theme.Dark:
        return theme_1;
    }
  };

  return (
    <ApplicationProvider {...eva} theme={GetCustomTheme()}>
      <SafeAreaProvider>
        <StatusBar barStyle={"dark-content"} />
        <Navigation />
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}
