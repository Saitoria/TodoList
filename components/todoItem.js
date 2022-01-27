import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons'; //if you put /IOicons then you'll get IO icons

export default function TodoItem({x,pHandler})
{
    return(
        <TouchableOpacity onPress={() => pHandler(x.id)}>
            <View style={a3styles.item}>
            <Icon name="delete" size={17} color="#333"/>
            <Text style={a3styles.text}>{x.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const a3styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row',
    },
    text:{
        marginLeft:10,
    },
});
