import Header from "../components/Header"
import Container from "../components/Container"
import { useState } from "react"



function HomePage({list, setList, handleAdd, handleDelete,handleEdit,handleToSwitch}){

    
    
      // function runningId(){
      //   return list.id++
      // }
      

 return( 

    <div>
    <Header list={list}
    handleAdd={handleAdd}/>
    <Container
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit} 
        handleToSwitch={handleToSwitch}/>
    
    </div>
 )
}
export default HomePage;