function cloningObjects(obj) {
  let personCopy = {
    ...obj,
  };

  return personCopy;
}

//Example Invocation:
const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }
