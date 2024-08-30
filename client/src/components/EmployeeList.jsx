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
      {/* <button onClick={()=>ff()}>Get list</button> */}
      <ul>
        {employees.map(e=>(
          <li key={e.id}>
            {e.firstName} {e.lastName}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default EmployeeList