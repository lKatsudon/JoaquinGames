import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Inicio from '../screens/Inicio'



const Stack = createStackNavigator()

export default function InicioStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='inicio'
                component={Inicio}
                options={{ title:'Inicio'}}
            />
            
        </Stack.Navigator>
    )
}