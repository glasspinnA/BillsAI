import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import useCachedResources from "./src/hooks/useCachedResources";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { MaterialCommunityIconsPack } from "./src/adapter/IconAdapter";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store/store";
import { Platform, UIManager } from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  if (isLoadingComplete) {
    return (
      <>
        <IconRegistry icons={MaterialCommunityIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <Provider store={Store}>
            <SafeAreaProvider>
              <Navigation />
              <StatusBar />
            </SafeAreaProvider>
          </Provider>
        </ApplicationProvider>
      </>
    );
  } else {
    return null;
  }
}
