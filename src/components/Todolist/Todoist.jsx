import "./todolist.css";
import Todolistitem from "./TodoListitems/TodoListitems.jsx";
import React, { useState } from "react";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />



const TodoList=(props)=>{
    const {deleteItem,list,editItem}=props;
    return (
    <>{list.map((item,index) =>
    <Todolistitem
                key={index} 
                item={item} 
                index={index}
                editItem={editItem}
                onDelete={()=>deleteItem(item)}
            />)}
        
        </>
    )
}

export default TodoList;
