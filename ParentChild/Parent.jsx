// import Child from "./Child";
// const Parent =()=>{
//     return(
//         <>
//         <h1>Parent</h1>
//          <Child name="Thanusha" phoneNumber="123456789"/>
//         </>
//     )
// }
// export default Parent;


// import Child from "./Child";
// const Parent =()=>{
//     const myname="Thanusha";
//     const myData=[{car1:"BMW",
//                    cost:"1,245,789",
//                    color:"red"},
//                    {car1:"Audi",
//                    cost:"1,245,000",
//                    color:"black"},
//                    {car1:"Benz",
//                     cost:"1,245,060",
//                     color:"White"},]
//     return(
//         <>
//         <h1>Parent</h1>
//          <Child name={myname} myData={myData}/>
//         </>
//     )
// }
// export default Parent;



// import Child from "./Child";
// const Parent =()=>{
//     return(
//         <>
//         <h1>Parent</h1>
//          <Child name="Thanusha"/>
//         </>
//     )
// }
// export default Parent;


// import Child from "./Child";
// const Parent =()=>{
//     console.log("Without parameters");
//     return(
//         <>
//         <h1>Parent</h1>
//          <Child name={Parent}/>
//         </>
//     )
// }
// export default Parent;

import React from 'react';
import Child from "./Child";
const Parent =()=>{
    return(
        <>
        {/* <h1>Parent</h1> */}
         <Child name="Thanusha" phoneno="1234" sub_acc={true}/>
         <Child name="Anitha" phoneno="3456" sub_acc={true}/>
         <Child name="Radha" phoneno="7890" sub_acc={true}/>
         <Child name="Anu" phoneno="64367" sub_acc={true}/>
         <Child name="usha" phoneno="2346789" sub_acc={false}/>
        </>
    )
}
export default Parent;



// import Child from "./Child";
// const Parent =()=>{
//     function myfun(){
//     console.log("Without passing any parameters")}
//     return(
//         <>
//         <h1 onClick={()=>myfun()}>Parent</h1>
//         <Child/>
//         </>
//     )
// }
// export default Parent;