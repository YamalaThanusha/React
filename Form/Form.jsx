
// import React from 'react';
// import styles from "./Form.Module.css";
// import { useRef, useState } from 'react';

// const Form =()=>{
//     const[Data,setData]=useState({
//         FirstName:"",
//         LastName:"",
//         DateofBirth:"",
//         MobileNumber:"",
//         Email:"",
//         Password:"",
//         image:""
//     })
    
//     const ImageRef = useRef(null)

//     const handleImage=()=>{
//       ImageRef.current.click();
//     }
  
//     const handleSubmit=()=>{
//       const EmailRegex = /[a-zA-Z\d]+@[a-zA-Z]+\.[a-z]/
//       const regex = /[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]/
//       const regex1 = /[a-z]/
//       const regex2 = /[A-Z]/
//       const regex3 = /[\d]/  //[0-9]
//       if(Data.firstname===""){
//         alert("Enter FirstName")
//       }else if(Data.lastname===""){
//         alert("Enter LastName")
//       }else if(Data.email){
//          alert("Enter Valid Email")
//        }else if(Data.mobile===""){
//          alert("Enter Mobile")
//        }else if(Data.mobile.length!=10){
//          alert("enter valid mobile number")
//        }
//        else if(Data.dob===""){
//          alert("Enter Date Of Birth")
//        }else if(Data.password===""){
//          alert("Enter Password")
//        }else if(Data.password.length<8){
//          alert("Password Must be 8 character length")
//        }else if(!regex1.test(Data.password)){
//          alert("Password Must contain one lowercase letter")
//        }else if(!regex2.test(Data.password)){
//          alert("Password Must contain one uppercase letter")
//       }else if(!regex3.test(Data.password)){
//         alert("Password Must contain one number")
//       }else if(!regex.test(Data.password)){
//         alert("Password Must contain one special character")
//       }else{
//         alert("form subitted sucessfully")
//         console.log(Data)
//       }
//     }
// }
//     return(
//         <>
//         <div className={styles.main1}>
//         <div className='continer'>
//       {Data.image ? <img onClick={handleImage} src={URL.createObjectURL(Data.image)}/> : <img onClick={handleImage} src='https://gatax.in/_next/image?url=https%3A%2F%2Fapi.gatax.in%2Fpublic%2Fimages%2Fnull2.png&w=640&q=75'/>}
//       <input className='imageinput' ref={ImageRef} type="file" accept='.jpg, .png, .jpeg, .webp' onChange={(e)=>{setData({...Data,image:e.target.files[0]})}}/>

//         <input  className={styles.firstname} type="text" placeholder="FirstName" onChange={(e)=>{setData({...Data,FirstName:e.target.value})}}/>
//         <input className={styles.lastname} type="text" placeholder="LastName" onChange={(e)=>{setData({...Data,FirstName:e.target.value})}}/>
//         <input className={styles.dateofbirth} type="date" placeholder="Date of Birth" onChange={(e)=>{setData({...Data,FirstName:e.target.value})}}/>
//         <input className={styles.mobile} type="number" placeholder="MobileNumber" onChange={(e)=>{setData({...Data,FirstName:e.target.value})}}/>
//         <input className={styles.email} type="email" placeholder="Email" onChange={(e)=>{setData({...Data,FirstName:e.target.value})}}/>
//         <input  className={styles.password} type="password" placeholder="Password" onChange={(e)=>{setData({...Data,FirstName:e.target.value})}}/>
//         <button className={styles.submit} onClick={()=>{myfun()}}>Submit</button>
//         </div>
//         </>
//     )
    
// }
// export default Form;



// import { useState } from "react";
//  import axios from "axios";
//   const Form = () =>
//      { 
//       const [userName, setUserName] = useState(""); 
//       const [userpassword, setuserPassword] = useState(""); 
//       const userNamefun = (event) => { setUserName(event.target.value);

//        }
//         const userPasswordfun = (event )=> { setuserPassword(event.target.value);

//          } 
//          const submitData = () => { 
//           const myuserdata = { userName: userName, userPassword: userpassword } 
//           axios.post("http://localhost:7000/add-user", myuserdata)
//            .then((result) => { console.log(result.data); })
//            .catch((er) => { console.log(er); }) 
//            console.log(myuserdata); 
//           } 
//           return ( 
//           <> 
//           <div className="">
//              UserName: <input type="text" placeholder="user name" onChange={userNamefun}></input> 
//              <br /> 
//              UserPasswotd: <input type="password" placeholder="enter password" onChange={userPasswordfun}/> 
//              <br /> <button onClick={submitData}>Submin</button> </div> </> )
//               } 
//               export default Form;




import { useState } from "react";
import axios from "axios";
 
const Form = () => {
   const [userData, setUserData] = useState({
      userName: "",
      userPassword: ""
   });
   const adduser = (event) => {
      const {name, value} = event.target;
      setUserData((pre) => ({
         ...pre,  [name] : value
      }));
   }
   const submitData = () => {
      console.log(userData);
      axios.post("http://localhost:7000/add-user", userData)
         .then((result) => {
            console.log(result.data);
         }).catch((er) => {
            console.log(er);
         })
   }
   return (
      <>
         <div className="">
            UserName: <input type="text"
            name="userName"
            placeholder="user name"
            onChange={adduser}>
            </input>
            <br />
            UserPasswotd: <input type="password"
            name="userPassword"
            placeholder="enter password"
            onChange={adduser}/>
            <br />
            <button onClick={submitData}>Submin</button>
         </div>
      </>
   )
}
export default Form;




