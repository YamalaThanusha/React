// const Child =(props)=>{
//     return(
//         <>
//         <h1>This is Child</h1>
//         <h1>Name:{props.name}</h1>
//         <h1>Phone Number:{props.phoneNumber}</h1>
//         </>
//     )
// }
// export default Child;


// const Child =(props)=>{


//     const{name,myData}=props;
//     console.log(myData);
//     return(
//         <>
//         <h1>This is Child</h1>
//         <h1>Name:{name}</h1>
//         {/* <h2>CAR1:  {myData[0].car1},  {myData[0].color},  {myData[0].cost}</h2>
//         <h2>CAR2:  {myData[1].car2},  {myData[1].color},  {myData[1].cost}</h2>
//         <h2>CAR3:  {myData[2].car3},  {myData[2].color},  {myData[2].cost}</h2> */}
//         {
//             myData.map((item) => {
//                 return <div>
//                     <p>Car:{item.car1}</p>
//                     <p>Color:{item.color}</p>
//                     <p>Cost:{item.cost}</p>

//                 </div>
//             })}
//         </>
//     )
// }
// export default Child;



// const Child =({name})=>{

//     return(
//         <>
//      <h1>Child</h1>
//      <p>name:{name}</p>
//         </>
//     )
// }
// export default Child;



// const Child =({name})=>{

//     return(
//         <>
//      <h1>Child</h1>
//      <p>name:{name}</p>
//         </>
//     )
// }
// export default Child;


// import React from 'react';
// import './Child.css';
// const Child = ({ name, phoneno, sub_acc }) => {
//     // return sub_acc ? (
//     //   <>
//     //     <p>name: {name}</p>
//     //     <p>phoneno: {phoneno}</p>
       
//     //   </>
//     // ) : (
//     //   <div>
//     //     <h1>No</h1>
//     //   </div>
//     // );

//     // return(
//     //     <h1>{sub_acc ? name:"No"}</h1>
//     // )
// return(
//      <>
//     <div className={sub_acc ? "truecls":"falsecls"}>
    
//      {sub_acc&&<h1>{name}</h1>}</div>
//      </>
//     )

//   };
  
//   export default Child;






// const Child = () => {
  
// return(
//     <>
//     <h1>Child</h1>
//     </>
// )
//   }
  
//   export default Child;