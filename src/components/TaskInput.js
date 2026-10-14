import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAddTask(text);
    setText("");
  };

  return (
    <View style={globalStyles.inputContainer}>
      <TextInput
        style={globalStyles.input}
        placeholder="Escribe una nueva tarea..."
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleAdd}>
        <Text style={globalStyles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}
