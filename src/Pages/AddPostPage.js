import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header"
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddPostPage({handleAdd, list, setList}){
    let history = useHistory()

   const [task, setTask] = useState('')
   const [date, setDate] = useState('')
    //console.log(handleAdd) 
    //console.log()
    const dateID=() => {let date = new Date()
        return date.getDay()+"/"+date.getMonth() +"/"+ date.getFullYear();}
    
    function handleAddForm(e) {
      e.preventDefault();
      handleAdd({task: task, date : dateID(), status: 'Todo', id: list.[list.length-1].id+1})
     
     history.push('/home')
    }
    function handleTaskChange(e){
        setTask(e.target.value)
    }
    // function handleDateChange(e){
        
    // }
    function handleCancel(){
        history.push("/home")
    }
    return(
        <div>
            <form onSubmit={handleAddForm}>
            <Header/>
            <div className="container-fluid">
                <div className="col justify-content-center">
            <h5>Add List</h5>
            <div>
                <label htmlFor="task">Task</label>
            </div>
            <div>
                <input id="task"
                 type="text" value={list.task} onChange={handleTaskChange}></input>
            </div>
            <div>
                <label htmlFor="date">Due Date</label>
            </div>
            <div>
                {/* <input id="date"
                type="text" value={list.date} onChange={handleDateChange}></input> */}
            </div>
            <div>
                <button >Add</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
            </div>
            </div>
            </form>    
            
        </div>
    )

}
export default AddPostPage;