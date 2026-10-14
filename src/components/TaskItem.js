import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function TaskItem({ task, onDeleteTask }) {
  return (
    <View style={globalStyles.itemContainer}>
      <Text style={globalStyles.itemText}>{task.text}</Text>
      <TouchableOpacity
        style={globalStyles.deleteButton}
        onPress={() => onDeleteTask(task.id)}
      >
        <Text style={globalStyles.deleteText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}
