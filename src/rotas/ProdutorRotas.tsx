
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Produtor from "../telas/Produtor";
import Home from '../telas/Home';
import Cesta from '../telas/Cesta';

const Stack = createStackNavigator();

export default function ProdutorRotas({ ComponentPrincipal = Home }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={ComponentPrincipal} />
            <Stack.Screen name="ProdutorScreen" component={Produtor} />
            <Stack.Screen name="CestaScreen" component={Cesta} />
        </Stack.Navigator>
    );
}