import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import ConsultaScreen from './src/screens/ConsultaScreen';

// Criando o Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Definindo a tela "Home" */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Definindo a tela "Details" 
        <Stack.Screen name="Details" component={DetailsScreen} />*/}

        {/* Definindo a tela "Cadastro" */}
        <Stack.Screen name="Cadastro" component={CadastroScreen} />

        {/* Definindo a tela "Consulta" */}
        <Stack.Screen name="Consulta" component={ConsultaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}