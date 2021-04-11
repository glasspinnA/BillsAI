import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
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
    },
    rowItemShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
  }),
};
