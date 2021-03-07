import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header"
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

function EditPostPage({list,setList ,handleEdit}){
    let history = useHistory()
    const location = useLocation();
    
    let tempTask = list.filter((item)=>item.id === location.state.id)[0].task; // nullable ป้องกันเวลา Object ส่งมาเป็น Null จะทำให้ไม่พัง
    let tempDate = list.filter((item)=>item.id === location.state.id)[0].date; // nullable ป้องกันเวลา Object ส่งมาเป็น Null จะทำให้ไม่พัง
    
    const [date, setDate] = useState(tempDate)
    const [task, setTask] = useState(tempTask)
   
    // const dateID=() => {let date = new Date()
    // return date.getDay()+"/"+date.getMonth() +"/"+ date.getFullYear();}
    function handleTaskChange(e){
        setTask(e.target.value)
    }
    
    function handleEditForm(e) {
        e.preventDefault();
        list.map((item)=>{ 
            if (item.id === location.state.id) item.task = task
            else if(item.id === location.state.id) item.date = date});
        handleEdit(list)
    
        history.push('/home')
    }
    function handleDateChange(e){
        setDate(e.target.value)
    }
   
    function handleCancel(){
        history.push("/home")
    }
    
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
                 type="text" 
                 name="task" 
                 value={task} 
                 onChange={handleTaskChange}/>
            </div>
            <div>
                <label htmlFor="date">Due Date</label>
            </div>
            <div>
                <input id="date"
                type="date"
                value={date}
                onChange={handleDateChange} ></input>
            </div>
            <div>
                <button type="submit">Edit</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
            </div>
            </div>
            </form>    
            
        </div>
        
    )

}
export default EditPostPage;