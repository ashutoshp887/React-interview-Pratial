
/**
 * 
 * Q4. Render list of item 
 */

function Four(){
    const foood =["apple","banana","mango"];
    return(  
    <>
 <ul>
   {foood.map((element,index) => {
       return <li key={index}>{element}</li>
    })} 
 </ul>
    </>
    )

}
export default Four;