import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account/Account'
import Login from '../screens/Account/Login'
import Register from '../screens/Account/Register'

const Stack = createStackNavigator()

export default function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='account'
                component={Account}
                options={{ title:'CUENTA'}}
            />
            <Stack.Screen
                name='login'
                component={Login}
                options={{ title:'INICIA SESION BRUH'}}
            />
            <Stack.Screen
                name='register'
                component={Register}
                options={{ title:'REGISTRO'}}
            />
            
        </Stack.Navigator>
    )
}