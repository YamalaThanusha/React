import React from "react";
import styles from "./Eheader.module.css";
import {Link, Outlet,useNavigate} from "react-router-dom";
const Eheader=()=>{
    return(
        <>
        <div className={styles.main}>
        <div className={styles.heading}>
        <h1>Eplanner</h1></div>
        <div className={styles.nav}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="Einvite">Events</Link></li>
            <li><Link to="Edecor">About</Link></li>
            <li><Link to="Efood">Team</Link></li>
            <li><Link to="Emakeup">Gallery</Link></li>
            <li><Link to="Ephotoshoot">Contact</Link></li>
        </ul>
        </div>
        </div>
        
        </>
    );

}
export default Eheader;