import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
//import ReactPlayer from 'react-player'  

export default function TopGames(){
    return(
        <ScrollView>
        <View style={styles.viewDark}>
            <Text style={styles.titulo1}>RECIENTES</Text>
            <Text style={styles.texto1}>Halo Infinite</Text>
            <Text style={styles.text2}>Halo Infinite será la primera vez que los jugones de PCs vivan el lanzamiento de un nuevo FPS protagonizado por el mismísimo Jefe Maestro. Un acontecimiento especialmente celebrado por una comunidad muy exigente con los shooters. Sobre todo, con aquellos que le dan un énfasis especial a su multijugador. Y 343 Industries es totalmente consciente de ello.</Text>
            <Image
                style={styles.strech1}
                source={require('../../assets/img/halosword.gif')}
            />
            <Text style={styles.texto3}>Nier:Automata</Text>
            <Text style={styles.text4}>A si es chicos, ya superó el millón de unidades vendidas en todo el mundo</Text>
            <Text style={styles.text5}>Más de un millón de unidades en todo el mundo desde su lanzamiento. Cabe hacer mención de que dicha cifra contempla las ventas físicas y digitales de todas las plataformas.</Text>
            <Image
                style={styles.strech2}
                source={require('../../assets/img/nier.gif')}
            />
            <Text style={styles.texto6}>Grand theft Auto V</Text>
            <Text style={styles.text7}>GTA 5 luce más impresionante que nunca con resolución 8K, ray-tracing y otros muchos mods</Text>
            <Text style={styles.texto8}>La comunidad de PC no deja de mejorar el aspecto gráfico de GTA V, un juego que a pesar de tener ya casi ocho años de vida sigue siendo uno de los más espectaculares.</Text>
            <Image
                style={styles.strech3}
                source={require('../../assets/img/gtavdog.gif')}
            />
            <Text style={styles.texto9}>Resident Evil Village</Text>
            <Text style={styles.text10}>Asi es muchachos ya es el segundo juego más vendido de 2021 en EE.UU y el octavo mundialmente</Text>
            <Text style={styles.text11}>En total, hablamos de una cifra de 4.452 millones de dólares, frente a los 4.343 millones, que dineral.</Text>
            <Image
                style={styles.strech4}
                source={require('../../assets/img/residentVillage.gif')}
            />
        </View>
        </ScrollView>

    )
}
//INTENTO DEL VIDEO
//function TopGamesVid(){
    //return(
        //<div className="TopGamesVid" style={{width:'60%', height:'60%', position:'absolute'}}>
            //<ReactPlayer
                //url='https://www.youtube.com/watch?v=cLRztK1zE6s'
                //width='60%'
                //height='50%'
            //>
        //</div>
    //)
//}

const styles = StyleSheet.create({
    viewDark:{
        flex: 1,
        backgroundColor:'#000000'
    },
    titulo1:{
        color:'#FFB200',
        textAlign:'center',
        fontSize: 25
    },
    texto1:{
        color:'#1477EE',
        fontSize: 20,
        paddingTop: 15,
        textAlign:'center'
    },
    text2:{
        color:'#FFFFFF'
    },
    strech1:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    },
    texto3:{
        color:'#939190',
        fontSize: 20,
        paddingTop: 1,
        textAlign:'center'
    },
    text4:{
        color:'#FFFFFF'
    },
    text5:{
        color:'#B419C6'
    },
    strech2:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    },
    texto6:{
        color:'#ECBD00',
        fontSize: 20,
        paddingTop: 1,
        textAlign:'center'
    },
    text7:{
       color:'#FFFFFF' 
    },
    texto8:{
        color:'#08CB4F'
    },
    strech3:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    },
    texto9:{
        color:'#C87000',
        fontSize: 20,
        paddingTop: 1,
        textAlign:'center'
    },
    text10:{
        color:'#FFFFFF'
    },
    text11:{
        color:'#F32727'
    },
    strech4:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    }
    
})