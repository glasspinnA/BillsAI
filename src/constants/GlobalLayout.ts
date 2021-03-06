import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  globalStyles: StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: "row",
      width: width,
      padding: 5,
    },
  }),
};
