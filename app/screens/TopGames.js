import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function TopGames(){
    return(
        <View style={styles.viewDark}>
            <Text style={styles.titulo1}>RECIENTES</Text>
            <Text style={styles.texto1}>Halo Infinite</Text>
            <Text style={styles.text2}> Una triple responsabilidad que llega de la mano de otra no menos importante, Halo Infinite será la primera vez que los jugones de PCs vivan el lanzamiento de un nuevo FPS protagonizado por el mismísimo Jefe Maestro. Un acontecimiento especialmente celebrado por una comunidad muy exigente con los shooters. Sobre todo, con aquellos que le dan un énfasis especial a su multijugador. Y 343 Industries es totalmente consciente de ello.</Text>
    
        </View>
    )
}

const styles = StyleSheet.create({
    viewDark:{
        flex: 1,
        backgroundColor:'#000000'
    },
    titulo1:{
        color:'#FFFFFF',
        textAlign:'center',
        fontSize: 25
    },
    texto1:{
        color:'#1477EE',
        fontSize: 20,
        paddingTop: 15
    },
    text2:{
        color:'#F0AB00'
    }
})