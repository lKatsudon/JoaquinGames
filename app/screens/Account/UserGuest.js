import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export default function UserGuest(){
    const navigation = useNavigation()
   
    

    return(
        <ScrollView style={styles.container}>
            <Image
                style={styles.strech}
                source={require('../../../assets/img/bowe2.png')}
            />
            <Text style={styles.title}> Ingresa a tu perfil </Text>
            <Text style={styles.description}>
                THIS PLACE IS ONLY FOR GAMERS, IF YOU'RE NOT A GAMER BRUH ITS FINE, JUST ENJOY :D
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    title='Ver tu perfil'
                    buttonStyle={styles.buttonStyle}
                    containerStyle={styles.btnContainer}
                    onPress={()=>navigation.navigate('login')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10
    },
    strech:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    },
    title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom:10,
        textAlign:'center',
        color: '#F40000'
    },
    description:{
        marginBottom: 20,
        textAlign: 'center'
    },
    viewBtn:{
        flex: 1,
        alignItems: 'center'
    },
    buttonStyle:{
        backgroundColor: '#F40000'
    },
    btnContainer:{
        width: '70%'
    }
})