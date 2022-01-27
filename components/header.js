import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

export default function header()
{
    return(
    <View style={a2styles.header}>
        <Text style={a2styles.title}>My Todos</Text>
    </View>
    );
} 

const a2styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor: 'coral',
        alignContent: 'center',
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});