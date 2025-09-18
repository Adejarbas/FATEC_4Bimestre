import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/*
        <Text>Bem-Vindo à tela Home</Text>

        <Button
          title="Ir para Detalhes"
          onPress={() => navigation.navigate("Details", {itemId: 42 })}
        />
      */}

      {/* Botões bonitos e do mesmo tamanho, cada um com uma cor */}
      <TouchableOpacity
        style={[styles.botao, { backgroundColor: "#2196f3" }]}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.textoBotao}>IR PARA CADASTRO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { backgroundColor: "#00cec9" }]}
        onPress={() => navigation.navigate("Consulta")}
      >
        <Text style={styles.textoBotao}>IR PARA CONSULTA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    width: 220,
    height: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});