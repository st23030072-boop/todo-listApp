import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function Header() {
  return (
    <View>
      <Text style={globalStyles.header}>📌 Lista de Tareas</Text>
    </View>
  );
}
