import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
  },
  globalStyles: StyleSheet.create({
    layout: { flex: 1, paddingHorizontal: 10 },
  }),
  flatList: StyleSheet.create({
    rowContainer: {
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginVertical: 10,
      marginHorizontal: 3,
    },
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
