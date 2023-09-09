
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Produtor from "../telas/Produtor";
import Home from '../telas/Home';

const Stack = createStackNavigator();

export default function ProdutorRotas({ComponentPrincipal = Home}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={ComponentPrincipal} />
            <Stack.Screen name="ProdutorScreen" component={Produtor} />
        </Stack.Navigator>
    );
}