/**
 * Q3.Show user input
 */

import { useState } from "react";
function Three(){
    const[input,setinput]= useState()
    return(
        <>
        <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
        <h4>Here your value : {input}</h4>
        </>
    )
}
export default Three;