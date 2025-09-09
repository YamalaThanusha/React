import React from "react";
import styles from "./Einvite.module.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Einvite=()=>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
    return(
        <>
        <h1>INVITATIONS</h1>
        <div className={styles.main1}>
            <div className={styles.islider}>
            <Slider {...settings}>
                   <div className={styles.slick1} >
                               
                            <img src="inivi1.avif" />
                            </div>
                            <div className={styles.slick1}  >
                            <img src="inivi2.jpg" />
                            </div>
                            <div className={styles.slick1} >
                            <img src="inivi3.jpg" />
                            </div>
                            <div className={styles.slick1} >
                            <img src="inivi4.jpg"/>
                            </div >
                            <div className={styles.slick1} >
                            <img src="inivi5.jpg" />
                            </div>
            </Slider>
            </div>
            <div className={styles.slidercontent}><h1>Eco-Friendly invitations</h1></div>


        </div>
        <div className={styles.main2}>
            <div className={styles.islider}>
            <h1>Traditiondal invitations</h1>
            </div>
            
            <div className={styles.slidercontent}>
                <Slider {...settings}>
                       <div className={styles.slick1} >
                                   
                                <img src="inivi7.webp" />
                                </div>
                                <div className={styles.slick1}  >
                                <img src="inivi8.jpg" />
                                </div>
                                <div className={styles.slick1} >
                                <img src="inivi9.jpeg" />
                                </div>
                                <div className={styles.slick1} >
                                <img src="inivi10.jpg"/>
                                </div >
                                <div className={styles.slick1} >
                                <img src="inivi14.webp" />
                                </div>
                </Slider>
            </div>
        </div>


        <div className={styles.main3}>
            <div className={styles.islider}>
            <Slider {...settings}>
                   <div className={styles.slick1} >
                               
                            <img src="inivi11.avif" />
                            </div>
                            <div className={styles.slick1}  >
                            <img src="inivi12.jpg" />
                            </div>
                            <div className={styles.slick1} >
                            <img src="inivi13.webp" />
                            </div>
                            <div className={styles.slick1} >
                            <img src="inivi6.jpg"/>
                            </div >
                            <div className={styles.slick1} >
                            <img src="inivi16.jpg" />
                            </div>
            </Slider>
            </div>
            <div className={styles.slidercontent}><h1>Normal Invitations</h1></div>
        </div>
        </>
    );
}
export default Einvite;