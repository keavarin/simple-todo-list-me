import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Todo from "./Todo"
import Doing from "./Doing"
import Done from "./Done"
function Container(props) {
    //console.log(props)
    return (

        <div className="container-fluid">
            <div className="row">
                <div>
                    <h2>To Do</h2>
                    
                    {props.list.filter((item, index)=>
                    item.status === "Todo"
                    ).map((item, index) => (
                    <Todo key ={index} item={item} 
                    index={index}
                    handleDelete={props.handleDelete}
                    handleEdit={props.handleEdit}
                    handleToSwitch={props.handleToSwitch}/>))}
                    
                </div>

                <div>
                    <h2>Doing</h2>
                    {props.list.filter((item, index)=>
                    item.status === "Doing").map((item, index) => (
                    <Doing item={item} 
                    index={index}
                    handleDelete={props.handleDelete}
                    handleEdit={props.handleEdit}
                    handleToSwitch={props.handleToSwitch}/>))}
                </div>

                <div>
                    <h2>Done</h2>
                    {props.list.filter((item, index)=> 
                    item.status === "Done").map((item, index) => (
                    <Done item={item} 
                    index={index}
                    handleDelete={props.handleDelete}
                    handleEdit={props.handleEdit}
                    handleToSwitch={props.handleToSwitch}/>))}
                </div>


            </div>
        </div>




    )

}
export default Container;