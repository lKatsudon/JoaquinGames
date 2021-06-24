import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Input, Button, Icon, Avatar } from 'react-native-elements'
import Modal from '../../components/Modal'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'
import { map, size } from 'lodash' 
import MapView from 'react-native-maps'


export default function AddInicioForm(props){
    const {toastRef, setIsLoading, navigation} = props
    const [nameAsunto, setNameAsunto] = useState(null)
    const [Asunto, setAsunto] = useState(null)
    const [Mensaje, setMensaje] = useState(null)
    const [Location, setLocation] = useState(null)
    const [errorVideoJuego, setErrorVideoJuego] = useState(null)
    const [errorAsunto, setErrorAsunto] = useState(null)
    const [errorMensaje, setErrorMensaje] = useState(null)
    const [isVisibleMap, setisVisibleMap] = useState(null)
    const [imageSelected, setImageSelected] = useState([])
    const [locationComponent, setLocationComponent] = useState(null)


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
            console.log('Nombre del VideoJuego:', nameAsunto)
            console.log('Tema del Asunto:', Asunto)
            console.log('Contenido del mensaje:', Mensaje)
            console.log('Localizacion:', Location)
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
                    name:'triforce',
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
                    name:'message',
                    color:'#F0AB00'
                }}
                onChange={(e)=>setMensaje(e.nativeEvent.text)}
                errorMessage={errorMensaje}
            />
            <Input
                placeholder='Ubicacion'
                placeholderTextColor="#FFFFFF"
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'map-marker-radius',
                    color:'#F0AB00',
                    onPress:()=> setisVisibleMap(true)
                }}
                onChange={(e)=>setLocation(e.nativeEvent.text)}
            
            />
            <UploadImage
               toastRef={toastRef}
               imageSelected={imageSelected}
               setImageSelected={setImageSelected}
               />
            <Button
                title= 'POSTEAR'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                
            />
            <Maps isVisibleMap={isVisibleMap} setisVisibleMap={setisVisibleMap} setLocationComponent={setLocationComponent}>
                    <Text>Cha</Text>
                </Maps>
        </View>
    )
}

function Maps(props){
    const {isVisibleMap, setisVisibleMap, setLocationComponent} = props
    const [location, setLocation] = useState(null)

    useEffect(() => {
        (async()=>{
            const resultPermissions = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
            console.log(resultPermissions)
            const statusPermissions = resultPermissions.permissions.locationForeground.status
            if(!statusPermissions==='granted'){
                toastRef.current.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Permissions',
                    text2: 'No se puede sin permisos compa',

                })
                 
            }else {
                const locate = await Location.getCurrentPositionAsync({})
                console.log(locate)
                setLocation({
                    latitude: locate.coords.latitude,
                    longitude: locate.coords.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001
                })
            }
        })()
    }, [])

    const confirmLocation=()=>{
        setLocation(location)
        setisVisibleMap(false)
        console.log('---------------')
        console.log(location)
    }

    return(
        <Modal isVisible={isVisibleMap} setIsVisible={setisVisibleMap}>
            <View>
                {location&&
                    <MapView
                    style={styles.mapStyle}
                    initialRegion={location}
                    showsUserLocation={true}
                    onRegionChange={(region)=>setLocation(region)}
                    >
                    <MapView.Marker
                        coordinate={{
                            latitude:location.latitude,
                            longitude:location.longitude
                        }}
                        draggable
                    />
                    </MapView>}
                    <View style={styles.viewBtn}>
                        <Button
                            title='Guardar Ubicación'
                            containerStyle={styles.viewMapBtnContainerSave}
                            buttonStyle={styles.viewMapBtnSave}
                            onPress={confirmLocation}
                        />
                        <Button
                            title='Cancelar Ubicación'
                            containerStyle={styles.viewMapBtnContainerCancel}
                            buttonStyle={styles.viewMapBtnCancel}
                            onPress={()=>setisVisibleMap(false)}
                        />
                    </View>
            </View>
        </Modal>
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
        paddingBottom: 10
    },
    btnContainer:{
        marginTop:20,
        width:'95%'
        
    },
    btn:{
        backgroundColor: '#F0AB00'
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
        backgroundColor: '#F0AB00'
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