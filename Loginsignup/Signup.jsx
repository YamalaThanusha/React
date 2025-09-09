import React from "react";
import styles from "./Signin.module.css";
import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
  
    e.preventDefault();
  
    toast.success("Form submitted successfully");
    
    setTimeout(() => {
      navigate("/login"); // go to login page
    }, 1500);
  };
  return (
    <>
    <div className={styles.main}>
        <div className={styles.container1}>
            <div className={styles.container11}>
                <div className={styles.leftpanel1}>
                    <div className={styles.image}></div>
                    <div className={styles.matter}>
                        <h1>Eiusmod tempor</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.sed do elsusmod tempor incididunt ut labore</p>
                    </div>
                </div>
                <div className={styles.leftpanel1}>
                <div className={styles.image}></div>
                <div className={styles.matter}> <h1>Natus error sit</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.sed do elsusmod tempor incididunt ut labore</p></div>
                </div>
                <div className={styles.leftpanel1}>
                <div className={styles.image}></div>
                <div className={styles.matter}> <h1>Dignissimos ducimus</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.sed do elsusmod tempor incididunt ut labore</p></div>
                </div>
            </div>
            <div className={styles.rightPanel}>
        <h2>
          Sign up as <span>Diagnostic Lab</span>
        </h2>
        <form className={styles.form}>
          <label>Lab name</label>
          <input type="text" placeholder="Enter your laboratory name" />

          <div className={styles.row}>
            <div>
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Your role</label>
              <input type="text" placeholder="Enter your role in the lab" />
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <label>Daily pathology reports</label>
              <input type="text" placeholder="Number of reports" />
            </div>
            <div>
              <label>Daily radiology reports</label>
              <input type="text" placeholder="Number of reports" />
            </div>
          </div>

          <label>Mobile Number</label>
          <input type="text" placeholder="Enter your mobile number" />

          <label>Address</label>
          <input type="text" placeholder="Enter lab address" />

          <div className={styles.terms}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree with all <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policies</a> of evolko.
            </label>
          </div>
         <Link to="/login">
          <button type="submit" >
            Sign Up
          </button></Link>
        </form>
      </div> </div>
       
    </div>
    <ToastContainer/>
    </>

  )
};


export default SignUp;
