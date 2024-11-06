import React from "react";
import {NavigationContainer}from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const Stacktack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stacktack.Navigator>
                <Stacktack.Screen
                 name="Home"
                 component= {Home}
                 option= {{ headerShown: false}}
                />
                <Stacktack.Screen
                 name="Detail"
                 component= {Detail}
                /> 
            </Stacktack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
