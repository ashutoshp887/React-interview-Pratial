/**
 * Q8.) Create todo list with functionalites of add and remove 
 * 
 */

import { useState } from "react";

const Eight =()=>{
    const[input, setinput]=useState("")
    const[todo,settodo] = useState([])
    const add =()=>{
        if(input.trim()!==''){
            settodo([...todo,input]);
            setinput('');
        }

    }
    const remove=(index)=>{
        const update=todo.filter((_,i)=>i!==index)
        console.log(update)
        settodo(update)
    }

    return(
        <div>
        <input type="text" onChange={(e)=>setinput(e.target.value)}/>
        <button onClick={add}>Add</button>
        <ul>
            {todo.map((todo,index)=>(
  <li key={index}>{todo}<button onClick={()=> remove(index)}>remove</button></li>
))}
        </ul>
        </div>
    )
}

export default Eight;