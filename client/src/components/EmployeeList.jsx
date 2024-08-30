import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/api/getall")
        .then(response => setEmployees(response.data))
        .catch(error => console.error('Error fetching employees:', error));
}, []);


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
        </tr>
        </thead>
        <tbody>
          {employees.map(e=>(
            <tr key={e.id}>
          <td>{e.id}</td>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.email}</td>
          </tr>
        ))}
       </tbody>
        
     </table>

    </div>
  )
}

export default EmployeeList