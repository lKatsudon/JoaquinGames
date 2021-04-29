import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'


import TopGames from './TopGamesStack'
import InicioStack from './InicioStack'
import FavoriteGameStack from './FavoriteGameStack'
import SearchGamesStack from './SearchGamesStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Inicio'
                tabBarOptions={{
                    inactiveTintColor: '#000000',
                    activeTintColor: '#FF0000'
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon:({ color }) => screenOptions(route,color)
                })}
            
            >
                <Tab.Screen 
                name='inicio' 
                component={InicioStack}
                options={{title:"INICIO"}}
                />
                <Tab.Screen 
                name='favorite-games' 
                component={FavoriteGameStack}
                options={{title:"JUEGOS FAVORITOS"}}
                />
                <Tab.Screen 
                name='top-games' 
                component={TopGames}
                options={{title:"TOP 5 NOTI-GAMES"}}
                />
                <Tab.Screen 
                name='search-games' 
                component={SearchGamesStack}
                options={{title:"BUSCADOR DE JUEGOS"}}
                />
                <Tab.Screen 
                name='account' 
                component={AccountStack}
                options={{title:"CUENTA"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName

    switch(route.name){
        case 'inicio':
            iconName='google-controller'
            break
        case 'favorite-games':
            iconName='cat'
            break
        case 'top-games':
            iconName='rocket-launch'
            break
        case 'search-games':
            iconName='gamepad'
            break
        case 'account':
            iconName='card-account-details-outline'
            break    
    }
    return(
        <Icon type='material-community' name={iconName} size={22} color={color}/>
    )
}
