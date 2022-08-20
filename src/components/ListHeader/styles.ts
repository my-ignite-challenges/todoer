import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginVertical: 20,
  },
  created: {
    flexDirection: "row",
  },
  createdTitle: {
    fontWeight: "bold",
    color: COLORS.BLUE,
  },
  done: {
    flexDirection: "row",
  },
  doneTitle: {
    fontWeight: "bold",
    color: COLORS.PURPLE,
  },
  quantity: {
    backgroundColor: COLORS.GRAY_400,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    display: "flex",
    borderRadius: 12,
    marginLeft: 8,
  },
  quantityText: {
    fontSize: 14,
    color: COLORS.GRAY_200,
  },
});
