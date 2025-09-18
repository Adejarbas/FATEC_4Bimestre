import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ConsultaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta de Usuário</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>CONSULTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 20,
  },
  botao: {
    width: "100%",
    height: 44,
    backgroundColor: "#00cec9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});