import React, { useRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import firebase from 'firebase'
import { Button } from 'react-native-elements'
import Toast from 'react-native-toast-message'
import InfoUser from '../../components/Account/InfoUser'


export default function UserLogged(){
    const [userInfo, setUserInfo] = useState(null)
    const toastRef = useRef()
    useEffect(()=> {
        (async()=>{
            const user = await firebase.auth().currentUser
            setUserInfo(user)
        })()
    },[])
    return(
        <ScrollView style={styles.container}>    
            <Image 
                style={styles.strech}
  //              source={require('../../../assets/img/user-gamer.png')}
            
            />
            <View style={styles.viewButton}>
                {userInfo&&<InfoUser userInfo={userInfo} toastRef={toastRef}/>}             
                <Text> Account options...</Text>
            <Text style={styles.textLogout}>
                Hey Gamer...¿Ya te tienes que ir?

            </Text>
            <Button 
                title='Cerrar sesión' 
                buttonStyle={styles.buttonColor}
                onPress={()=>firebase.auth().signOut()}
            />
            
        </View>
        </ScrollView>   
    )
}

const styles = StyleSheet.create({
    buttonColor:{
        backgroundColor: '#000000'
    },
    textLogout:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#F40000'
    },
    viewButton:{
        flex: 1,
        alignItems: 'center'
    },
   
})