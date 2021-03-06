import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header"
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditPostPage({list,setList ,handleEdit}){
    let history = useHistory()

   const [task, setTask] = useState('')
   const [date, setDate] = useState('')
   
    // const dateID=() => {let date = new Date()
    //     return date.getDay()+"/"+date.getMonth() +"/"+ date.getFullYear();}
    
    function handleEditForm(e) {
      e.preventDefault();
      setTask(list.task)
     
     history.push('/home')
    }
    function handleTaskChange(e){
        setTask(e.target.value)
    }
   
    function handleCancel(){
        history.push("/home")
    }
    console.log(list.task)
   
    return(
        <div>
            <form onSubmit={handleEditForm}>
            <Header/>
            <div className="container-fluid">
                <div className="col justify-content-center">
            <h5>Edit List</h5>
            <div>
                <label htmlFor="task">Task</label>
            </div>
            <div>
                <input id="task"
                 type="text" value={list.task} onChange={handleTaskChange}/>
            </div>
            <div>
                <label htmlFor="date">Due Date</label>
            </div>
            <div>
                <input id="date"
                type="date" ></input>
            </div>
            <div>
                <button >Edit</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
            </div>
            </div>
            </form>    
            
        </div>
        
    )

}
export default EditPostPage;