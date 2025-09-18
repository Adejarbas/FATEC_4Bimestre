import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Jobs from './components/Jobs';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState("Sabor de Pastel");
  
  let img = 'https://sujeitoprogramador.com/steve.png';
  
  const handleMudar = () => {
    setNome("Pastel de Costela com Catupiry");
  }
  
  return (
    <View style={styles.container}>
      <Text style={{ color: '#FF0000', fontSize: 85, margin: 15 }}>
        Mobile
      </Text>
      
      <Jobs 
        img={img} 
        largura={100} 
        altura={200}
        fonte={15} 
        fulano="Lulinha Da Silva"
      />
      
      <Text style={{ fontSize: 30 }}>
        {nome}
      </Text>
      
      <Button title="Entrar" onPress={handleMudar} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});