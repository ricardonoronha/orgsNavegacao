
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import HomeSvg from "../assets/home.svg";
import CoracaoSvg from "../assets/coracao.svg";

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#2A9F85",
            tabBarInactiveTintColor: "#C7C7C7",
            tabBarIcon: ({ color }) => {
                let Icon = HomeSvg;
                
                if (route.name === "MelhoresProdutores") {
                    Icon = CoracaoSvg;
                }

                return <Icon color={color} />
            }
        })}>
            <Tab.Screen name="Home" component={ProdutorRotas} />
            <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutoresRotas} />
        </Tab.Navigator>
    </NavigationContainer>
}