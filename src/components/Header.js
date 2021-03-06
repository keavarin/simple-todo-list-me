import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import { useHistory } from "react-router-dom";
function Header(props) {
    let history = useHistory(); 

    const handleAdd = ()=> {
        history.push("/addpost")  
    }
    

    return (

        <nav className="navbar navbar-light bg-info justify-content-between">
            <a className="navbar-brand">To do List</a>
            <form className="form-inline" >
                <input className="form-control" type="text" placeholder="Search"onChange={()=>props.handleToSearch(props.item.task)} />
                <button className="btn btn-success" type="button">Search</button>
                <button className="btn btn-danger" onClick={handleAdd}>Add</button>
            </form>
        </nav>
    )
}

export default Header;