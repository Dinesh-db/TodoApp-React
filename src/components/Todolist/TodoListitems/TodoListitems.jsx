import { useState } from 'react';
import './TodoListitems.css'

const Todolistitem=(props)=>{
    const {item, onDelete ,editItem }=props;
    const {name,email,id}=item;
    const [ischecked,setchecked] =useState(true);

    return(
        <>
        <div className={`item-card ${priority}`}>
            <div className='pointer'>
                {ischecked
                    ?(<span className='checkbox' onClick={()=> setchecked(false)}/>)
                    :( <span className="material-symbols-outlined" onClick={()=> setchecked(true)}>select_check_box</span>)
                }
            </div>
            <div className={`card-title ${!ischecked && 'strike'}`}>
                {name}</div>
            <div className={`badge ${priority}`}>{email}</div>
            <div className='icon'>
                <span className="material-symbols-outlined edit pointer" onClick={()=> editItem(item)}>edit</span>
                <span className="material-symbols-outlined delete pointer" onClick={()=> onDelete(id)}>delete</span>
            </div>
        </div>
        </>
    )
}

export default Todolistitem;