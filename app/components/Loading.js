import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading(props){
    const { isVisible, text } = props 
    return(
        <Overlay
            isVisible = {isVisible}
            windowBackgroundColor = 'rgba(0, 0, 0, 0.5'
            overlayBackgroundColor = 'transparent'
            overlayStyle = {styles.overlay}
        >
            <View>
                <ActivityIndicator size='large' color='#EEB400'/>
                {text && <Text style={styles.text}>{text} </Text>}
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay:{
        height:100,
        width:200,
        backgroundColor: '#000000',
        borderColor: '#F40000',
        borderWidth: 2,
        borderRadius: 30
    },
    text:{
        color: '#000000',
        textTransform: 'uppercase',
        marginTop: 10

    }
})