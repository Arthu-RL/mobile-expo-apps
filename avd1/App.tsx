import React from "react";
import { globalStyles } from "./Styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={globalStyles.root}>
      <View style={globalStyles.nav}>
        <Text style={globalStyles.title}>Controle de Gastos</Text>
      </View>
      <TextInput style={globalStyles.input} placeholder="Descrição"></TextInput>
      <TextInput style={globalStyles.input} placeholder="Valor"></TextInput>
      <TextInput
        style={globalStyles.input}
        placeholder="Data Compra"
      ></TextInput>
      <TextInput style={globalStyles.input} placeholder="Categoria"></TextInput>
      <TextInput
        style={globalStyles.input}
        placeholder="Local de compra"
      ></TextInput>

      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.textButton}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
