import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'

export default function Loading(props){
    const { isVisible, text} = props
    return(
        <Overlay
            isVisible={isVisible}
            windowBackGroundColor='rgba(0,0,0,1)'
            overlayBackGroundColor='transparent'
            overlayStyle={styles.overlay}
        >
        <View>
            {<ActivityIndicator size='large' color='#78c4d4'/>}
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
        </Overlay>
    )

}

const styles = StyleSheet.create({
    overlay:{
        height:'auto',
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#b7657b',
        borderWidth: 2,
        borderRadius: 10,

    
    },
    text:{
        color:'#78c4d4',
        textTransform: 'uppercase',
        marginTop: 10,
        //----------//
        fontSize: 30,
        paddingVertical: 10,
        alignSelf: 'center',
        textAlign: 'center',
    }
})