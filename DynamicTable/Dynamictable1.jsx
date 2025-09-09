import styles from "./Dynamictable1.module.css";

import React, { useState } from 'react';

const Dynamictable1 = () => {
  const [data, setData] = useState([]);

  const add = () => {
    const rollnumber = prompt("Enter Your Roll Number:");
    const username = prompt("Enter Your Name:");
    const age = prompt("Enter Your Age:");

    if (rollnumber && username && age) {
      const newData = {rollnumber,username,age,};
      setData([...data, newData]);
    } else {
      alert("Please fill in all the fields!");
    }
  }
  const deleteRow = (index) => {
    let newData = [...data];     
    newData.splice(index, 1);      
     setData(newData);             
  };
  
  const editRow = (index) => {
    const current = data[index];

    const rollnumber = prompt("Edit Roll Number:", current.rollnumber);
    const username = prompt("Edit Username:", current.username);
    const age = prompt("Edit Age:", current.age);

    if (rollnumber && username && age) {
      const updatedRow = { rollnumber, username, age };
      let newData = [...data];
      newData[index] = updatedRow;
      setData(newData);
    } else {
      alert("Please fill in all the fields!");
    }
  };
  return(
    <>
   
  <button onClick={add} className={styles.add}>Add Details</button>
  <table className={styles.details}>
    
    <th>RollNO</th> 
    <th>UserName</th>
    <th>Age</th>
    <th>Edit&Del</th>
    
    {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.rollnumber}</td>
              <td>{entry.username}</td>
              <td>{entry.age}</td>
            
              <td>
              <button onClick={() => editRow(index)}  className={styles.edit}>Edit</button>
                <button onClick={() => deleteRow(index)} className={styles.del}>Delete</button>
              </td>
            </tr>
          ))}
          
  </table>
 
  </>
)
}
export default Dynamictable1