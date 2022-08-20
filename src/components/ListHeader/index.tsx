import { Text, View } from "react-native";

import { Tasks } from "../../screens/Home";

import { styles } from "./styles";

type QuantityProps = {
  quantity: number;
};

type ListHeaderProps = {
  tasks: Tasks;
};

function Quantity({ quantity }: QuantityProps) {
  return (
    <View style={styles.quantity}>
      <Text style={styles.quantityText}>{quantity}</Text>
    </View>
  );
}

export function ListHeader({ tasks }: ListHeaderProps) {
  const createdTasksQuantity = tasks.length;
  const doneTasksQuantity = tasks.filter((task) => task?.isDone).length;

  return (
    <View style={styles.container}>
      <View style={styles.created}>
        <Text style={styles.createdTitle}>Criadas</Text>
        <Quantity quantity={createdTasksQuantity} />
      </View>

      <View style={styles.done}>
        <Text style={styles.doneTitle}>Concluídas</Text>
        <Quantity quantity={doneTasksQuantity} />
      </View>
    </View>
  );
}
