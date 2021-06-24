import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { firebaseApp } from '../../utils/firebase'
import firebase from 'firebase/app'
import { useNavigation} from '@react-navigation/native'

export default function Inicio(){

  const [user, setUser] = useState(null)
  const navigation = useNavigation()

  useEffect(() => {
      firebase.auth().onAuthStateChanged((userInfo)=>{
        setUser(userInfo)
      })  
  }, [])

    return(
        
        <View style={styles.viewBody}>
          <Text style={styles.textBody}>BIENVENIDO A CITO GAMES</Text>
          {user && 
          <Icon
              reverse
              type='material-community'
              name='plus'
              color='#F0AB00'
              containerStyle={styles.btnContainer}
              onPress={()=>navigation.navigate('AddInicio')}
          />
          }
        </View>
            
    )
}

const styles = StyleSheet.create({
  viewBody:{
    flex: 1,
    backgroundColor: '#000000'
  },
  textBody:{
    color:'#FFFFFF',
    fontWeight:'bold',
    textAlign:'center',
    fontSize: 30
  },
  btnContainer:{
    position:'absolute',
    bottom: 10,
    right: 10,
    shadowColor: 'red',
    shadowOffset:{width:2, height:2},
    shadowOpacity: 0.5
  }
})