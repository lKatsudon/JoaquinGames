import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import firebase from 'firebase'
import { validateEmail } from '../../utils/validation'



export default function ChangeEmailForm(props){
    const {Email, setShowModal, toastRef, setreloadUserInfo} = props 
    const [newEmail, setNewEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    

    const onSubmit=()=>{
        setError(null)
        if(!newEmail){
            setError('El Email no puede ser vacio chavo ')
        } else if(Email === newEmail){
            setError('El Email no puede ser identico al actual')
        }else if(!validateEmail(newEmail)){
            setError('El Email no es valido')
        } else if(!password ){
            setErrorPassword('El Password no puede estar vacio')
        }  else{
            setIsLoading(true)
            var user = firebase.auth().currentUser;
            var credential=firebase.auth.EmailAuthProvider.credential(
                Email,
                password
            );

            // Prompt the user to re-provide their sign-in credentials

            user.reauthenticateWithCredential(credential).then(function() {
                firebase
                .auth()
                .currentUser.updateEmail(newEmail)
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
            }).catch(function(error) {
                setIsLoading(false)
                setErrorPassword('El password no es correcto')
                //console.log(Email)
                //console.log(password)
            });
            
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
                defaultValue={Email || ''}
                onChange={(e)=>setNewEmail(e.nativeEvent.text)}
                errorMessage={error}
            />

            <Input
                placeholder='Contraseña'
                containerStyle={styles.input}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon 
                        type='material-community' 
                        name={showPassword ? 'eye-off-outline':'eye-outline' }
                        iconStyle={styles.iconRight}
                        onPress={()=> setShowPassword(!showPassword)}
                    />}
                //defaultValue={Email || ''}
                onChange={(e)=>setPassword(e.nativeEvent.text)}
                errorMessage={errorPassword}
            />
            <Button
                title='Cambiar Email'
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
    },
    iconRight:{
        color: '#000000'
    }
})
