import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import firebase from 'firebase'



export default function ChangeDisplayNameForm(props){
    const {displayName, setShowModal, toastRef, setreloadUserInfo} = props 
    const [newDisplayName, setNewDisplayName] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit=()=>{
        setError(null)
        if(!newDisplayName){
            setError('El nombre no puede ser vacio chavo')
        } else if(displayName === newDisplayName){
            setError('El nombre no puede ser identico al actual')
        } else{
            setIsLoading(true)
            const update ={
                displayName: newDisplayName
            }
            firebase
                .auth()
                .currentUser.updateProfile(update)
                .then(()=>{
                    console.log('Ta weno desde firebase')
                    setIsLoading(false)
                    setreloadUserInfo(true)
                    setShowModal(false)
                })
                .catch(()=>{
                    console.log('Error al actualizar el nombre')
                    setIsLoading(false) 
                })
        }
    }

    return(
        <View style={styles.view}>
            <Input
                placeholder='Cambiar nombre'
                containerStyle={styles.input}
                rightIcon={{
                    type:'material-community',
                    name:'account-circle',
                    color:'#000000'

                }}
                defaultValue={displayName || ''}
                onChange={(e)=>setNewDisplayName(e.nativeEvent.text)}
                errorMessage={error}
            />
            <Button
                title='Cambiar nombre'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                loading={isLoading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10
    },
    view:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnContainer:{
        marginTop:20,
        width:'95%',
    },
    btn:{
        backgroundColor:'#F0AB00'
    }
})