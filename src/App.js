import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import AddPostPage from "./Pages/AddPostPage"
import EditPostPage from "./Pages/EditPostPage"
import {useState} from 'react';

function App() {
  const date=() => {let date = new Date()
    return date.getDay()+"/"+date.getMonth() +"/"+ date.getFullYear();}
    
  const [list, setList] = useState([
    { id: 1, task: 'Test1', status: "Todo", date: date() }, 
    { id:2, task: 'Test2', status: "Doing", date: date() }, 
    { id:3, task: 'Test3', status: "Done", date: date() }
]);
  const [ts, setTs] =useState('')
const handleDelete = (idToDelete) => {
  setList(list.filter((item, index) => item.id !== idToDelete))
}

const handleAdd = (newItem)=> {
  let newList = [...list, newItem]
  setList(newList)
}
const handleEdit = (taskToEdit) => {
  setList(taskToEdit)
}
const handleToSwitch = (itemToEdit) => {
setList(list.map((item)=> item.status === itemToEdit? {...item,status: itemToEdit}: item))
}
const handleToSearch = (itemToSearch)=>{
  setList(itemToSearch)
}
  
  return (

    <BrowserRouter>
    <Switch> 
    <Route path="/home" component={HomePage} >
      <HomePage list={list} setList={setList} ts={ts} setTs={setTs}
        handleAdd={handleAdd} 
        handleDelete={handleDelete}
        handleEdit={handleEdit} 
        handleToSwitch={handleToSwitch}
        handleToSearch={handleToSearch}/>
    </Route>
   
    <Route path="/addpost" component={AddPostPage} >
      <AddPostPage list={list} setList={setList} handleAdd={handleAdd} /></Route>
    <Route path="/editpost" component={EditPostPage}>
      <EditPostPage list={list} setList={setList} handleEdit={handleEdit}/></Route>  

    </Switch>
  </BrowserRouter>
  );
}

export default App;
