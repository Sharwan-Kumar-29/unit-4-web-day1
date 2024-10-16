function thirdEmployeeInfo(employees) {
  let {
    name: thirdEmployeeName,
    age: thirdEmployeeAge,
    salary: thirdEmployeeSalary,
  } = employees[2];

  return {
    thirdEmployeeName,
    thirdEmployeeAge,
    thirdEmployeeSalary,
  };
}

//Example Invocation:

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
