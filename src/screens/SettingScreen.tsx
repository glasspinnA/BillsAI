import { Layout } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, Switch, FlexStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RadioButton } from "../components/Radio/RadioButton/RadioButton.component";
import { RadioGroup } from "../components/Radio/RadioGroup/RadioGroup.component";
import { ScreenHeaderText } from "../components/Texts/ScreenHeader";
import GlobalLayout from "../constants/GlobalLayout";
import { Theme } from "../enum/Theme";
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
          <RadioButton color="orange" title={Theme[Theme.Light]} />
          <RadioButton color="orange" title={Theme[Theme.Dark]} />
          <RadioButton color="orange" title={Theme[Theme.Jonna]} />
        </RadioGroup>
      </SafeAreaView>
    </Layout>
  );
}
