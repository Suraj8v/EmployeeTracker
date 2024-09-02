import React from "react"
import EmployeeList from "./components/EmployeeList"
import EmployeeForm from "./components/EmployeeForm"
import { Route,BrowserRouter as Router, Routes} from "react-router-dom"


function App() {
  return (
    <div className="app">
      <div className="title">
      <h1>Employee Tracker</h1>
      </div>
      <Router>
      <Routes>
       <Route path="/" element={<EmployeeList/>} /> 
       <Route path="/add" element={<EmployeeForm/>} />   
      </Routes>
      </Router>
     
     
      
    </div>
  )
}

export default App
