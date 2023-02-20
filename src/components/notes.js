import Note from "./note"
const Notes=({props,remnote})=>{
    
    return(
        <div>
            {props.map((note)=>(<Note id={note.id} text={note.text} removenote={remnote}/>))}
        </div>
    )
}
export default Notes