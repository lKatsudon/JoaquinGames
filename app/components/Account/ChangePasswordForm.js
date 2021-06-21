import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import firebase from 'firebase'



export default function ChangePasswordForm(props){
    const {Email, setShowModal, toastRef, setreloadUserInfo} = props 
    const [newPassword, setNewPassword] = useState(null)
    const [passwordAccount, setpasswordAccount] = useState(null)
    const [errorpasswordAccount, setErrorpasswordAccount] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    

    const onSubmit=()=>{
        setError(null)
        if(!newPassword){
            setError('El Password no puede ser vacio chavo ')
        } else if(passwordAccount === newPassword){
            setError('El Password no puede ser identico al actual')
        }else if(newPassword.length < 6){
            setError('El Password es menor a 6 caracteres')
        } else if(!passwordAccount ){
            setErrorpasswordAccount('Ingrese su contraseña actual')
        }  else{
            setIsLoading(true)
            var user = firebase.auth().currentUser;
            var credential=firebase.auth.EmailAuthProvider.credential(
                Email,
                passwordAccount
            );

            // Prompt the user to re-provide their sign-in credentials

            user.reauthenticateWithCredential(credential).then(function() {
                firebase
                .auth()
                .currentUser.updatePassword(newPassword)
                .then(()=>{
                    console.log('Ta weno desde firebase')
                    console.log(newPassword)
                    setIsLoading(false)
                    setreloadUserInfo(true)
                    setShowModal(false)
                })
                .catch(()=>{
                    console.log('Error al actualizar la contraseña')
                    setIsLoading(false) 
                })
            }).catch(function(error) {
                setIsLoading(false)
                setErrorpasswordAccount('El password no es correcto')
                //console.log(Password)
                //console.log(passwordAccount)
            });
            
        }
    }

    return(
        <View style={styles.view}>
            <Input
                placeholder='Cambiar contraseña'
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
                //defaultValue={Password || ''}
                onChange={(e)=>setNewPassword(e.nativeEvent.text)}
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

                //defaultValue={Password || ''}
                onChange={(e)=>setpasswordAccount(e.nativeEvent.text)}
                errorMessage={errorpasswordAccount}
            />
            <Button
                title='Cambiar Password'
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
