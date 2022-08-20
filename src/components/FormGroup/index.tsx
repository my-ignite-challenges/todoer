import { Alert, View } from "react-native";

import { COLORS } from "../../colors";

import { Tasks } from "../../screens/Home";
import { Button } from "../Button";
import { Input } from "../Input";

import { styles } from "./styles";

type FormGroupProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  tasks: Tasks;
  setTasks: (tasks: Tasks) => void;
};

export function FormGroup({
  inputValue,
  setInputValue,
  tasks,
  setTasks,
}: FormGroupProps) {
  function handleItemCreation() {
    if (!inputValue) {
      return Alert.alert(
        "Criação de Tarefa",
        "Por favor, digite a descrição da tarefa"
      );
    }

    const taskDescriptionAlreadyExists = tasks.find(
      (task) => task.description === inputValue
    );

    if (taskDescriptionAlreadyExists) {
      return Alert.alert(
        "Criação de Tarefa",
        "Já existe um item com esta descrição na lista"
      );
    }

    setTasks([
      ...tasks,
      { id: String(tasks.length + 1), description: inputValue, isDone: false },
    ]);
    setInputValue("");
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button onPress={handleItemCreation} />
    </View>
  );
}
