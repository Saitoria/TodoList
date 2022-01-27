import React, {useState} from 'react';
import {StyleSheet,View,Text,Button, TextInput} from 'react-native';

export default function AddTodo({submitHandler})
{
    const[newTodo,setNewTodo] = useState('');

    const changeHandler = (value) =>
    {
        setNewTodo(value);
    };

    return(
        <View style={a4styles.inputcontainer}>
            <TextInput
            style = {a4styles.input}
                placeholder='new todo...'
                onChangeText = {changeHandler}
            />
            <Button
                onPress={() => submitHandler(newTodo)}
                title = 'add todo'
                color = 'coral'
            />
        </View>
    );
}

const a4styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd',
        height:30,
        color:"#000",
    },
    inputcontainer:{
        height:70,
        width:350,
        alignContent: 'center',
        alignSelf: 'center',
    },
});