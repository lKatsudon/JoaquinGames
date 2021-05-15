import React, { useRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
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
        <ScrollView>    
            
            <View style={styles.viewButton}>
                {userInfo&&<InfoUser userInfo={userInfo} toastRef={toastRef}/>}             
            </View>
            <View style={styles.viewButton}>    
            <Button 
                title='Cerrar sesión' 
                buttonStyle={styles.buttonColor}
                containerStyle={styles.container}
                onPress={()=>firebase.auth().signOut()}
            />
            
            </View>
            <Toast ref={toastRef}/>
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
        alignItems: 'center',
        marginBottom: 20
    },
    container:{
        paddingTop:30,
        marginTop: 20,
        width: '63%'

    }
   
})