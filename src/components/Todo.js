import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Todo({item, handleDelete, index, handleEdit, handleToSwitch}){

return (

        <div className="border border-secondary col-sm">
       
        <div className="border-top">
        <span>{item.task}</span>
        <div>
            <span>{item.date}</span>
        </div>
        <button onClick={()=> handleEdit(item.id)}><FontAwesomeIcon icon={faEdit} /></button>
        <button onClick={()=> handleDelete(item.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        <button onClick={()=> handleToSwitch(item.status='Done')}>Done</button>
        <button onClick={()=> handleToSwitch(item.status='Doing')}>Doing</button>
        
        </div>
        </div>
        
        
)
}
export default Todo;