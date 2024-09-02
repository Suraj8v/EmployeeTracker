import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function EmployeeForm()
{

    const[employee,setEmployee] = useState({firstName:"", lastName:"",email:"",department:""})    

    const handleChange=(e)=>{
        const {name,value}=e.target
        setEmployee({...employee, [name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/api/add",employee) 
        alert("employee added!")
    }

    return(
        <div>
        <form onSubmit={handleSubmit} >
            <div>
                <label >First Name</label> <br />
                <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} required />
            </div>
            <div>
                <label > Last Name</label> <br />
                <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} required />
            </div>
            <div>
                <label>Email</label><br />
                <input type="text" name="email" value={employee.email} onChange={handleChange} required />
            </div>
            <div>
                <label >Department</label><br />
                <input type="text" name="department" value={employee.department} onChange={handleChange} required />
            </div>
         
            <button className="btn" type="submit">ADD</button>

            <Link to="/">
            <button className="btn" type="button">View List</button>
            </Link>
          
        </form>
        </div>
    )
}

export default EmployeeForm