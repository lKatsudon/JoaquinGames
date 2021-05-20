import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Inicio from '../screens/Inicio/Inicio'
import AddInicio from '../screens/Inicio/AddInicio'



const Stack = createStackNavigator()

export default function InicioStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='inicio'
                component={Inicio}
                options={{ title:'BLOG'}}
            />
            <Stack.Screen
                name='AddInicio'
                component={AddInicio}
                options={{ title:'AddAsunto'}}
            />
            
        </Stack.Navigator>
    )
}