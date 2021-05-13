import { Layout, Radio, RadioGroup } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ScreenHeaderText } from "../components/Texts/ScreenHeader";
import GlobalLayout from "../constants/GlobalLayout";
import { SetDarkModeState, SetTheme } from "../redux/reducer/commonReducer";
import { RootState } from "../redux/store/store";

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
        <ScreenHeaderText title="Setting" />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={ToggleSwitch}
          value={isDarkMode}
          style={{ backgroundColor: "red" }}
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
