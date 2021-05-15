import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import {ListItem} from 'react-native-elements'  
import { Icon } from 'react-native-elements/dist/icons/Icon'

export default function AccountOptions(props){
    const {userInfo, toastRef} = props 
    const selectedComponent = (key) =>{
        console.log('click')
        console.log(key)
    }
    const menuOptions = generateOptions(selectedComponent)

    return(
        <View>
            {menuOptions.map((menu, index)=>(
                <ListItem key={index} bottomDivider onPress={menu.onPress}>
                    <Icon name = {menu.iconNameLeft}/>
                    <ListItem.Content>
                        <ListItem.Title>{menu.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            ))}
        </View>
    )
}

function generateOptions(selectedComponent){
    return[
        {
            title: 'Cambiar nombre',
            iconNameLeft: "account-box",
            onPress: () => selectedComponent('Nombre Del Gamer')
        },
        {
            title: 'Cambiar email',
            iconNameLeft: "account-box",
            onPress: () => selectedComponent('Email Del Gamer')
        },

        {
            title: 'Cambiar contraseña',
            iconNameLeft: "account-box",
            onPress: () => selectedComponent('Contraseña Del Gamer')
        }
    ]
}

const styles = StyleSheet.create({

})



