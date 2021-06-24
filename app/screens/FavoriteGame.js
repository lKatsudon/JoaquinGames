import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

export default function FavoriteGame(){
    return(
        <ScrollView>
        <View style={styles.viewDark}>
            <Text style={styles.textFav}> Top juegos favoritos</Text>
            <Text style={styles.colorText1}>Top 1</Text>
            <Text style={styles.colorText2}>HALO</Text>
            <Text style={styles.bodyText1}>Halo tiene lugar en el siglo XXVI, período donde el jugador asume el rol del Jefe Maestro, un soldado genéticamente mejorado que es acompañado por Cortana, una inteligencia artificial.</Text>
            <Image
                style={styles.strech1}
                source={require('../../assets/img/HALO.jpg')}
            />
            <Text style={styles.colorText3}> Top 2</Text>
            <Text style={styles.colorText4}>League of legends</Text>
            <Text style={styles.bodyText2}>League of Legends es un juego de estrategia por equipos en el que dos equipos de cinco campeones se enfrentan para ver quién destruye antes la base del otro... ¿Seras una leyenda?</Text>
            <Image
                style={styles.strech2}
                source={require('../../assets/img/lolsito.jpg')}
            />
            <Text style={styles.colorText5}> Top 3</Text>
            <Text style={styles.colorText6}>Genshin Impact</Text>
            <Text style={styles.bodyText3}>Genshin Impact (en chino, 原神) es un juego de acción ARPG de mundo abierto free-to-play con una mecánica de monetización de Gacha para conseguir elementos adicionales como personajes especiales y armas... ¿Te uniras a la aventura?</Text>
            <Image
                style={styles.strech3}
                source={require('../../assets/img/Genshin-Impact.jpg')}
            />
            <Text style={styles.colorText7}> Top 4</Text>
            <Text style={styles.colorText8}>Grand Theft Auto V</Text>
            <Text style={styles.bodyText4}>Se trata de una aventura de acción de mundo abierto con multitud de misiones en la que encarnamos a tres personajes distintos: Trevor, Michael y Franklin. Además, cuenta con GTA Online, el modo multijugador en lína de GTA 5</Text>
            <Image
                style={styles.strech4}
                source={require('../../assets/img/GTAV.jpg')}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textFav:{
        fontWeight:'bold',
        color:'#FFFFFF',
        textAlign:'center',
        fontSize: 30
    },
    viewDark:{
        flex: 1,
        backgroundColor: '#000000'
    },
    colorText1:{
        color:'#FFFFFF',
        fontSize: 25,
        paddingTop: 15,
        textAlign:'center'
    },
    colorText2:{
        color:'#FFFFFF',
        paddingTop: 15,
        fontSize: 20

    },
    bodyText1:{
        color:'#F0AB00',
        
    },
    strech1:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    },
    colorText3:{
        color:'#FFFFFF',
        fontSize: 25,
        paddingTop: 15,
        textAlign:'center'
    },
    colorText4:{
        color:'#FFFFFF',
        paddingTop: 15,
        fontSize: 20
    },
    bodyText2:{
        color:'#F0AB00'
    },
    strech2:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    },
    colorText5:{
        color:'#FFFFFF',
        fontSize: 25,
        paddingTop: 15,
        textAlign:'center'
    },
    colorText6:{
        color:'#FFFFFF',
        paddingTop: 15,
        fontSize: 20
    },
    bodyText3:{
        color:'#F0AB00'
    },
    strech3:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    },
    colorText7:{
        color:'#FFFFFF',
        fontSize: 25,
        paddingTop: 15,
        textAlign:'center'
    },
    colorText8:{
        color:'#FFFFFF',
        paddingTop: 15,
        fontSize: 20
    },
    bodyText4:{
        color:'#F0AB00'
    },
    strech4:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    }
})