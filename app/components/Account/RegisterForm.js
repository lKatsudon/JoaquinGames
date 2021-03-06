import React, {useState} from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validation'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'

export default function RegisterForm(props){
    const { toastRef } = props
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const navigation = useNavigation()

    const onSubmit = () => {
       // console.log(formData)
       // console.log(validateEmail(formData.email))
       if(formData.email.length===0||formData.password.length===0||formData.repeatPassword.length===0){
       console.log('Todos los campos son requeridos carnal')
       toastRef.current.show({
        type: 'error',
        position: 'top',
        text1: 'Vacio',
        text2: 'Porfavor, ingrese todos los campos',
        visibilityTime: 3000,
        
      });
       } else if(!validateEmail(formData.email)){
            console.log('El email no esta correcto manito')
        toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: 'Email incorrecto',
                visibilityTime: 4000,
     });         
       } else if (formData.password	!== formData.repeatPassword){
            console.log('Las contraseñas deben ser iguales dude')
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: 'Las contraseñas no son iguales',
                visibilityTime: 4000,
     });         
       } else if (formData.password.length < 6){
           console.log('La contra debe tener almenos 6 caracteres')
           toastRef.current.show({
            type: 'error',
            position: 'top',
            text1: 'Password incorrecto',
            text2: 'La contraseña debe tener como minimo 6 caracteres',
            visibilityTime: 4000,
 });         
       } else {
           firebase
           .auth()
           .createUserWithEmailAndPassword(formData.email, formData.password)
           .then((Response)=>{
               navigation.navigate('account')
           })
           .catch(()=>{
                toastRef.current.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Cuenta',
                    text2: 'Este correo ya ha sido registrado',
                    visibilityTime: 4000,
                })
            })                  
       }
}

    const onChange = (e, type) => {
       // console.log(type)
       // console.log(e.nativeEvent.text)
       // setFormData({[type]: e.nativeEvent.text })
       setFormData({ ...formData,[type]: e.nativeEvent.text })
    }

    return(
        <View style={styles.formContainer}>
           <Input
                placeholder='Correo electronico'
                placeholderTextColor="#F40000"
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange (e, 'email')}
                rightIcon={<Icon type='material-community' name='at' iconStyle={styles.iconRight}/>}
           />
           <Input
                placeholder='Contraseña'
                placeholderTextColor="#F40000"
                containerStyle={styles.inputForm}
                passwordRules={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e)=>onChange (e, 'password')}
                rightIcon={<Icon 
                    type='material-community' 
                    name={showPassword ? 'eye-off-outline':'eye-outline' }
                    iconStyle={styles.iconRight}
                    onPress={()=> setShowPassword(!showPassword)}
             />}

           />
           <Input
                placeholder='Repetir contraseña'
                placeholderTextColor="#F40000"
                containerStyle={styles.inputForm}
                passwordRules={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange={(e)=>onChange (e, 'repeatPassword')}
                rightIcon={<Icon
                    type='material-community'
                    name={showRepeatPassword ? 'eye-off-outline':'eye-outline' }
                    iconStyle={styles.iconRight}
                    onPress={()=> setShowRepeatPassword(!showRepeatPassword)}
 
            />}

           />
           <Button
                title='UNETE'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
           />
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        password: '',
        repeatPassword: ''
    }
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30
    },
    inputForm:{
        width: '100%',
        marginTop: 20
    },
    btnContainerRegister:{
        marginTop: 20,
        width: '95%'
    },
    btnRegister:{
        backgroundColor: '#000000'
    },
    iconRight:{
        color: '#000000'
    }
})