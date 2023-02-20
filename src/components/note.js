import {MdDeleteForever} from "react-icons/md"
import "../css/note.css"
const Note=({id,text,removenote})=>{
    function del(){
        removenote(id)
    }
    return(
        <div className="note-container">
            <div className="note-text">{text}</div>
            <div className="trash-can">
                <MdDeleteForever onClick={()=>{del()}} size="1.3em"/>
            </div>
        </div>
    )
}
export default Note