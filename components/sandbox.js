import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

export default function SandBox()
{
    return(
        <View style={sbstyle.container}>
            <Text style={sbstyle.boxOne}>one</Text>
            <Text style={sbstyle.boxTwo}>two</Text>
            <Text style={sbstyle.boxThree}>three</Text>
            <Text style={sbstyle.boxFour}>four</Text>
        </View>
    );
}

const sbstyle = StyleSheet.create({
    container:{
        //flex:1,
        flexDirection: 'row', //direction of flexing can be row or column
        justifyContent: 'space-between',
        alignItems: 'flex-end',
       // alignContent: 'flex-start',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne:{
        flex:1,
        backgroundColor: 'violet',
        padding:10,
    },
    boxTwo:{
        flex:2,
        backgroundColor: 'gold',
        padding:20,
    },
    boxThree:{
        flex:1,
        backgroundColor: 'coral',
        padding:30,
    },
    boxFour:{
        flex:3,
        backgroundColor: 'skyblue',
        padding:40,
    },
    
});