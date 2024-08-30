package com.employeetracker.server.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeetracker.server.entities.Employee;
import com.employeetracker.server.service.EmployeeService;

@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	private EmployeeService empService;

	@GetMapping("/getall")
	public List<Employee> getAllEmployees()
	{
		return empService.getAllEmployees();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id)
	{
		Optional<Employee> employee = empService.getEmployeeById(id);
		return employee.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
	}
	
	@PostMapping("/add")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee)
	{
		return ResponseEntity.ok(empService.saveEmployee(employee));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Long id)
	{
		return ResponseEntity.ok(empService.deleteEmployee(id));
	}
	
}
