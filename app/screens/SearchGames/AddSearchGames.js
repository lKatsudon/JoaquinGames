import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Loading from '../../components/Loading'
import Toast from 'react-native-toast-message'
import AddSearchGamesForm from './AddSearchGamesForm' 
import {useNavigation} from '@react-navigation/native'


export default function AddSearchGames(){
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const toastRef = useRef()
    return(
        <View style={styles.ViewBody}>
            <Text style={styles.textGamer}>Añade tu recomendacion</Text>
            <AddSearchGamesForm toastRef={toastRef} setIsLoading={setIsLoading} navigation={navigation}/>
            <Loading isVisible={isLoading} text={'Cargando...'}/>
            <Toast ref={toastRef}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textGamer:{
        textAlign:'center',
        color:'#000000',
        fontWeight:'bold',
        fontSize:20
   
    },
    ViewBody:{
        flex: 1,
        backgroundColor:'#2997CD'
    }
})