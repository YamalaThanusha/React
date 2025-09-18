import React from 'react';
import styles from "./Login.module.css";
import {Link} from "react-router-dom";
const Login=()=>{
    return(
        <>
        <div className={styles.maincontainer}>

        <div className={styles.container1}>
            <div className={styles.container11}>
                <div className={styles.insidecontainer1}>
              <h1>Advanture start here</h1>
              <p>Create and account to Join Our Community</p></div>
            </div>
        </div>
        <div className={styles.container2}>
            <div className={styles.container21}>
             <div className={styles.insidecontainer2}>
             <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Logo"
            className={styles.logo}
          />
          <h2>Hello ! Welcome back</h2>

          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" />
            <label>Password</label>
            <input type="password" placeholder="Password" />

            <div className={styles.options}>
            <label className={styles.remember}>
    <input type="checkbox" className={styles.checkbox} />
    <span>Remember</span>
  </label>
              <a href="#">Reset Password!</a>
            </div>
            <Link to="/success">
            <button type="submit">Login</button></Link>
          </form>
          <div className={styles.divider}>_______________________or_____________________</div>
          <div className={styles.socialIcons}>
            <button className={styles.google}><i class="fa-brands fa-google"></i></button>
            <button className={styles.facebook}><i class="fa-brands fa-facebook"></i></button>
            <button className={styles.apple} ><i class="fa-brands fa-apple"></i></button>
          </div>

          <p className={styles.signupText}>
            Don't have an account? <Link to="/signup">Create Account</Link>
          </p>
             </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Login;