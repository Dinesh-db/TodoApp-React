
import './App.css'
//import todolist from "./components/Todolist";
import React, { useEffect } from 'react'
import TodoList from './components/Todolist/Todoist'
import NewItem from './components/NewItem/Newitem'
import { useState } from 'react'
import { nanoid } from 'nanoid'
const DEFAULT_LIST=[
  {
      title:"Study JS",
      priority:"High",
      id:nanoid()
  },
  {
      title:"Study CSS",
      priority:"Medium",
      id:nanoid()
  },
  {
      title:"Study Low",
      priority:"Low",
      id:nanoid()
  },
  {
      title:"Study Low",
      priority:"Low",
      id:nanoid()
  },

]

function App() {
  
  const [edit,seteditItem]=useState('')
  
  const deleteItem=(item)=>{
      fetch(`http://localhost:5000/delete`,{
        method:"DELETE",
            headers: {
              'Accept':"application,plain/text", 
              'Content-Type': 'application/json' },
            body:JSON.stringify(item)
      }).then(res=>res.json())
      .then((res)=>{const filterList=list.filter((item,_)=> item._id!==res._id)
        setList([...filterList])}
      )
    };

    useEffect(()=>{
      fetch('http://localhost:5000')
        .then(res => {
          console.log('testtttttt ')
          return res.json()})
        .then((res)=>{setList([...res])})
      },[])

    const [list,setList]=useState([]);
    
    const addItem =(item)=>{
      
        fetch('http://localhost:5000/save',{
          method:"POST",
          headers: {
            'Accept':"application,plain/text", 
            'Content-Type': 'application/json' },
          body:JSON.stringify(item)
        }).then(()=>{setList((prev)=>[item,...prev])});
    }
    const editItem=(item)=>{
      seteditItem(item)
    }

    const editState=(updateditem)=>{
      const updatedlist=list.map((item)=>{
        if(item.id===updateditem.id){
          return updateditem
        }
        else{
          return item
        }
      })
      setList([...updatedlist])

    }
  return (
    
    <div className='app'>
      <div className='header'>
        <h1>Todoapp</h1>
      </div>
      <NewItem addItem={addItem} item={editItem.item} editItem={edit} editState={editState}list={list}/>
      <TodoList list={list} deleteItem={deleteItem} editItem={editItem}/>
    
    </div>
  )
}

export default App
