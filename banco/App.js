import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Switch, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  // Estados para guardar as informações
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [limite, setLimite] = useState(1);
  const [casado, setCasado] = useState(false);

  // Função que funciona no navegador E no celular
  const mostrarMensagem = (titulo, mensagem) => {
    console.log(`📱 Mostrando mensagem: ${titulo} - ${mensagem}`);
    
    if (Platform.OS === 'web') {
      // No navegador, usa window.alert
      window.alert(`${titulo}\n\n${mensagem}`);
    } else {
      // No celular, usa Alert nativo
      Alert.alert(titulo, mensagem, [{ text: 'OK' }]);
    }
  };

  // Função para criar a conta
  const criarConta = () => {
    console.log(' BOTÃO CLICADO!');
    console.log('Nome:', nome);
    
    if (nome === '') {
      console.log(' Nome vazio - mostrando alert de erro');
      mostrarMensagem('Erro', 'Por favor, digite seu nome!');
      return;
    }

    console.log(' Nome preenchido - mostrando alert de sucesso');
    const mensagem = `Conta Criada com Sucesso:\nNome: ${nome}\nValor Limite: ${limite.toFixed(2)}\nSexo: ${sexo}\nEstado Civil: ${casado ? 'Casado' : 'Solteiro'}`;
    mostrarMensagem('Alert', mensagem);
  };

  return (
    <View style={styles.container}>
      {/* Campo de Nome */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Seleção de Sexo */}
      <Text style={styles.label}>Informe seu Sexo:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sexo}
          onValueChange={setSexo}
          style={styles.picker}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>

      {/* Slider de Limite */}
      <Text style={styles.label}>Escolha seu Limite:</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={1000}
        value={limite}
        onValueChange={setLimite}
        minimumTrackTintColor="#00FF00"
        maximumTrackTintColor="#d3d3d3"
        thumbStyle={{ backgroundColor: '#00FF00' }}
      />
      <Text style={styles.limitValue}>{limite.toFixed(2)} R$</Text>

      {/* Switch de Estado Civil */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Casado</Text>
        <Switch
          value={casado}
          onValueChange={setCasado}
          trackColor={{ false: '#767577', true: '#5e0013ff' }}
          thumbColor={casado ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      {/* Botão Criar Conta */}
      <View style={styles.buttonContainer}>
        <Button
          title="CRIAR CONTA"
          onPress={criarConta}
          color="#007AFF"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 80,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  pickerContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 10,
  },
  limitValue: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
