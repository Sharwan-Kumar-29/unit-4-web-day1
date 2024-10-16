function averageSalary(employees) {
  let avg = 0;

  for (let { salary } of employees) {
    avg += salary;
  }

  return avg / employees.length;
}

//Example Invocation:

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(averageSalary(employees)); // Output: 60000
