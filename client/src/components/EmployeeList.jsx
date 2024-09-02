import React, { useEffect, useState } from "react";
import axios from "axios";
import trash from '../assets/trash.png'
import note from '../assets/note.png'
import { Link } from "react-router-dom";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/api/getall")
        .then(response => setEmployees(response.data))
        .catch(error => console.error('Error fetching employees:', error));
}, []);

const deleteEmployee=(id)=>
{
  axios.delete(`http://localhost:8080/api/${id}`)
  .then(()=>{
    setEmployees(employees.filter(employee => employee.id !== id))
  }).catch(error=> console.log("error deleting employee", error))
}


  return (
    <div>
      <h2>Employee List</h2>
     <table className="emplist">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {employees.map(e=>(
            <tr key={e.id}>
          <td>{e.id}</td>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.email}</td>
          <td>{e.department}</td>
          <td><button><img src={note}/></button> <span></span> <button onClick={()=> deleteEmployee(e.id)}><img src={trash}/></button> </td>
          </tr>
        ))}
       </tbody> 
        
     </table>
            <Link to="/add"> 
            <button className="btn" type="submit">Add new employee</button>
            </Link>
    </div>
  )
}

export default EmployeeList