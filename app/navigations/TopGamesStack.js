import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopGames from '../screens/TopGames'


const Stack = createStackNavigator()

export default function TopGamesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='top-games'
                component={TopGames}
                options={{ title:'¿Te parece bien este top?'}}
            />
            
        </Stack.Navigator>
    )
}