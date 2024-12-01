/**
 * Q7. counter
 */



import { useEffect, useState } from "react"

function Seven(){
    const[time,settime]=useState(6)
    useEffect(()=>{
        if(time>0){
            const timer = setTimeout(() => settime(time-1),1000);
           return ()=> clearTimeout(timer)
        }
    },[time])
    return(
        <>
        <div>A timer {time}</div>
        </>
    )
}
export default Seven