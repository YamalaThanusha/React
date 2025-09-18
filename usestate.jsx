// import {useState} from 'react';
// const Usestate =()=>{
//     const[count,setCount]=useState(1);

//     return(
//         <>
//         <h1>Value:{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Click</button>
//         </>
//     );
// }
// export default Usestate;


// import {useState} from 'react';
// const Usestate =()=>{
//     const[count,setCount]=useState(0);
//     const counter=()=>{
//         setCount(count+1)
//     }
//     return(
//         <>
//         <h1>Value:{count}</h1>
//         <button onClick={counter}>Click</button>
//         </>
//     );
// }
// export default Usestate;



// import {useState} from 'react';
// const Usestate =()=>{
//     const[count,setCount]=useState(0);
//     const counter=()=>{
//         setCount(count+1)
//     }
//     return(
//         <>
//         <h1>Value:{count}</h1>
//         <button onClick={()=>counter()}>Click</button>
//         </>
//     );
// }
// export default Usestate;




//mini task to generate numbers

// import {useState} from 'react';
// const Usestate =()=>{
//     const[count,setCount]=useState(0);
   
//     const increment = () => {
//         setCount(count + 1);
//       };
    
//       const decrement = () => {
//         if (count - 1 < 0) {
//           alert("Count cannot be negative!");
//         } else {
//           setCount(count - 1);
//         }
//       };
    
//       const reset = () => {
//         setCount(0);
//       };
//     return(
//         <>
//         <h1>Value:{count}</h1>
//         <button onClick={ increment}>INC</button>
//          <button onClick={decrement}>DEC</button>
//          <button onClick={reset}>reset</button>
//         </>
//     );
// }
// export default Usestate;



import { useState } from 'react';

const Usestate = () => {
    const myArr = [
        { id: 1, name: "Thanusha", age: "30" },
        { id: 2, name: "Radha", age: "22" },
        { id: 3, name: "Anitha", age: "21" },
        { id: 4, name: "Usha", age: "20" },
        { id: 5, name: "Anu", age: "18" }
    ];

    const [myData, setMyData] = useState(myArr);

    return (
        <>
            {myData.map((item) => (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                </div>
            ))}
        </>
    );
};

export default Usestate;
