import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchGames from '../screens/SearchGames'


const Stack = createStackNavigator()

export default function SearchGamesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='search-games'
                component={SearchGames}
                options={{ title:'BUSCA EL JUEGO QUE GUSTES'}}
            />
            
        </Stack.Navigator>
    )
}