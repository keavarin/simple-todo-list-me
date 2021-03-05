import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import AddPostPage from "./Pages/AddPostPage"
import {useState} from 'react';

function App() {
  const date=() => {let date = new Date()
    return date.getDay()+"/"+date.getMonth() +"/"+ date.getFullYear();}
    
  

  const [list, setList] = useState([
    { id: 1, task: 'Test1', status: "Todo", date: date() }, 
    { id:2, task: 'Test2', status: "Doing", date: date() }, 
    { id:3, task: 'Test3', status: "Done", date: date() }
]);
//console.log(list.id)

const handleDelete = (idToDelete) => {
  setList(list.filter((item, index) => item.id !== idToDelete))
}

const handleAdd = (newItem)=> {
  let newList = [...list, newItem]
 setList(newList)
}
const handleEdit = (idToEdit) => {
  const textToEdit = prompt('Enter task');
setList(list.map((item, index)=> idToEdit === item.id? {...item, task: textToEdit}: item))
}
const handleToSwitch = (itemToEdit) => {
setList(list.map((item)=> item.status === itemToEdit? {...item,status: itemToEdit}: item))
  
}
  
  return (

    <BrowserRouter>
    <Switch> 
    <Route path="/home" component={HomePage} >
      <HomePage list={list} handleAdd={handleAdd} 
        handleDelete={handleDelete}
        handleEdit={handleEdit} 
        handleToSwitch={handleToSwitch}/>
    </Route>
   
    <Route path="/addpost" component={AddPostPage} >
      <AddPostPage list={list}
      setList={setList} handleAdd={handleAdd} /></Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
