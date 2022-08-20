import { useState } from "react";
import { Alert, FlatList, View } from "react-native";

import { EmptyListComponent } from "../../components/EmptyListComponent";

import { FormGroup } from "../../components/FormGroup";
import Header from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ListItem } from "../../components/ListItem";

export type Task = {
  id: string;
  description: string;
  isDone: boolean;
};

export type Tasks = Task[];

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<Tasks>([] as Tasks);
  const [inputValue, setInputValue] = useState("");

  function handleItemRemoval(itemId: string) {
    Alert.alert(
      "Remoção de Tarefa",
      "Tem certeza de que deseja remover esta tarefa?",
      [
        {
          text: "Sim",
          onPress: () =>
            setTasks(tasks.filter((task: Task) => task?.id !== itemId)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <FormGroup
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTasks={setTasks}
        tasks={tasks}
      />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ListItem
            task={item}
            handleItemRemoval={handleItemRemoval}
            tasks={tasks}
            setTasks={setTasks}
          />
        )}
        ListHeaderComponent={<ListHeader tasks={tasks} />}
        ListEmptyComponent={<EmptyListComponent />}
        keyExtractor={(item) => item?.id}
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        style={{
          marginTop: 200,
          width: "100%",
        }}
      />
    </View>
  );
}
