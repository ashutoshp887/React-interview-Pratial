/**
 * Q2. Create increament and Decrement  Counter App
 */

import { useState } from "react"

function Two(){
    const [value,setvalue] = useState(0)
    return(
        <>

       <h4> <button onClick={()=>setvalue(value+1)}>+</button></h4>
        <span>{value}</span>
       <h4> <button onClick={()=>setvalue(value-1)}>-</button></h4>
        </>
    )
}
export default Two