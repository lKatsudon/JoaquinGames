import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, ScrollView,  } from 'react-native'
import { Icon, Avatar, ListItem } from 'react-native-elements'
import { firebaseApp } from '../../utils/firebase'
import firebase from 'firebase/app'
import { useNavigation} from '@react-navigation/native'

export default function SearchGames(){

  const [user, setUser] = useState(null)
  const navigation = useNavigation()

  useEffect(() => {
      firebase.auth().onAuthStateChanged((userInfo)=>{
        setUser(userInfo)
      })  
  }, [])
  const list = [
    {
        name: 'Genshin impact',
        avatar_url: 'https://as01.epimg.net/meristation/imagenes/2020/07/27/avances/1595847048_325105_1596873677_portada_normal.jpg',
        subtitle: 'Genshin Impact es un juego de acción ARPG de mundo abierto free-to-play con una mecánica de monetización de Gacha'
    },
    {
        name: 'World of Warcraft',
        avatar_url: 'https://images.mediotiempo.com/NeQpzV-I6cV5p72J7ufWQIGucUE=/958x596/uploads/media/2019/08/27/world-of-warcraft-classic-revivira.jpg',
        subtitle: 'World of Warcraft es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment.' 
    },
    {
        name: 'WARZONE',
        avatar_url: 'https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/AGB_WZ_0309_TOUT.jpg',
        subtitle: 'Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al Battle royale gratuito' 
    },
    {
        name: 'Adventures of Lolo',
        avatar_url: 'https://static.wikia.nocookie.net/videojuego/images/6/6a/Adventures_of_Lolo_GB_-_Portada.jpg/revision/latest?cb=20160317062242',
        subtitle: 'Adventures of Lolo es un videojuego de lógica lanzado en 1989 por HAL Corporation para el Nintendo Entertainment System. '  
    },
    {
        name: 'Destiny 2',
        avatar_url: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0321/HMAFYk89IoEJfV0HKN5MKah3.png',
        subtitle: 'Destiny 2 es un videojuego de disparos en primera persona, desarrollado y publicado por Bungie.'  
    },
    {
        name: 'Halo',
        avatar_url: 'https://cdn.alfabetajuega.com/wp-content/uploads/2020/04/halo-infinite-portada.jpg',
        subtitle: 'Halo es una franquicia de videojuegos de ciencia ficción creada y desarrollada por Bungie Studios hasta Halo: Reach, y gestionada ahora por 343 Industries, propiedad de Microsoft Studios.'   
    }
]
    return(
        <ScrollView>
        <View style={styles.viewBody}>
          <Text style={styles.textBody}>Te recomendamos los siguientes juegos</Text>
          {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{uri: l.avatar_url}} />
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
          {user && 
          <Icon
              reverse
              type='material-community'
              name='gamepad-square'
              color='#000000'
              containerStyle={styles.btnContainer}
              onPress={()=>navigation.navigate('AddSearchGames')}
          />
          }
        </View>
        </ScrollView>    
    )
}

const styles = StyleSheet.create({
  viewBody:{
    flex: 1,
    backgroundColor: '#000000'
  },
  textBody:{
    color:'#E49B08',
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

