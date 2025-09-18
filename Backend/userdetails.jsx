import axios from "axios";
import { useEffect, useState } from "react";

const Employeedetails = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7000/get-user-data")
            .then((result) => {
                console.log(result.data);
                setUserData(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1>User Details</h1>
            {
                userData.map((item, index) => (
                    <div key={index}>
                        <p>Username: {item.userName}</p>
                        <p>Password: {item.userPassword}</p>
                    </div>
                ))
            }
        </>
    );
}

export default Employeedetails;
