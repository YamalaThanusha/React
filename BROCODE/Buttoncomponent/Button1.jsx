
//INLINE CSS

function Button(){
  
    const styles={
        backgroundColor: "hsl(200,100%,80%)",
        color:"white",
        padding:"10px 20px",
        borderRadius: "5px",
        border:"none",
        cursor: "pointer"
    }
    
return(
    <>
    <button style={styles}>Click Me!</button>
    </>
);
}
export default Button



//EXTERNAL CSS
// import './Button.css'
// function Button(){
//     return(
//         <>
//         <button className="button">Click Me!</button>
//         </>
//     );
//     }
//     export default Button




//MODULE CSS
// import styles from "./Button1.module.css";
//     function Button(){
//         return(
//             <>
//             <button className={styles.button}>Click Me!</button>
//             </>
//         );
//         }
//         export default Button