import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchGames from '../screens/SearchGames/SearchGames'
import AddSearchGames from '../screens/SearchGames/AddSearchGames'
import AddSearchGamesForm from '../screens/SearchGames/AddSearchGamesForm'


const Stack = createStackNavigator()

export default function SearchGamesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='search-games'
                component={SearchGames}
                options={{ title:'RECOMENDACIONES'}}
            />
            <Stack.Screen
                name='AddSearchGames'
                component={AddSearchGames}
                options={{ title:'AddJuego'}}
            />
            
        </Stack.Navigator>
    )
}