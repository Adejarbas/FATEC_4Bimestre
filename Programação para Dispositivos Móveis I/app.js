import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App em React Native!</Text>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Esse é um gatinho fofo.</Text>
      <Image
        source={{ uri: 'https://placebear.com/200/200' }}
        style={styles.imagem}
      />
      <Text style={styles.texto}>E esse é um ursinho simpático.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
  },
  imagem: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});