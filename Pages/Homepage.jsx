import {Link, Outlet,useNavigate} from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Homepage =()=>{
    const Navigation=useNavigate();
    const myfun=()=>{
        Navigation("/User")
    }
    return(
        <>
        <Header/>
        <h1>HomePage</h1>
         <ul>
            <li><Link to="/About-page">About Page</Link></li>
            <li><Link to="/Contact-page">Contact page</Link></li>
            {/* <li><Link to="/User">User</Link></li> */}
            <li><Link to="/User?name=Thanusha&id=190">User</Link></li>{/*Query parameters*/}
            <li><Link to="/UserDetails/:name">UserDetails</Link></li>
         </ul>
         <Outlet/>
         <Footer/>
         <button onClick={myfun}>Clickme</button>
         </>
        
    )
}
export default Homepage; 