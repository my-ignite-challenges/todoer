import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_500,
    padding: 16,
    color: COLORS.GRAY_100,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.HEADER_BACKGROUND,
  },
});
