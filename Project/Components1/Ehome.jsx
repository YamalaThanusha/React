import React from "react"; 
import Eheader from "./Eheader";
import Efooter from "./Efooter";
import { Outlet} from "react-router-dom";
const Ehome=()=>{
    return(
        <>
        <Eheader/>
        <Outlet/>
        < Efooter/>
        </>
    );

}
export default Ehome;


   