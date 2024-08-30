package com.employeetracker.server.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeetracker.server.entities.Employee;
import com.employeetracker.server.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository empRepo;
	
	public List <Employee> getAllEmployees()
	{
		return empRepo.findAll();
	}

	public Optional<Employee> getEmployeeById(Long id)
	{
		return empRepo.findById(id);
	}
	
	public Employee saveEmployee(Employee emp)
	{
		return empRepo.save(emp);
	}
	
	public String deleteEmployee(Long id)
	{
		empRepo.deleteById(id);
		return "Employee with id : "+id+" deleted successfully!";
	}
}
