import { Layout } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import GlobalLayout from "../../constants/GlobalLayout";

interface ScreenContainerProps {}

export const ScreenContainer: React.FC<ScreenContainerProps> = (props) => {
  return (
    <Layout level="2" style={GlobalLayout.globalStyles.layout}>
      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
    </Layout>
  );
};
