/**
 * Q5.Toggle switch change colour
 */

import { useState } from "react";

function Five(){
    const[istoggle,settoggle]=useState(false)
const handleevent=()=>{
    settoggle(!istoggle)
    
}
    return(
    <>
     <div style={{backgroundColor: istoggle ? 'green' : 'orange',
   height:'800px' }}>
<lable>
    <input type="checkbox" onChange={handleevent}/>
{istoggle?'on':'off'}

</lable>
</div>
    </>
    )
}
export default Five;