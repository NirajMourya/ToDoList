import React from "react";
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function ToDo(props)
{
    const {id,name,completed,deleteTask,toggleTaskCompleted} = props;
   
    return (  
        <div className="todoItem">
        <input id={id} className="c-cb" type="checkbox" defaultChecked={completed} onChange={() => toggleTaskCompleted(id)}/>
            <p className={completed?"todoCompleted":"todoPending"}>
                {name}
            </p>
            <button type="button" className="btn btn-labeled deletebtn" onClick={() => deleteTask(id)}>
            <RiDeleteBin6Line color="rgb(239 68 6)" />
            </button>
    </div>
    );
}