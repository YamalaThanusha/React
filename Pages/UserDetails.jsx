import { useParams } from "react-router-dom";
const UserDetails=()=>{
    const {name}=useParams();
    console.log(name);
    if(name===1){
        return<h1>User-{name}</h1>
    }
    else if(name===2){
        return<h1>User-{name}</h1>
    }
    else if(name===3){
        return<h1>User-{name}</h1>
    }
    else {
        return<h1>User-{name}</h1>
    }
    

}
export default UserDetails;