import './App.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Notes from './components/notes';
function App() {
  const [text,setText]=useState("")
  const [notes,setNotes]=useState([])
  const [search,setSearch]=useState("")
  const rem=(id)=>{
    let props=[]
    for(let i=0;i<notes.length;i++){
      if(notes[i].id!==id){
        props.push(notes[i])
      }
    }
    setNotes(props)
  }
  function handleClick(){
    setNotes([...notes,{id:nanoid(),text:text}])
    setText("")
  }
  useEffect(()=>{
    const savednotes=JSON.parse(
      localStorage.getItem("react-notes-app-data")
    )
    if(savednotes){
      setNotes(savednotes)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem(
      "react-notes-app-data",
      JSON.stringify(notes)
    );
  },[notes]);


  return (
    <div className='main'>
      <div>
        <input onChange={(e)=>{setSearch(e.target.value)}} value={search} type="text" placeholder='Search Notes' className='search'/>
      </div>
      <div className='addnote-container'>
        <textarea className='input' onChange={(e)=>{setText(e.target.value)}} value={text} type="text" placeholder='Type your notes here...'></textarea>
        <button onClick={()=>{handleClick()}}>Add Notes</button>
      </div>
      <Notes props={ notes.filter((note)=>note.text.toLowerCase().includes(search.toLowerCase())) } remnote={rem}/>
    </div>
  )
}

export default App;
