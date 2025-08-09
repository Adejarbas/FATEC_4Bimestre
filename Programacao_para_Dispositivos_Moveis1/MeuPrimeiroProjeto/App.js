import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App em React Native!</Text>
      <Image
        source={require('./assets/gato.jpg')}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Gatos</Text>
      <Image
        source={require('./assets/dog.jpg')}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Doguinhos</Text>
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