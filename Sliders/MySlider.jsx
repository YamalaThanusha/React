import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./MySlider.module.css";
const MySlider=()=>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
      return(
        <div className={styles.slick}>
        <Slider {...settings}>
      
            <div className={styles.slick1} >
               
                <img src="/src/assets/color1.jpg" className={styles.image}/>
            </div>
            <div className={styles.slick1}>
            <img src="/src/assets/image20.jpg" className={styles.image}/>
            </div>
            <div className={styles.slick1}>
            <img src="/src/assets/images.jpeg" className={styles.image}/>
            </div>
            <div className={styles.slick1}>
            <img src="/src/assets/img7.jpeg" className={styles.image}/>
            </div >
            <div className={styles.slick1}>
            <img src="/src/assets/images.png" className={styles.image}/>
            </div>
           
        </Slider>
        </div>
      )
}
export default MySlider;