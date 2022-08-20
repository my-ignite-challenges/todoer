import { Image, Text, View } from "react-native";

import clipboard from "../../assets/clipboard.png";
import { styles } from "./styles";

export function EmptyListComponent() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />
      <View style={styles.textContent}>
        <Text style={styles.topText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.bottomText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
