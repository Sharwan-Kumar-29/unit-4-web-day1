function highestPaid(employees) {
  let highest_paid = employees[0];

  for (let employee of employees) {
    let { salary } = employee;
    let { salary: high_salary } = highest_paid;

    if (salary > high_salary) {
      highest_paid = employee;
    }
  }

  return highest_paid;
}

// Example Invocation:

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
