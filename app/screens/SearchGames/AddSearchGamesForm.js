import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Input, Button, Icon, Avatar } from 'react-native-elements'
import Modal from '../../components/Modal'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'
import { map, size } from 'lodash' 
import firebase from 'firebase'
import uuid from 'random-uuid-v4'



export default function AddSearchGames(props){
    const {toastRef, setIsLoading, navigation} = props
    const [nameAsunto, setNameAsunto] = useState(null)
    const [Descripcion, setDescripcion] = useState(null)
    const [Mensaje, setMensaje] = useState(null)
    const [Location, setLocation] = useState(null)
    const [errorVideoJuego, setErrorVideoJuego] = useState(null)
    const [errorAsunto, setErrorAsunto] = useState(null)
    const [errorMensaje, setErrorMensaje] = useState(null)
    const [isVisibleMap, setisVisibleMap] = useState(null)
    const [imageSelected, setImageSelected] = useState([])

    

    const onSubmit = ()=>{
        
        if(!nameAsunto && !Descripcion && !Mensaje){
            setErrorVideoJuego('Videojuego es requerido')
            setErrorAsunto('Descripcion es requerido')
            setErrorMensaje('Mensaje es requerido')
        }else if(!Descripcion && !Mensaje){
            setErrorVideoJuego(null)
            setErrorAsunto('Videojuego es requerido')
            setErrorMensaje('Mensaje es requerido')
        }else if(!nameAsunto && !Mensaje){
            setErrorVideoJuego('Videojuego es requerido')
            setErrorAsunto(null)
            setErrorMensaje('Mensaje es requerido')
        }else if(!Descripcion && !nameAsunto){
            setErrorVideoJuego('Videojuego es requerido')
            setErrorAsunto('Descripcion es requerido')
            setErrorMensaje(null)
        }else if(!nameAsunto){
            setErrorVideoJuego('Videojuego es requerido')
            setErrorAsunto(null)
            setErrorMensaje(null)
        }else if(!Descripcion){
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
            console.log('Nombre del VideoJuego:', nameAsunto)
            console.log('Descripcion:', Descripcion)
            console.log('Contenido del mensaje:', Mensaje)
            const imgurl = []
            map(imageSelected, async(uri) =>{
                console.log('**URI**')
                console.log(uri)
                uploadImage(uri)
            })
            toastRef.current.show({
                type: 'success',
                position: 'top',
                text1: 'Excelente',
                text2: 'Tu Recomendacion se ha agregado',
                visibilityTime: 3000
            })
        }
    }

    const uploadImage = async (uri) => {
        console.log('**URI**')
        console.log(uri)
        const response = await fetch(uri)
        console.log(JSON.stringify(response))
        const blob = await response.blob()
        console.log('**Blob**')
        console.log(JSON.stringify(blob))

        const ref = firebase.storage().ref().child(`Juegos/${uuid()}`)
        return ref.put(blob)
    }
    return(
        <View style={styles.view}>
            <Input
                placeholder='VideoJuego'
                placeholderTextColor="#FFFFFF"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'sony-playstation',
                    color:'#000000'
                }}
                onChange={(e)=>setNameAsunto(e.nativeEvent.text)}
                errorMessage={errorVideoJuego}
            />
            <Input
                placeholder='Descripcion'
                placeholderTextColor="#FFFFFF"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'microsoft-xbox',
                    color:'#000000'
                }}
                onChange={(e)=>setDescripcion(e.nativeEvent.text)}
                errorMessage={errorAsunto}
            />
                <Input
                placeholder='Genero del juego'
                placeholderTextColor="#FFFFFF"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'skull-scan',
                    color:'#000000'
                }}
                onChange={(e)=>setMensaje(e.nativeEvent.text)}
                errorMessage={errorMensaje}
            />
            
            <UploadImage
               toastRef={toastRef}
               imageSelected={imageSelected}
               setImageSelected={setImageSelected}
               />
            <Button
                title= 'AGREGAR'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                
            />
            
        </View>
    )
}

    

function UploadImage({toastRef, imageSelected, setImageSelected}){
   
    const changeAvatar= async()=>{
     const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)
     const resultPermissionsCamera = resultPermissions.permissions.mediaLibrary.status
 
     if(resultPermissionsCamera === 'denied'){
         toastRef.current.show({
             type: 'info',
             position: 'top',
             text1: 'Permissions',
             text2: 'Se necesitan los permisos para entrar a la galeria',
             visibilityTime: 3000
         })
     }else{
         const result = await ImagePicker.launchImageLibraryAsync({
             allowsEditing:true,
             aspect:[4,3]
         })
         console.log(result)
         if (result.cancelled){
             toastRef.current.show({
                 type: 'info',
                 position: 'top',
                 text1: 'Cancelled',
                 text2: 'No elegiste una imagen',
                 visibilityTime: 3000
             })
         } else{
             setImageSelected([...imageSelected, result.uri])
         }
     }
 }
 
     return(
         <ScrollView
             horizontal
             style={styles.viewImage}
         >
            {
                size(imageSelected) < 4 &&(
                 <Icon
                         type="material-community"
                         name="image-multiple"
                         color="#000000"
                         size={40}
                         containerStyle={styles.containerIcon}
                         onPress={ changeAvatar }
 
                     />
                     )
                }
                {
                     map(imageSelected,(imageComponent, index)=>(
                         <Avatar
                             key={index}
                             style={styles.miniatureStyle}
                             source={{uri:imageComponent}}
                             />
                     ))
                }
         </ScrollView>
     )
 }

const styles = StyleSheet.create({
    input:{
        marginBottom:10
    },
    view:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'#1798D4',
        flex: 1
    },
    btnContainer:{
        marginTop:20,
        width:'95%'
        
    },
    btn:{
        backgroundColor: '#000000'
    },
    viewImage:{
        flexDirection: 'row',
        marginHorizontal:20,
        marginTop: 30,
    },
    containerIcon:{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:10,
        height: 70,
        width:70,
        backgroundColor: '#FFFFFF'
    },
    miniatureStyle:{
        width: 70,
        height: 70,
        marginRight: 20
    },
    mapStyle:{
        width: '100%',
        height: 550
    },
    viewBtn:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    viewMapBtnContainerSave:{
        paddingRight: 5
    },
    viewMapBtnSave:{
        backgroundColor:'#000000'
    },
    viewMapBtnContainerCancel:{
        paddingRight: 5
    },
    viewMapBtnCancel:{
        backgroundColor:'#000000'
    }
})