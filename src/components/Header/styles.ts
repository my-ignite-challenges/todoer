import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: COLORS.HEADER_BACKGROUND,
    height: 173,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
