function totalSalaryByDepartment(employees, dept) {
  let total_salary = 0;

  for (let { department, salary } of employees) {
    if (department == dept) {
      total_salary += salary;
    }
  }

  return total_salary;
}

//Example Invocation:
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

console.log(totalSalaryByDepartment(employees, "Finance")); // Output: 125000
