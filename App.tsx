import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import useProdutores from './src/hooks/useProdutores';

import Home from './src/telas/Home';
import Cesta from './src/telas/Cesta';

import { NavigationContainer } from '@react-navigation/native';
import AppRotas from './src/rotas/Rotas';

export default function App() {
  const produtores = useProdutores(false);

  return <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
  </NavigationContainer>

}