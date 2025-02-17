// babel directly imports React
import { useState } from "react";
const Counter : React.FC = () => {
  
   // let counter : number  = 15;

    const [counter , setCounter] = useState(15)
  
    const addValue = () => {
       setCounter (counter +1) ;
      console.log("added by one", counter);
    }
     
    const addValue1 = () => {
        setCounter (counter +1) ;
        setCounter (counter +1) ;
        setCounter (counter +1) ;
        // not update to 18 only 16 cause react use only old value until next re- render
       console.log("added by one", counter);
     }
    
     const addValue2 = () => {
        setCounter ((prev : number)=>prev +1) ;
        setCounter ((prev : number)=>prev +1 ) ;
        setCounter ((prev : number)=>prev +1 ) ;
        // not update to 18 only 16 cause react use only old value until next re- render
       console.log("added by one", counter);
     }

    const removeValue = () => {
        if(counter == 0){

        }
        setCounter (counter - 1) ;
       console.log("removed by one", counter);
     }
 
    return (

<>
<h1> Counter Project</h1>
<h2>{counter}</h2>
<button onClick={addValue}> Add Value : {counter}</button>
<button onClick={removeValue}> Remove Value : {counter}</button>
<footer>Footer : {counter}</footer>

</>    
)
}

export default Counter
