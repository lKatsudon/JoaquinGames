import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Input, Button } from 'react-native-elements'

export default function AddInicioForm(props){
    const {toastRef, setIsLoading, navigation} = props
    const [nameAsunto, setNameAsunto] = useState(null)
    const [Asunto, setAsunto] = useState(null)
    const [Mensaje, setMensaje] = useState(null)
    const [errorVideoJuego, setErrorVideoJuego] = useState(null)
    const [errorAsunto, setErrorAsunto] = useState(null)
    const [errorMensaje, setErrorMensaje] = useState(null)

    const onSubmit = ()=>{
        
        if(!nameAsunto && !Asunto && !Mensaje){
            setErrorVideoJuego('Videojuego es requerido')
            setErrorAsunto('Asunto es requerido')
            setErrorMensaje('Mensaje es requerido')
        }else if(!Asunto && !Mensaje){
            setErrorVideoJuego(null)
            setErrorAsunto('Videojuego es requerido')
            setErrorMensaje('Mensaje es requerido')
        }else if(!nameAsunto && !Mensaje){
            setErrorVideoJuego('Videojuego es requerido')
            setErrorAsunto(null)
            setErrorMensaje('Mensaje es requerido')
        }else if(!Asunto && !nameAsunto){
            setErrorVideoJuego('Videojuego es requerido')
            setErrorAsunto('Asunto es requerido')
            setErrorMensaje(null)
        }else if(!nameAsunto){
            setErrorVideoJuego('Videojuego es requerido')
            setErrorAsunto(null)
            setErrorMensaje(null)
        }else if(!Asunto){
            setErrorVideoJuego(null)
            setErrorAsunto('Videojuego es requerido')
            setErrorMensaje(null)
        }else if(!Mensaje){
            setErrorVideoJuego(null)
            setErrorAsunto(null)
            setErrorMensaje('Mensaje es requerido')
        }else{
            setErrorVideoJuego(null)
            setErrorAsunto(null)
            setErrorMensaje(null)
            console.log('Nombre del VideoJuegoe:', nameAsunto)
            console.log('Nombre de la Asunto:', Asunto)
            console.log('Descripción del producto:', Mensaje)
            toastRef.current.show({
                type: 'success',
                position: 'top',
                text1: 'Excelente',
                text2: 'Tu asunto se ha posteado',
                visibilityTime: 3000
            })
        }
    }
    return(
        <View style={styles.view}>
            <Input
                placeholder='VideoJuego'
                placeholderTextColor="#FFFFFF"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'nintendo-game-boy',
                    color:'#F0AB00'
                }}
                onChange={(e)=>setNameAsunto(e.nativeEvent.text)}
                errorMessage={errorVideoJuego}
            />
            <Input
                placeholder='Asunto'
                placeholderTextColor="#FFFFFF"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'nintendo-game-boy',
                    color:'#F0AB00'
                }}
                onChange={(e)=>setAsunto(e.nativeEvent.text)}
                errorMessage={errorAsunto}
            />
                <Input
                placeholder='Expresa Tu Mensaje'
                placeholderTextColor="#FFFFFF"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'nintendo-game-boy',
                    color:'#F0AB00'
                }}
                onChange={(e)=>setMensaje(e.nativeEvent.text)}
                errorMessage={errorMensaje}
            />
            <Button
                title= 'POSTEAR'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                //loading={isLoading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10
    },
    view:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnContainer:{
        marginTop:20,
        width:'95%'
        
    },
    btn:{
        backgroundColor: '#F0AB00'
    }
})