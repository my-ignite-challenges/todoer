import { View, Text, TouchableOpacity } from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";

import { COLORS } from "../../colors";

import { Task, Tasks } from "../../screens/Home";

import { styles } from "./styles";

type Props = {
  task: Task;
  handleItemRemoval: (item: string) => void;
  tasks: Tasks;
  setTasks: (tasks: Task[]) => void;
};

export function ListItem({ task, handleItemRemoval, tasks, setTasks }: Props) {
  function setTaskAsDone(itemId: string) {
    setTasks(
      tasks.map((task) => {
        if (task?.id === itemId) {
          return { ...task, isDone: task?.isDone ? false : true };
        }
        return task;
      }) as Tasks
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentLeft}>
        <TouchableOpacity
          style={styles.check}
          onPress={() => setTaskAsDone(task?.id)}
        >
          {task?.isDone ? (
            <Octicons
              name="check-circle-fill"
              size={18}
              color={COLORS.PURPLE_BACKGROUND}
            />
          ) : (
            <Feather name="circle" size={18} color={COLORS.BLUE} />
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.description,
            task?.isDone && {
              color: COLORS.GRAY_300,
              textDecorationLine: "line-through",
            },
          ]}
        >
          {task?.description}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => handleItemRemoval(task?.id)}
      >
        <Feather name="trash-2" size={18} color={COLORS.GRAY_300} />
      </TouchableOpacity>
    </View>
  );
}
