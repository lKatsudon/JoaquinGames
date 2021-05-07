import React, {useState} from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validation'

export default function RegisterForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())

    const onSubmit = () => {
       // console.log(formData)
       // console.log(validateEmail(formData.email))
       if(formData.email.length===0||formData.password.length===0||formData.repeatPassword.length===0){
       console.log('Todos los campos son requeridos carnal')
       } else if(!validateEmail(formData.email)){
            console.log('El email no esta correcto manito')
       } else if (formData.password	!== formData.repeatPassword){
            console.log('Las contraseñas deben ser iguales dude')
       } else if (formData.password.length < 6){
           console.log('La contra debe tener almenos 6 caracteres')
       } else {
           console.log('All good ma boy')
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