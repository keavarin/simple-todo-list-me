
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useHistory} from "react-router-dom"
function Doing({item, handleDelete, index, handleToSwitch}){
let history = useHistory();
   function handleEdit(idToEdit){
      history.push({ pathname:"/editpost",
      state: { id: idToEdit }})
   }
 return(
    <div className="border border-secondary col-sm">
    <div className="border-top">
    <span>{item.id}: {item.task}</span>
    <div>
    <span>{item.date}</span>
    </div>
    </div>
    <button onClick={()=>handleEdit(item.id)}><FontAwesomeIcon icon={faEdit} /></button>
    <button onClick={()=> handleDelete(item.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
    <button onClick={()=> handleToSwitch(item.status='Todo')}>To do</button>
    <button onClick={()=> handleToSwitch(item.status='Done')}>Done</button>
       
   
    </div>
 )
}
export default Doing;