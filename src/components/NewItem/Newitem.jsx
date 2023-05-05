 import { useEffect, useState } from 'react';
import './Newitem.css'

const PRIORITY =['High','Medium','Low'];

const NewItem =(props)=>{
    const{addItem,editItem,editState}=props ;
    const [priority,setPriority]=useState('');
    const [title,setTitle]=useState('');
    const isEdit =Boolean(editItem.id)
    useEffect(()=>{
        if(isEdit){
            
            setTitle(editItem.title)
            setPriority(editItem.priority)
        }
    },[editItem])

    function handleInput(e){
        setTitle(e.target.value);
    }
    const handleSave=()=>{
        const obj ={
            title,
            priority:priority,
        }
        if(isEdit){
            obj.id=editItem.id
            editState(obj)
        }
        else{
            addItem(obj);
        }
        if(!(obj.title)){
            window.alert("Title not be empty")
        }
        setTitle('');
    }
    const handleClear=()=>{
        setTitle('')
        setPriority('')
    }
    return(

        <div className='new-item-card'>
            <div className=' pointer'><span className='checkbox'/></div>
            <div className='form-container'>
                <input className='inp-under'placeholder='Type Here' value={title}type="text" onChange={handleInput}/>
                
                    <div className='cls-badge'>
                    
                            {PRIORITY.map((p)=>
                                <div key={p}
                                onClick={()=>{setPriority(p)}}
                                className={`badge1 ${p} ${p===priority && 'selected'} `}
                                value={p}>{p}</div>
                            )}
                    </div>
                
               
                    <div className='button-container'>
                        {isEdit ?
                            (<button className='btn-save' onClick={handleSave}>Save</button>)
                            :(<button className='btn-save' onClick={handleSave}>Add</button>)
                        }
                            <button className='btn-clear' onClick={handleClear}> Clear</button>
                        
                    </div>
                
            </div>
            
            
        </div>
    )
}

export default NewItem;