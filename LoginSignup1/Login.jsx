import React from 'react';
import styles from "./Login.module.css";
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Login =()=>{
      const[Data,setData]=useState({
        username:"",
        password:"",
        image:""
        })
  const ImageRef = useRef(null)
  const handleImage=()=>{
    ImageRef.current.click();
  }
  const handleSubmit = () => {
    if (Data.username === "" || Data.password === "") {
      toast.error("Please fill all fields");
    } else {
      toast.success("Login Successfully");
      setTimeout(() => {
        onLoginSuccess();
      }, 1500);
      
    }
  }

    return(
        <>
        <div className={styles.container}>
         
        {Data.image ? <img onClick={handleImage} src={URL.createObjectURL(Data.image)}/> : <img onClick={handleImage} src='https://gatax.in/_next/image?url=https%3A%2F%2Fapi.gatax.in%2Fpublic%2Fimages%2Fnull2.png&w=640&q=75'/>}
       
        <input className={styles.username} type="text" placeholder='UserName' onChange={(e)=>{setData({...Data,username:e.target.value})}}/>
        <input  className={styles.password} type="password" placeholder="Password" onChange={(e)=>{setData({...Data,password:e.target.value})}}/>
        <button className={styles.submit} onClick={()=>handleSubmit()}>Submit</button>
        <p className={styles.para}>Don't Have An Account? <a href="#">Signup</a></p>
        <ToastContainer />
        </div>
        </>
    )
  
};
export default Login;