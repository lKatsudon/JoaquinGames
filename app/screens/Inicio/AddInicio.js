import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Loading from '../../components/Loading'//Su archivo loading
import Toast from 'react-native-toast-message'
import AddInicioForm from './AddInicioForm' //su archivo addqueseaform
import {useNavigation} from '@react-navigation/native'


export default function AddInicio(){
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const toastRef = useRef()
    return(
        <View style={styles.ViewBody}>
            <Text style={styles.textGamer}>Expresa Tu Idea Gamer :D</Text>
            <AddInicioForm toastRef={toastRef} setIsLoading={setIsLoading} navigation={navigation}/>
            <Loading isVisible={isLoading} text={'Cargando...'}/>
            <Toast ref={toastRef}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textGamer:{
        textAlign:'center',
        color:'#F0AB00',
        fontWeight:'bold'
   
    },
    ViewBody:{
        backgroundColor:'#53514C'
    }
})