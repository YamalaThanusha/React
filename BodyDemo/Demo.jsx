// import react from "react";
// const Demo =()=>{
//     return(
//         <>
//         <h1 style ={{color:"red",backgroundColor:"white"}}>My name is react</h1>
//         </>
//     )
// };
// export default Demo;



// import react from "react";
// import "./Demo.css";
// const Demo =()=>{
//     return(
//         <>
//         <h1 className="hello">My name is react</h1>
//         </>
//     )
// };
// export default Demo;


import react from 'react';
import styles from "./Demo.module.css";
const Demo =()=>{
    return(
        <>
       
          
            <div className={styles.main1}>
            <div  className={styles.logo}></div>
            <div  className={styles.name}>Rang Barse</div></div>

            <div className={styles.main2}>
            <div  className={styles.home}>Home</div>
           <div  className={styles.home}>About</div>
           <div  className={styles.home}>Contact</div>
          <div  className={styles.home}>Login</div></div>
          <div className={styles.main3}>
          <video autoplay loop  >
  <source src="\videos\vecteezy_ai-generated-super-slow-motion-of-coloured-powder-explosion_40755996.mp4" type="video/mp4" />
</video>

         </div>
    <div className={styles.main4}>
        <div className={styles.cardsmain}>
        <div className={styles.cards1}><div className={styles.image1}></div></div>   
        <div className={styles.cards1}> <div className={styles.image2}></div></div>
        <div className={styles.cards1}> <div className={styles.image3}></div></div>
        </div>
    </div>
    <div className={styles.footer}>
    <div className={styles.footer1}>
    <div className={styles.footer11}><div className={styles.footericon1}><i class="fa-solid fa-location-dot fa-2xl"></i></div>
    <div className={styles.footeradd}>21 Revolution street  <b>Paris, France</b></div>
    </div>
    <div className={styles.footer11}><div className={styles.footericon1}><i class="fa-solid fa-phone fa-2xl"></i></div>
    <div className={styles.footeradd}><b>+91 9923464387</b></div></div>
    <div className={styles.footer11}><div className={styles.footericon1}><i class="fa-solid fa-envelope fa-2xl"></i></div>
    <div className={styles.footeradd}><b>Holicolors@gmail.com</b></div></div>
    </div>
    <div className={styles.footer2}>
    <div className={styles.footer21}><div className={styles.aboutus}>About Us</div></div>
    <div className={styles.footer22}><div className={styles.pic}></div></div>
    <div className={styles.footer23}>
    <div className={styles.footericons1}><i class="fa-brands fa-facebook fa-2xl"></i></div>
    <div className={styles.footericons1}><i class="fa-brands fa-twitter fa-2xl"></i></div>
    <div className={styles.footericons1}><i class="fa-brands fa-instagram fa-2xl"></i></div>
    <div className={styles.footericons1}><i class="fa-brands fa-github fa-2xl"></i></div></div>
    </div>
    </div>
        
       
        </>
    )
};
export default Demo; 