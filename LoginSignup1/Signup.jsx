import React from 'react';
import styles from "./Signup.module.css";
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Signup =({ onSignupSuccess })=>{
      const[Data,setData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
        image:""
        })
  const ImageRef = useRef(null)
  const handleImage=()=>{
    ImageRef.current.click();
  }
  const handleSubmit=()=>{
    const EmailRegex = /[a-zA-Z\d]+@[a-zA-Z]+\.[a-z]/
    const regex = /[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]/
    const regex1 = /[a-z]/
    const regex2 = /[A-Z]/
    const regex3 = /[\d]/  //[0-9]
    if(Data.firstname===""){
      alert("Enter FirstName")
    }else if(Data.lastname===""){
      alert("Enter LastName")
    }else if(Data.email===""){
      alert("Enter Email")
    }else if(!EmailRegex.test(Data.email)){
      alert("Enter Valid Email")

    }else if(Data.password===""){
      alert("Enter Password")
    }else if(Data.password.length<8){
      alert("Password Must be 8 character length")
    }else if(!regex1.test(Data.password)){
      alert("Password Must contain one lowercase letter")
    }else if(!regex2.test(Data.password)){
      alert("Password Must contain one uppercase letter")
    }else if(!regex3.test(Data.password)){
      alert("Password Must contain one number")
    }else if(!regex.test(Data.password)){
      alert("Password Must contain one special character")
    }else{
      toast.success("form subitted sucessfully")
      console.log(Data);
      setTimeout(() => {
        onSignupSuccess(); 
      }, 2000);
    }
  }


    
    return(
        <>
        <div className={styles.container}>
         
        {Data.image ? <img onClick={handleImage} src={URL.createObjectURL(Data.image)}/> : <img onClick={handleImage} src='https://gatax.in/_next/image?url=https%3A%2F%2Fapi.gatax.in%2Fpublic%2Fimages%2Fnull2.png&w=640&q=75'/>}
       
            <input  className={styles.firstname} type="text" placeholder="FirstName" onChange={(e)=>{setData({...Data,firstname:e.target.value})}}/>
              <input className={styles.firstname} type="text" placeholder="LastName" onChange={(e)=>{setData({...Data,lastname:e.target.value})}}/>
              <input className={styles.firstname} type="email" placeholder="Email" onChange={(e)=>{setData({...Data,email:e.target.value})}}/>
              <input  className={styles.firstname} type="password" placeholder="Password" onChange={(e)=>{setData({...Data,password:e.target.value})}}/>
              <input  className={styles.firstname} type="password" placeholder="Confirm Password" onChange={(e)=>{setData({...Data,confirmpassword:e.target.value})}}/>
              <button className={styles.submit} onClick={()=>{handleSubmit()}}>Signup</button>
              <p className={styles.para} onClick={onSignupSuccess}>Already Have An Account?<a herf="#" >Login</a></p>
                      <ToastContainer />
              </div>
        </>
    )
}
export default Signup;