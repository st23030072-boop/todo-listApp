import React, { useState } from "react";
import { SafeAreaView, FlatList, Text, StatusBar } from "react-native";
import Header from "./src/components/Header";
import TaskInput from "./src/components/TaskInput";
import TaskItem from "./src/components/TaskItem";
import { globalStyles } from "./src/styles/globalStyles";

export default function App() {
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Función para agregar tarea
  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // Función para eliminar tarea
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <TaskInput onAddTask={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDeleteTask={handleDeleteTask} />
        )}
        ListEmptyComponent={
          <Text style={globalStyles.emptyText}>
            No hay tareas pendientes. ¡Agrega una!
          </Text>
        }
      />
    </SafeAreaView>
  );
}
