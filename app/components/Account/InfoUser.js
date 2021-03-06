import React, {useState} from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {Avatar} from 'react-native-elements'
import firebase from 'firebase'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import AccountOptions from '../Account/AccountOptions'
import Loading from '../../components/Loading'


export default function InfoUser(props){
   // const {userInfo} = props
   // const {photoURL, displayName, email} = userInfo
    const {userInfo:{uid, photoURL, displayName, email},userInfo, toastRef, setreloadUserInfo} = props
    const [isLoading, setIsLoading] = useState(false)
    console.log(uid)

    const changeAvatar= async()=>{
        
        const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        console.log(resultPermissions.permissions.mediaLibrary)
        const resultPermissionsCamera = resultPermissions.permissions.mediaLibrary.status
        
        if (resultPermissionsCamera ==='denied'){
            toastRef.current.show({
                type: 'info',
                position: 'top',
                text1: 'permissions',
                text2: 'Es necesario aceptar los permisos de la galeria',
                visibilityTime: 3000,
            });
        } else{
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing:true,
                aspect:[4,3]
            })
            console.log(result)
            if (result.cancelled){
                toastRef.current.show({
                    type: 'info',
                    position: 'top',
                    text1: 'Cancelado',
                    text2: 'No elegiste un Avatar',
                    visibilityTime: 3000,
                }); 
            } else{
                setIsLoading(true)
                uploadImage(result.uri).then(()=>{
                    console.log('imagen subida a firebase')
                    updatePhotoUrl()
                    setIsLoading(false)
                } ).catch(()=>{
                     toastRef.current.show({
                        type: 'info',
                        position: 'top',
                        text1: 'Firebase error',
                        text2: 'Error al actualizar el Avatar',
                        visibilityTime: 3000,
                    }); 
                })
            }
        }

    }

    const uploadImage = async (uri) => {
        console.log('*****URI*****')
        console.log(uri)
        const reponse = await fetch(uri)
        console.log(JSON.stringify(reponse))
        const blob = await reponse.blob()
        console.log('*********')
        console.log(JSON.stringify(blob))
        const ref = firebase.storage().ref().child(`avatar/${uid}`)
        return ref.put(blob)
    }
    const updatePhotoUrl = () => {
        firebase
        .storage()
        .ref(`avatar/${uid}`)
        .getDownloadURL()
        .then(async(reponse)=>{
            console.log(reponse)
            const update ={
                photoURL: reponse
            }
            await firebase.auth().currentUser.updateProfile(update)
            console.log('Imagen actualizada')
            setreloadUserInfo(true)
        })
    }

    return(
        <View>
            <View style={styles.ViewUserInfo}>
                <Avatar 
                    title= 'ICR'
                    rounded
                    size= 'large'
                    onPress={changeAvatar}
                    containerStyle={styles.userInfoAvatar}
                    source={
                        photoURL ? {uri:photoURL} : require('../../../assets/img/user-gamer.png')
                    }
                />
                <View>
                    <Text style={styles.displayName}>
                        {displayName ? displayName : 'Invitado'}
                    </Text>
                    <Text style={styles.displayEmail}>{email ? email : 'Entrada a traves de otra plataforma'}</Text>
                </View>
                
            </View>
            <AccountOptions userInfo={userInfo} setreloadUserInfo={setreloadUserInfo}/>
            <Loading isVisible={isLoading} text={'Carganding...'}/>
        </View>
    
    )
}
const styles = StyleSheet.create({
    ViewUserInfo:{
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'#F0AB00',
        paddingTop: 30,
        paddingBottom: 50
    },
    userInfoAvatar:{
        marginTop: 20,
        backgroundColor: '#F40000'
    },
    displayName:{
        fontWeight: 'bold',
        paddingBottom: 5
    },
    displayEmail:{
        fontWeight: 'bold',
        paddingBottom: 5
    }
})