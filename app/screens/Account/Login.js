import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Login(){
    return(
        <ScrollView>
            <Image
                source={require('../../../assets/img/YNEY6.jpg')}
                resizeMode = 'contain'
                style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <Text> Formulario de inicio de sesion </Text>
                <CreateAccount/>
            </View>
            <Divider style = {styles.divider}/>
        </ScrollView>
    )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style={styles.textTegister}> 
            HEY GAMER! ¿Aun no tienes cuenta? {' '}
            <Text
                style = {styles.linkRegister}
                onPress={()=>navigation.navigate('register')}
            >
                Registrate rey 
            </Text>
        
        </Text> 
    )
}

const styles = StyleSheet.create({
    logo:{
        width: '100%',
        height: 400,
        marginTop: 20,      
    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40,
        textAlign: 'center',
        color: '#000000'
        
    },
    textTegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    linkRegister:{
        color: '#F40000',
        fontWeight: 'bold'
    },
    divider:{
        backgroundColor: '#F40000',
        margin: 40,
        height: 5
    }

})