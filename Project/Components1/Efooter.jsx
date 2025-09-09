import React from "react";
import styles from './Efooter.module.css';
const Efooter=()=>{
    return(
    <>
    <div className={styles.Efootermain}>
        <div className={styles.heading}>
        <h1>Eplanner</h1></div>
         <div className={styles.navbar}>
                <ul>
                    <li>ABOUTUS</li>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>  
                </ul>
                </div>
                <div className={styles.icons}>
                <i class="fa-brands fa-facebook fa-xl"></i>
                <i class="fa-brands fa-twitter fa-xl"></i>
                <i class="fa-brands fa-square-instagram fa-xl"></i>
                <i class="fa-brands fa-youtube fa-xl"></i>
                </div>
                <p>&copy;{new Date().getFullYear()}EventPlanner.All Right Reserved.Designed By Expresso Soft</p>
    </div>
    </>
);
}
export default Efooter;