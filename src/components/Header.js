import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import { useHistory } from "react-router-dom";
function Header({list, handleToSearch,setTs}) {

    let history = useHistory(); 
    const [text, setText]= useState('');
    const [searchTask, setSearchTask] = useState('')

    const handleAdd = ()=> {
        history.push("/addpost")  
    }
    const handleSearchEvent = (e)=>{
        setSearchTask(e.target.value)
    }

    
    const handleSearch = ()=> {
       let oldList = [...list]
       let  newList = oldList.filter(item => item.task.toLowerCase().includes(searchTask.toLowerCase()));
       //console.log(oldList)
       if(searchTask == ''){
       handleToSearch(oldList)
       }else handleToSearch(newList)
    }
    //console.log(newList)
    // setSearchTask(!searchTask);
    // if(!searchTask) setTs('');
    //     else setTs('')


    return (

        <nav className="navbar navbar-light bg-info justify-content-between">
            <a className="navbar-brand">To do List</a>
            <form className="form-inline" >
                <input className="form-control" 
                type="text" 
                placeholder="Search" 
                value={searchTask}
                onChange={handleSearchEvent}/>
                <button className="btn btn-success" type="button" onClick={handleSearch} > {searchTask? "Search": "Clear Search"}</button>
                <button className="btn btn-danger" onClick={handleAdd}>Add</button>
            </form>
        </nav>
    )
}

export default Header;