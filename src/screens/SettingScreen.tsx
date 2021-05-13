import { Layout, Radio, RadioGroup } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, Switch, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import GlobalLayout from "../constants/GlobalLayout";
import { Theme } from "../enum/Theme";
import { SetDarkModeState, SetTheme } from "../redux/reducer/commonReducer";
import { RootState, Store } from "../redux/store/store";

export interface SettingScreenProps {}

export function SettingScreen(props: SettingScreenProps) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.common.isDarkMode);
  const SelectedTheme = useSelector((state: RootState) => state.common.theme);
  const ToggleSwitch = () => dispatch(SetDarkModeState(!isDarkMode));
  const SetSelectedTheme = (index: number) => dispatch(SetTheme(index));
  return (
    <Layout level="2" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>SettingScreen</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={ToggleSwitch}
          value={isDarkMode}
        ></Switch>
        <RadioGroup
          selectedIndex={SelectedTheme}
          onChange={(index) => SetSelectedTheme(index)}
        >
          <Radio>Option 1</Radio>
          <Radio>Option 2</Radio>
        </RadioGroup>
      </SafeAreaView>
    </Layout>
  );
}
