import React, { useState } from 'react';
import {StyleSheet,View,Text, FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/header';
import Todoitem from './components/todoItem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandbox';


function App()
{
  const [todolist,setTodolist] = useState([
    {text:'Eat lunch',id:1},
    {text:'Do react native',id:2},
    {text:'Do Unity',id:3},
    {text:'Gametime showdown',id:4},
    {text:'Get a goodnight sleep',id:5},
]);

 const pressHandler = (key) => {
    setTodolist((previousTodos) => {
      return(
      previousTodos.filter(i => i.id != key)
      );
    })
 };

 const submitHandler = (val) => {
  if(val.length > 3)
  {
    setTodolist((previousTodos) => {
      return[
        {text: val, id: Math.random()},
        ...previousTodos //spread operator
      ];
    });
  }
  else{
    Alert.alert('OOPS!','Todos must be over 3 letters long',[
      {text:'understood',onPress: () => console.log('alert closed')}
    ]) //method have following props ,title,MESSAGE,array which contains stuff such as buttons in the alert info
  }
 };

const rItem = ({item}) => {
  return(
      <Todoitem x={item} pHandler={pressHandler}/> //show to the other component the the variable x it takes is the object item
  );
};
  return(

    //<SandBox/>

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log("dismissed keyboard")}}>
    <View style={a1style.container}>
    {/*Header*/}
    <Header/>

     
      
      
      {/*Body*/}
      <View style={a1style.content}>
       {/*Form of addingTodo*/}
      <AddTodo submitHandler={submitHandler}/>
      
        <View style={a1style.list}>
          <FlatList
            data = {todolist}
            renderItem = {rItem}
            keyExtractor = {item => item.id}
          />
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>

    );
}

const a1style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  content:{
    padding:40,
    //backgroundColor: 'pink',
    flex:1,
  },
  list:{
    flex:1,
    marginTop: 20,
  },
});

export default App;