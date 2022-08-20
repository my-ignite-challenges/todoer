import { StyleSheet } from "react-native";

import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.GRAY_400,
    justifyContent: "center",
    height: 208,
  },
  textContent: {
    marginTop: 16,
  },
  topText: {
    fontWeight: "bold",
    color: COLORS.GRAY_300,
  },
  bottomText: {
    color: COLORS.GRAY_300,
  },
});
