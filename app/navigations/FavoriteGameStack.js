import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteGame from '../screens/FavoriteGame'


const Stack = createStackNavigator()

export default function FavoriteGameStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='favorite-game'
                component={FavoriteGame}
                options={{ title:'FAVORITOS'}}
            />
            
        </Stack.Navigator>
    )
}