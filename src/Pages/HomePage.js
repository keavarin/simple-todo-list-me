import Header from "../components/Header"
import Container from "../components/Container"
import { useState } from "react"



function HomePage({list, setList, handleAdd, handleDelete,handleEdit,handleToSwitch, handleToSearch, ts, setTs}){
 return( 

    <div>
    <Header 
        list={list}
        setList={setList}
        ts={ts}
        setTs={setTs}
        handleAdd={handleAdd}
        handleToSearch={handleToSearch}/>
    <Container
        setList={setList}
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit} 
        handleToSwitch={handleToSwitch}/>
    
    </div>
 )
}
export default HomePage;