import React, { useRef } from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import LoginForm from '../../components/Account/LoginForm'
import Toast from 'react-native-toast-message'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function Login(){
    const toastRef = useRef()
    return(
        <KeyboardAwareScrollView>
            <Image
                source={require('../../../assets/img/morrigan2.gif')}
                resizeMode = 'contain'
                style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <Text style={styles.textForm}> 
                    ¡Hola Gamer! 
                 </Text>
            <View style = {styles.viewForms}>
                <LoginForm toastRef={toastRef}/>
            
            </View>
                <CreateAccount/>
            </View>
            <Divider style = {styles.divider}/>
            <Toast ref={toastRef}/>

        </KeyboardAwareScrollView>
    )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style={styles.textRegister}> 
            HEY GAMER! ¿Aun no tienes cuenta? {' '}
            <Text
                style = {styles.linkRegister}
                onPress={()=>navigation.navigate('register')}
            >
                ¡Registrate!
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
    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold'
    },
    linkRegister:{
        color: '#F40000',
        fontWeight: 'bold'
    },
    divider:{
        backgroundColor: '#F40000',
        margin: 40,
        height: 5
    },
    viewForms:{
        marginRight: 40,
        marginLeft: 40
    },
    textForm:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
        fontSize: 30
    }

})