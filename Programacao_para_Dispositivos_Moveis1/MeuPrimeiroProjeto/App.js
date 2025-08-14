import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import imagem from './assets/gato.jpg';

export default function App() {
  
  let dog = 'Doguinhosss';

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
      <Text style={styles.texto}>{dog}</Text>
    </View>
  );
}
  /*class AppClass extends Component {
    render() {
      return(
        <View>
          <Text>Olá Mundo</Text>
          <Text>Meu primeiro app</Text>
          <Text style={{color: '#FF0000', fontSize: 25, margin:15}}>Programador</Text>
          <Image source={imagem} style={{width:100, height:100}} />
          <Text>Daniel Rodrigues</Text>
        </View>
      );
    }
  }*/

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#0000FF',
  },
  imagem: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});