import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_500,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 74,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.GRAY_400,
  },

  contentLeft: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },

  description: {
    color: COLORS.GRAY_100,
    marginHorizontal: 8,
    maxWidth: 235,
  },

  check: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  delete: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
