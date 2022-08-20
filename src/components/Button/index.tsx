import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Feather } from "@expo/vector-icons/";
import { styles } from "./styles";
import { COLORS } from "../../colors";

export function Button(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Feather name="plus-circle" size={18} color={COLORS.GRAY_100} />
    </TouchableOpacity>
  );
}
