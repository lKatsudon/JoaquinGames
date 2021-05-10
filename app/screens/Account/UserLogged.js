import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import firebase from 'firebase'
import { Button } from 'react-native-elements'


export default function UserLogged(){
    return(
        <ScrollView style={styles.container}>    
            <Image 
                style={styles.strech}
                source={require('../../../assets/img/ken.gif')}
            
            />
            <View style={styles.viewButton}>
            <Text style={styles.textLogout}>
                ¡NO TE VAYAS POFABOH!

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
    strech:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    }
})