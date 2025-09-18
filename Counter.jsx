import React,{useState} from "react";
function Counter(){
    const [number,setNumber]=useState(0)
    const add = ()=>{
setNumber(number+1)
    };
     const sub = ()=>{
setNumber(number-1)
    }
    return(
    <div className="Counter">
        <h1>{number}</h1>
        <button onClick={add}>Increase</button>
        <button onClick={sub}>Decrease</button>
    </div>
    );
}
export default Counter;