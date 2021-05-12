import React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import { IconRegistry } from "@ui-kitten/components";
import { MaterialCommunityIconsPack } from "./src/adapter/IconAdapter";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store/store";
import { Platform, UIManager } from "react-native";
import { AppContainer } from "./AppContainer";

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
        <Provider store={Store}>
          <AppContainer />
        </Provider>
      </>
    );
  } else {
    return null;
  }
}
