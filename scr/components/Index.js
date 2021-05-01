/* eslint-disable prettier/prettier */

//imports padrão do sistema
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './principal';
import Welcome from './teladelogi';
import redacoes from './redacoes';

//function para navegação entre telas
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Welcome} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Redações" component={redacoes} />
    </Stack.Navigator>
  );
}

//imports padrão do sistema

//export o component
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

