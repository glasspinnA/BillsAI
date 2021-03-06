import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import useCachedResources from "./src/hooks/useCachedResources";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { MaterialCommunityIconsPack } from "./src/adapter/IconAdapter";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (isLoadingComplete) {
    return (
      <>
        <IconRegistry icons={MaterialCommunityIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </ApplicationProvider>
      </>
    );
  } else {
    return null;
  }
}
