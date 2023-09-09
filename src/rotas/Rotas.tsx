/*
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../telas/Home";
import MelhoresProdutores from "../telas/MelhoresProdutores";

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutores} />
    </Tab.Navigator>
}

*/

import Home from "../telas/Home";

export default function AppRotas() {
    return <Home />
}