import {Link,useLocation} from "react-router-dom";
const User =()=>{
    {/*To get the user parameters*/ }
    const myparams=useLocation();
    const Searchparams= new URLSearchParams(myparams.search);
    const name=Searchparams.get("name");
    const id=Searchparams.get("id");
    console.log(name," ",id);
    return(
        <>
        <h1>Users</h1>
        <ul>
        <li><Link to={`user1${1}`}>User-1</Link></li>
        <li><Link to={`user1${2}`}>User-2</Link></li>
        <li><Link to={`user1${3}`}>User-3</Link></li>
        <li><Link to={`user1${4}`}>User-4</Link></li>
        </ul>
        </>
    )
}
export default User;