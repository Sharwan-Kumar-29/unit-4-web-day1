function mergingObjects(obj1, obj2) {
  let studentWithCourse = {
    ...obj1,
    ...obj2,
  };

  return studentWithCourse;
}

//Example Invocation:

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }
