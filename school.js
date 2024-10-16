const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

// Problem 10
//  Extract the `mathTeachersCount`,`historyTeachersCount`, `mathStudentsCount`, and `historyStudentsCount` using multilevel destructuring.
function countCalculation(school) {
  const {
    departments: {
      math: { teachers: mathsTeacherCount, students: mathsstudentCount },
      history: { teachers: historyTeacherCount, students: historyStudentCount },
    },
  } = school;

  return {
    mathsTeacherCount,
    historyTeacherCount,
    mathsstudentCount,
    historyStudentCount,
  };
}

console.log(countCalculation(school));

// Problem 11:
// - **`findTopStudent`** that takes a course name as a parameter and finds the student with the highest score in that course using multilevel destructuring.

function findTopStudent(school, subject) {
  const { students } = school;
  let highest = students[0];

  for (let student of students) {
    const { scores } = student;
    const { scores: high_score } = highest;

    if (scores[subject] > high_score[subject]) {
      highest = student;
    }
  }
  return highest;
}

console.log(findTopStudent(school, "math"));

// Problem 12:
// - Use the spread operator to add new departments for example **`art`** with teachers and students to the school's

function addNewDept(school, newDepartment, teachers, students) {
  let newDepartmentobj = { [newDepartment]: { teachers, students } };
  let updatedSchool = {
    ...school,
    departments: {
      ...school.departments,
      ...newDepartmentobj,
    },
  };
  return updatedSchool;
}

console.log(addNewDept(school, "art", 2, 50));

// Problem 13:
// - **`highestStudentCountDepartment`** that returns the department (name) with the highest number of students.

function highestStudentCountDepartment(school) {
  const { departments } = school;
  let max_student = 0;
  let subject = "";
  for (let key in departments) {
    const { students } = departments[key];
    if (students > max_student) {
      max_student = students;
      subject = key;
    }
  }
  return subject;
}
console.log(highestStudentCountDepartment(school));

// Problem 14:
// You are creating a JavaScript function to generate a personalized greeting message.
// - The function should have a default parameter for the language, which is set to `English`.

function generateGreeting(name, language = "English") {
  if (language == "English") {
    return `Hello, ${name}!`;
  } else if (language == "Spanish") {
    return `¡Hola, ${name}!`;
  } else if (language == "French") {
    return `Bonjour, ${name}!`;
  }
}
console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
