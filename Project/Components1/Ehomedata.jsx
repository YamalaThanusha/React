import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Ehomedata.module.css";
const Ehomedata=()=>{
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
    return(
        <>
        <div className={styles.slick} >
        <Slider {...settings}>
      
            <div className={styles.slick1} >
               
            <img src="amish-thakkar-7O422yG_b80-unsplash.jpg" />
            </div>
            <div className={styles.slick1}  >
            <img src="pexels-pavel-danilyuk-7180858.jpg" />
            </div>
            <div className={styles.slick1} >
            <img src="pexels-pavel-danilyuk-7180858.jpg" />
            </div>
            <div className={styles.slick1} >
            <img src="Babyshower.jpeg"/>
            </div >
            <div className={styles.slick1} >
            <img src="wedding-2824517_1280.jpg" />
            </div>
        </Slider>
        </div>
        <div className={styles.content}>
            <h1>LET'S MAKE YOUR DAY PERFECT!</h1>
            <p>IT'S ONE DAY ONLY, MAKE IT THE BEST!</p>
         
        </div>
       <div className={styles.cardscontainer}>
        <h1>Events</h1>
        <div className={styles.cardscontainer1}>
        <div className={styles.card1}> <img src="wedding-2995641_1280.jpg" /><div className={styles.overlay}><h3></h3></div></div>
        <div className={styles.card1}><img src="wedding-2995641_1280.jpg" /></div>
        <div className={styles.card1}><img src="wedding-2995641_1280.jpg" /></div>
        <div className={styles.card1}><img src="wedding-2995641_1280.jpg" /></div></div>
        <button>Overview</button>
       </div>



       <div className={styles.puberty}>
       
        <div className={styles.puberty1}>
        <div className={styles.pubertyimage}>
            <div className={styles.pimage1}><img src="wedding-2995641_1280.jpg" /></div>
            <div className={styles.pimage2}><img src="wedding-2995641_1280.jpg" /></div>
            <div className={styles.pimage3}><img src="wedding-2995641_1280.jpg" /></div>
        </div>
        <div className={styles.pubertycontent}>
        <h1>Puberty Events</h1>
            <p>A half saree function in South India, like Andhra Pradesh, is a significant cultural celebration marking a young girl's transition into adulthood, often coinciding with her first menstruation. It's a rite of passage, similar to a girl's coming-of-age party, and is celebrated with joy and festive attire, including a half saree outfit. The function is a time for families to bless the young girl, reinforce traditional roles, and celebrate her growth. </p>
            <button>Overview</button>
        </div></div>
       </div>



       <div className={styles.marriage}>
        <h1>Marriage Events</h1>
        <div className={styles.marriage1}>
            <div className={styles.marricard}><img src="wedding-2995641_1280.jpg" /></div>
            <div className={styles.marricard}><img src="wedding-2995641_1280.jpg" /></div>
            <div className={styles.marricard}><img src="wedding-2995641_1280.jpg" /></div> </div>
            <div className={styles.marriage2}>
            <div className={styles.marricard}><img src="wedding-2995641_1280.jpg" /></div>
            <div className={styles.marricard}><img src="wedding-2995641_1280.jpg" /></div>
            <div className={styles.marricard}><img src="wedding-2995641_1280.jpg" /></div>
            </div>
           
            <button>Overview</button>
       </div>
       <div className={styles.babyshower}>
        <div className={styles.babyshowerimage}>
            <div className={styles.bimage1}><img src="kelly-sikkema-IE8KfewAp-w-unsplash.jpg" /></div>
        </div>
        <div className={styles.babyshowercontent}>
            <h1>Baby<br/> Shower</h1>
            
            <button>More info</button></div>
        
       </div>
        </>
    );
}
export default Ehomedata;